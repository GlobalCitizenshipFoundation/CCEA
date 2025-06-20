
import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InstitutionalFormData } from '@/types/membershipForms';

interface ContactInformationSectionProps {
  register: UseFormRegister<InstitutionalFormData>;
  errors: FieldErrors<InstitutionalFormData>;
  setValue: UseFormSetValue<InstitutionalFormData>;
  countries: string[];
  onInputChange: (field: string, value: string) => void;
}

const ContactInformationSection: React.FC<ContactInformationSectionProps> = ({
  register,
  errors,
  setValue,
  countries,
  onInputChange
}) => {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Primary Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="primaryContact">Full Name *</Label>
            <Input
              id="primaryContact"
              {...register('primaryContact', { required: 'Primary contact name is required' })}
              placeholder="John Doe"
              onChange={(e) => onInputChange('primaryContact', e.target.value)}
            />
            {errors.primaryContact && (
              <p className="text-sm text-red-600 mt-1">{errors.primaryContact.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="title">Title/Position *</Label>
            <Input
              id="title"
              {...register('title', { required: 'Title is required' })}
              placeholder="Director of Education"
              onChange={(e) => onInputChange('title', e.target.value)}
            />
            {errors.title && (
              <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="john.doe@organization.org"
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
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Location</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              {...register('address')}
              placeholder="123 Education Street"
              onChange={(e) => onInputChange('address', e.target.value)}
            />
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
        </div>
      </div>
    </>
  );
};

export default ContactInformationSection;
