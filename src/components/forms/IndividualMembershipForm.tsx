
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

const countries = getCountriesList('individual');

const IndividualMembershipForm = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IndividualFormData>();

  const watchCountry = watch('country');
  const countryInfo = countryClassifications[watchCountry as keyof typeof countryClassifications];
  const membershipFee = countryInfo?.fee || 100;
  const classification = countryInfo?.classification || 'Other';

  const onSubmit = (data: IndividualFormData) => {
    console.log('Individual membership application:', data);
    alert('Thank you for your application! We will review it and contact you within 3-5 business days.');
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
              errors={errors}
              setValue={setValue}
              countries={countries}
            />

            <ProfessionalInformationSection
              register={register}
              errors={errors}
              setValue={setValue}
            />

            <MembershipGoalsSection
              register={register}
              errors={errors}
            />

            <MembershipFeeDisplay
              membershipType="individual"
              watchCountry={watchCountry}
              countryInfo={countryInfo}
              membershipFee={membershipFee}
              classification={classification}
            />

            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Submit Associate Membership Application
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
