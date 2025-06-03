
import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface InstitutionalFormData {
  organizationName: string;
  organizationType: string;
  foundedYear: number;
  organizationSize: string;
  website: string;
}

interface OrganizationInformationSectionProps {
  register: UseFormRegister<InstitutionalFormData>;
  errors: FieldErrors<InstitutionalFormData>;
  setValue: UseFormSetValue<InstitutionalFormData>;
}

const OrganizationInformationSection: React.FC<OrganizationInformationSectionProps> = ({
  register,
  errors,
  setValue
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Organization Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="organizationName">Organization Name *</Label>
          <Input
            id="organizationName"
            {...register('organizationName', { required: 'Organization name is required' })}
            placeholder="Your institution or organization name"
          />
          {errors.organizationName && (
            <p className="text-sm text-red-600 mt-1">{errors.organizationName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="organizationType">Organization Type *</Label>
          <RadioGroup onValueChange={(value) => setValue('organizationType', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="university" id="university" />
              <Label htmlFor="university">University/Higher Education</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="k12" id="k12" />
              <Label htmlFor="k12">K-12 School</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ngo" id="ngo" />
              <Label htmlFor="ngo">NGO/Non-profit</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="government" id="government" />
              <Label htmlFor="government">Government Agency</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="foundedYear">Year Founded</Label>
          <Input
            id="foundedYear"
            type="number"
            {...register('foundedYear')}
            placeholder="2000"
          />
        </div>

        <div>
          <Label htmlFor="organizationSize">Organization Size *</Label>
          <RadioGroup onValueChange={(value) => setValue('organizationSize', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small">Small (1-50 people)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium (51-500 people)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large">Large (500+ people)</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          {...register('website')}
          placeholder="https://yourorganization.org"
        />
      </div>
    </div>
  );
};

export default OrganizationInformationSection;
