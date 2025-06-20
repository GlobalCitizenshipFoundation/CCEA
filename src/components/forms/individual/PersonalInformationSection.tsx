
import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IndividualFormData } from '@/types/membershipForms';

interface PersonalInformationSectionProps {
  register: UseFormRegister<IndividualFormData>;
  errors: FieldErrors<IndividualFormData>;
  setValue: UseFormSetValue<IndividualFormData>;
  countries: string[];
  onInputChange: (field: string, value: string) => void;
}

const PersonalInformationSection: React.FC<PersonalInformationSectionProps> = ({
  register,
  errors,
  setValue,
  countries,
  onInputChange
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
            placeholder="John"
            onChange={(e) => onInputChange('firstName', e.target.value)}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Doe"
            onChange={(e) => onInputChange('lastName', e.target.value)}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="john.doe@email.com"
            onChange={(e) => onInputChange('email', e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+1-555-123-4567"
            onChange={(e) => onInputChange('phone', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="country">Country *</Label>
          <select
            id="country"
            {...register('country', { required: 'Country is required' })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => {
              setValue('country', e.target.value);
              onInputChange('country', e.target.value);
            }}
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && (
            <p className="text-sm text-red-600 mt-1">{errors.country.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            {...register('city', { required: 'City is required' })}
            placeholder="Brussels"
            onChange={(e) => onInputChange('city', e.target.value)}
          />
          {errors.city && (
            <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationSection;
