
import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { InstitutionalFormData } from '@/types/membershipForms';

interface OrganizationInformationSectionProps {
  register: UseFormRegister<InstitutionalFormData>;
  errors: FieldErrors<InstitutionalFormData>;
  setValue: UseFormSetValue<InstitutionalFormData>;
  onInputChange: (field: string, value: string) => void;
}

const OrganizationInformationSection: React.FC<OrganizationInformationSectionProps> = ({
  register,
  errors,
  setValue,
  onInputChange
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
            onChange={(e) => onInputChange('organizationName', e.target.value)}
          />
          {errors.organizationName && (
            <p className="text-sm text-red-600 mt-1">{errors.organizationName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="organizationType">Organization Type *</Label>
          <RadioGroup onValueChange={(value) => {
            setValue('organizationType', value);
            onInputChange('organizationType', value);
          }}>
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
            onChange={(e) => onInputChange('foundedYear', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="organizationSize">Organization Size *</Label>
          <RadioGroup onValueChange={(value) => {
            setValue('organizationSize', value);
            onInputChange('organizationSize', value);
          }}>
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
          onChange={(e) => onInputChange('website', e.target.value)}
        />
      </div>
    </div>
  );
};

export default OrganizationInformationSection;
