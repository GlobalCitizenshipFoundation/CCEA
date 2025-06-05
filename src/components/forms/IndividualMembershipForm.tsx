
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import PersonalInformationSection from './individual/PersonalInformationSection';
import ProfessionalInformationSection from './individual/ProfessionalInformationSection';
import MembershipGoalsSection from './individual/MembershipGoalsSection';
import MembershipFeeDisplay from './shared/MembershipFeeDisplay';
import { countryClassifications, getCountriesList } from '@/data/countryClassifications';
import { IndividualFormData } from '@/types/membershipForms';
import { validateForm, commonValidationRules, rateLimiter, sanitizeInput } from '@/utils/formValidation';
import { securityMonitor } from '@/utils/securityMonitoring';
import { useToast } from '@/hooks/use-toast';

const countries = getCountriesList('individual');

const IndividualMembershipForm = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IndividualFormData>();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const watchCountry = watch('country');
  const countryInfo = countryClassifications[watchCountry as keyof typeof countryClassifications];
  const membershipFee = countryInfo?.fee || 100;
  const classification = countryInfo?.classification || 'Other';

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setValue(field as keyof IndividualFormData, sanitizedValue);
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const onSubmit = async (data: IndividualFormData) => {
    // Check rate limiting
    if (!rateLimiter.isAllowed('individual-membership', 2, 600000)) { // 2 attempts per 10 minutes
      const remainingTime = Math.ceil(rateLimiter.getRemainingTime('individual-membership', 600000) / 1000 / 60);
      securityMonitor.logEvent('rate_limit_exceeded', { form: 'individual-membership', remainingTime });
      
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} minutes before submitting again.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form
    const validationRules = {
      firstName: commonValidationRules.name,
      lastName: commonValidationRules.name,
      email: commonValidationRules.email,
      phone: commonValidationRules.phone,
      organization: commonValidationRules.organization,
      position: { required: true, minLength: 2, maxLength: 100 },
      country: { required: true },
      city: { required: true, minLength: 2, maxLength: 100 }
    };

    const validation = validateForm(data, validationRules);
    
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      securityMonitor.logEvent('validation_failed', { form: 'individual-membership', errors: validation.errors });
      return;
    }

    // Check for suspicious activity
    if (securityMonitor.detectSuspiciousActivity()) {
      toast({
        title: "Security Check",
        description: "Please wait a moment before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Log successful form submission
      securityMonitor.logEvent('form_submission', { form: 'individual-membership', success: true });
      
      console.log('Individual membership application:', data);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your application! We will review it and contact you within 3-5 business days.",
      });
      
    } catch (error) {
      securityMonitor.logEvent('form_submission', { form: 'individual-membership', success: false, error });
      toast({
        title: "Application failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center">
            <User className="h-8 w-8 text-green-600 mr-3" />
            Associate Membership Application
          </CardTitle>
          <p className="text-gray-600">For Individual Educators & Leaders</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <PersonalInformationSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              setValue={setValue}
              countries={countries}
              onInputChange={handleInputChange}
            />

            <ProfessionalInformationSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              setValue={setValue}
              onInputChange={handleInputChange}
            />

            <MembershipGoalsSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              onInputChange={handleInputChange}
            />

            <MembershipFeeDisplay
              membershipType="individual"
              watchCountry={watchCountry}
              countryInfo={countryInfo}
              membershipFee={membershipFee}
              classification={classification}
            />

            <div className="pt-6">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Associate Membership Application'}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Applications are typically reviewed within 3-5 business days. You will receive a confirmation email shortly.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndividualMembershipForm;
