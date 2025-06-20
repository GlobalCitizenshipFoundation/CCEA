
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';
import OrganizationInformationSection from './institutional/OrganizationInformationSection';
import ContactInformationSection from './institutional/ContactInformationSection';
import ExperienceSection from './institutional/ExperienceSection';
import MembershipFeeDisplay from './shared/MembershipFeeDisplay';
import { institutionalCountryClassifications, getCountriesList } from '@/data/countryClassifications';
import { InstitutionalFormData } from '@/types/membershipForms';
import { validateForm, commonValidationRules, rateLimiter, sanitizeInput } from '@/utils/formValidation';
import { securityMonitor } from '@/utils/securityMonitoring';
import { useToast } from '@/hooks/use-toast';

const countries = getCountriesList('institutional');

const InstitutionalMembershipForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<InstitutionalFormData>();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const watchCountry = watch('country');
  const countryInfo = institutionalCountryClassifications[watchCountry as keyof typeof institutionalCountryClassifications];
  const membershipFee = countryInfo?.fee || 500;
  const classification = countryInfo?.classification || 'Other';

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setValue(field as keyof InstitutionalFormData, sanitizedValue);
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const onSubmit = async (data: InstitutionalFormData) => {
    // Check rate limiting
    if (!rateLimiter.isAllowed('institutional-membership', 2, 600000)) { // 2 attempts per 10 minutes
      const remainingTime = Math.ceil(rateLimiter.getRemainingTime('institutional-membership', 600000) / 1000 / 60);
      securityMonitor.logEvent('rate_limit_exceeded', { form: 'institutional-membership', remainingTime });
      
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} minutes before submitting again.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form
    const validationRules = {
      organizationName: { required: true, minLength: 2, maxLength: 200 },
      organizationType: { required: true },
      website: { pattern: /^https?:\/\/.+/ },
      contactFirstName: commonValidationRules.name,
      contactLastName: commonValidationRules.name,
      contactEmail: commonValidationRules.email,
      contactPhone: commonValidationRules.phone,
      country: { required: true },
      city: { required: true, minLength: 2, maxLength: 100 }
    };

    const validation = validateForm(data, validationRules);
    
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      securityMonitor.logEvent('validation_failed', { form: 'institutional-membership', errors: validation.errors });
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
      securityMonitor.logEvent('form_submission', { form: 'institutional-membership', success: true });
      
      console.log('Institutional membership application:', data);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your application! We will review it and contact you within 5-7 business days.",
      });
      
    } catch (error) {
      securityMonitor.logEvent('form_submission', { form: 'institutional-membership', success: false, error });
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
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            Full Membership Application
          </CardTitle>
          <p className="text-gray-600">For Institutions & Organizations</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <OrganizationInformationSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              setValue={setValue}
              onInputChange={handleInputChange}
            />

            <ContactInformationSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              setValue={setValue}
              countries={countries}
              onInputChange={handleInputChange}
            />

            <ExperienceSection
              register={register}
              errors={{ ...errors, ...formErrors }}
              onInputChange={handleInputChange}
            />

            <MembershipFeeDisplay
              membershipType="institutional"
              watchCountry={watchCountry}
              countryInfo={countryInfo}
              membershipFee={membershipFee}
              classification={classification}
            />

            <div className="pt-6">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Full Membership Application'}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Applications are typically reviewed within 5-7 business days. You will receive a confirmation email shortly.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionalMembershipForm;
