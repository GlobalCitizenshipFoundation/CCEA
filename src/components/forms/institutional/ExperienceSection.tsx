
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface InstitutionalFormData {
  civicEducationExperience: string;
  currentPrograms: string;
  membershipGoals: string;
  references: string;
  additionalInfo: string;
}

interface ExperienceSectionProps {
  register: UseFormRegister<InstitutionalFormData>;
  errors: FieldErrors<InstitutionalFormData>;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  register,
  errors
}) => {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Civic Education Experience</h3>
        
        <div>
          <Label htmlFor="civicEducationExperience">Years of Experience in Civic Education *</Label>
          <Textarea
            id="civicEducationExperience"
            {...register('civicEducationExperience', { required: 'Experience description is required' })}
            placeholder="Describe your organization's experience and track record in civic education..."
            rows={4}
          />
          {errors.civicEducationExperience && (
            <p className="text-sm text-red-600 mt-1">{errors.civicEducationExperience.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="currentPrograms">Current Civic Education Programs</Label>
          <Textarea
            id="currentPrograms"
            {...register('currentPrograms')}
            placeholder="Describe your current civic education programs, curricula, or initiatives..."
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="membershipGoals">Membership Goals and Expectations *</Label>
          <Textarea
            id="membershipGoals"
            {...register('membershipGoals', { required: 'Membership goals are required' })}
            placeholder="What do you hope to achieve through CCEA membership? How will you contribute to the alliance?"
            rows={4}
          />
          {errors.membershipGoals && (
            <p className="text-sm text-red-600 mt-1">{errors.membershipGoals.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">References & Additional Information</h3>
        
        <div>
          <Label htmlFor="references">Professional References</Label>
          <Textarea
            id="references"
            {...register('references')}
            placeholder="Please provide two professional references (name, title, organization, email, phone)"
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            {...register('additionalInfo')}
            placeholder="Any additional information you'd like to share..."
            rows={3}
          />
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
