import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { IndividualFormData } from '@/types/membershipForms';

interface ProfessionalInformationSectionProps {
  register: UseFormRegister<IndividualFormData>;
  errors: FieldErrors<IndividualFormData>;
  setValue: UseFormSetValue<IndividualFormData>;
}

const ProfessionalInformationSection: React.FC<ProfessionalInformationSectionProps> = ({
  register,
  errors,
  setValue
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Professional Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="currentPosition">Current Position *</Label>
          <Input
            id="currentPosition"
            {...register('currentPosition', { required: 'Current position is required' })}
            placeholder="Teacher, Professor, Education Coordinator, etc."
          />
          {errors.currentPosition && (
            <p className="text-sm text-red-600 mt-1">{errors.currentPosition.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="organization">Current Organization *</Label>
          <Input
            id="organization"
            {...register('organization', { required: 'Organization is required' })}
            placeholder="School, University, NGO, etc."
          />
          {errors.organization && (
            <p className="text-sm text-red-600 mt-1">{errors.organization.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="educationLevel">Highest Education Level *</Label>
          <RadioGroup onValueChange={(value) => setValue('educationLevel', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bachelor" id="bachelor" />
              <Label htmlFor="bachelor">Bachelor's Degree</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="master" id="master" />
              <Label htmlFor="master">Master's Degree</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phd" id="phd" />
              <Label htmlFor="phd">PhD/Doctorate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other_education" id="other_education" />
              <Label htmlFor="other_education">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="yearsExperience">Years of Experience in Education *</Label>
          <RadioGroup onValueChange={(value) => setValue('yearsExperience', value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-2" id="0-2" />
              <Label htmlFor="0-2">0-2 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3-5" id="3-5" />
              <Label htmlFor="3-5">3-5 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6-10" id="6-10" />
              <Label htmlFor="6-10">6-10 years</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10+" id="10+" />
              <Label htmlFor="10+">10+ years</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <Label htmlFor="areasOfExpertise">Areas of Expertise in Civic Education *</Label>
        <Textarea
          id="areasOfExpertise"
          {...register('areasOfExpertise', { required: 'Areas of expertise are required' })}
          placeholder="Describe your specific areas of expertise in civic education, democracy, citizenship, etc."
          rows={3}
        />
        {errors.areasOfExpertise && (
          <p className="text-sm text-red-600 mt-1">{errors.areasOfExpertise.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
        <Input
          id="linkedinProfile"
          type="url"
          {...register('linkedinProfile')}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
    </div>
  );
};

export default ProfessionalInformationSection;
