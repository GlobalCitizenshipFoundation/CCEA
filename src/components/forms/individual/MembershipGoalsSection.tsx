
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { IndividualFormData } from '@/types/membershipForms';

interface MembershipGoalsSectionProps {
  register: UseFormRegister<IndividualFormData>;
  errors: FieldErrors<IndividualFormData>;
  onInputChange: (field: string, value: string) => void;
}

const MembershipGoalsSection: React.FC<MembershipGoalsSectionProps> = ({
  register,
  errors,
  onInputChange
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Membership Goals & Contributions</h3>
      
      <div>
        <Label htmlFor="professionalGoals">Professional Development Goals *</Label>
        <Textarea
          id="professionalGoals"
          {...register('professionalGoals', { required: 'Professional goals are required' })}
          placeholder="What do you hope to achieve through CCEA membership? How will it help your professional development?"
          rows={4}
          onChange={(e) => onInputChange('professionalGoals', e.target.value)}
        />
        {errors.professionalGoals && (
          <p className="text-sm text-red-600 mt-1">{errors.professionalGoals.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="contributions">How You Can Contribute to CCEA</Label>
        <Textarea
          id="contributions"
          {...register('contributions')}
          placeholder="Describe how you can contribute to the CCEA community (knowledge sharing, mentoring, resources, etc.)"
          rows={4}
          onChange={(e) => onInputChange('contributions', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="references">Professional References</Label>
        <Textarea
          id="references"
          {...register('references')}
          placeholder="Please provide two professional references (name, title, organization, email)"
          rows={3}
          onChange={(e) => onInputChange('references', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          {...register('additionalInfo')}
          placeholder="Any additional information you'd like to share..."
          rows={3}
          onChange={(e) => onInputChange('additionalInfo', e.target.value)}
        />
      </div>
    </div>
  );
};

export default MembershipGoalsSection;
