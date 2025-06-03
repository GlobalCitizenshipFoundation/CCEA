
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Mail, Phone, Globe, MapPin } from 'lucide-react';

interface InstitutionalFormData {
  organizationName: string;
  organizationType: string;
  primaryContact: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  country: string;
  foundedYear: number;
  organizationSize: string;
  annualBudget: string;
  civicEducationExperience: string;
  currentPrograms: string;
  membershipGoals: string;
  commitmentLetter: File | null;
  references: string;
  additionalInfo: string;
}

const InstitutionalMembershipForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<InstitutionalFormData>();

  const onSubmit = (data: InstitutionalFormData) => {
    console.log('Institutional membership application:', data);
    // Handle form submission
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
            {/* Organization Information */}
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

            {/* Primary Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Primary Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="primaryContact">Full Name *</Label>
                  <Input
                    id="primaryContact"
                    {...register('primaryContact', { required: 'Primary contact name is required' })}
                    placeholder="John Doe"
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
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Location</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    {...register('address')}
                    placeholder="123 Education Street"
                  />
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    {...register('city', { required: 'City is required' })}
                    placeholder="Brussels"
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    {...register('country', { required: 'Country is required' })}
                    placeholder="Belgium"
                  />
                  {errors.country && (
                    <p className="text-sm text-red-600 mt-1">{errors.country.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Experience and Programs */}
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

            {/* References and Additional Information */}
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

            {/* Membership Fee Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Membership Investment</h3>
              <p className="text-blue-800 mb-2">
                <strong>Full Membership:</strong> Starting from €500 annually
              </p>
              <p className="text-sm text-blue-700">
                Final membership fee will be determined based on your organization's size, capacity, and geographic location. 
                Our team will provide a custom quote during the consultation process.
              </p>
            </div>

            {/* Submit Button */}
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
