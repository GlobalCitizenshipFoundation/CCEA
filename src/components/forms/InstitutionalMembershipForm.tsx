
import React from 'react';
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

const countries = getCountriesList('institutional');

const InstitutionalMembershipForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<InstitutionalFormData>();

  const watchCountry = watch('country');
  const countryInfo = institutionalCountryClassifications[watchCountry as keyof typeof institutionalCountryClassifications];
  const membershipFee = countryInfo?.fee || 500;
  const classification = countryInfo?.classification || 'Other';

  const onSubmit = (data: InstitutionalFormData) => {
    console.log('Institutional membership application:', data);
    alert('Thank you for your application! We will review it and contact you within 5-7 business days.');
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
              errors={errors}
              setValue={setValue}
            />

            <ContactInformationSection
              register={register}
              errors={errors}
              setValue={setValue}
              countries={countries}
            />

            <ExperienceSection
              register={register}
              errors={errors}
            />

            <MembershipFeeDisplay
              membershipType="institutional"
              watchCountry={watchCountry}
              countryInfo={countryInfo}
              membershipFee={membershipFee}
              classification={classification}
            />

            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Full Membership Application
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
