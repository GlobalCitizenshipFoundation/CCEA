
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Phone, Globe, MapPin, GraduationCap, Award } from 'lucide-react';

interface IndividualFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  currentPosition: string;
  organization: string;
  educationLevel: string;
  yearsExperience: string;
  areasOfExpertise: string;
  professionalGoals: string;
  contributions: string;
  references: string;
  linkedinProfile: string;
  additionalInfo: string;
}

const countryClassifications = {
  // High-Income Countries - €100
  'United States': { fee: 100, classification: 'High-Income' },
  'Germany': { fee: 100, classification: 'High-Income' },
  'United Kingdom': { fee: 100, classification: 'High-Income' },
  'Canada': { fee: 100, classification: 'High-Income' },
  'Australia': { fee: 100, classification: 'High-Income' },
  'Japan': { fee: 100, classification: 'High-Income' },
  'France': { fee: 100, classification: 'High-Income' },
  'Italy': { fee: 100, classification: 'High-Income' },
  'Spain': { fee: 100, classification: 'High-Income' },
  'Netherlands': { fee: 100, classification: 'High-Income' },
  'Sweden': { fee: 100, classification: 'High-Income' },
  'Switzerland': { fee: 100, classification: 'High-Income' },
  'Norway': { fee: 100, classification: 'High-Income' },
  'Denmark': { fee: 100, classification: 'High-Income' },
  'South Korea': { fee: 100, classification: 'High-Income' },
  'Singapore': { fee: 100, classification: 'High-Income' },
  'New Zealand': { fee: 100, classification: 'High-Income' },
  'United Arab Emirates': { fee: 100, classification: 'High-Income' },
  'Qatar': { fee: 100, classification: 'High-Income' },
  'Saudi Arabia': { fee: 100, classification: 'High-Income' },
  'Austria': { fee: 100, classification: 'High-Income' },
  'Belgium': { fee: 100, classification: 'High-Income' },
  'Finland': { fee: 100, classification: 'High-Income' },
  'Luxembourg': { fee: 100, classification: 'High-Income' },
  'Ireland': { fee: 100, classification: 'High-Income' },
  
  // Upper-Middle-Income Countries - €75
  'China': { fee: 75, classification: 'Upper-Middle-Income' },
  'Brazil': { fee: 75, classification: 'Upper-Middle-Income' },
  'Mexico': { fee: 75, classification: 'Upper-Middle-Income' },
  'South Africa': { fee: 75, classification: 'Upper-Middle-Income' },
  'Turkey': { fee: 75, classification: 'Upper-Middle-Income' },
  'Malaysia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Thailand': { fee: 75, classification: 'Upper-Middle-Income' },
  'Russia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Argentina': { fee: 75, classification: 'Upper-Middle-Income' },
  'Colombia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Peru': { fee: 75, classification: 'Upper-Middle-Income' },
  'Romania': { fee: 75, classification: 'Upper-Middle-Income' },
  'Bulgaria': { fee: 75, classification: 'Upper-Middle-Income' },
  'Kazakhstan': { fee: 75, classification: 'Upper-Middle-Income' },
  'Iran': { fee: 75, classification: 'Upper-Middle-Income' },
  'Algeria': { fee: 75, classification: 'Upper-Middle-Income' },
  'Indonesia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Vietnam': { fee: 75, classification: 'Upper-Middle-Income' },
  'Philippines': { fee: 75, classification: 'Upper-Middle-Income' },
  'Serbia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Poland': { fee: 75, classification: 'Upper-Middle-Income' },
  'Czech Republic': { fee: 75, classification: 'Upper-Middle-Income' },
  'Hungary': { fee: 75, classification: 'Upper-Middle-Income' },
  'Croatia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Slovakia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Slovenia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Estonia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Latvia': { fee: 75, classification: 'Upper-Middle-Income' },
  'Lithuania': { fee: 75, classification: 'Upper-Middle-Income' },
  'Portugal': { fee: 75, classification: 'Upper-Middle-Income' },
  'Greece': { fee: 75, classification: 'Upper-Middle-Income' },
  
  // Lower-Middle-Income Countries - €50
  'India': { fee: 50, classification: 'Lower-Middle-Income' },
  'Nigeria': { fee: 50, classification: 'Lower-Middle-Income' },
  'Pakistan': { fee: 50, classification: 'Lower-Middle-Income' },
  'Bangladesh': { fee: 50, classification: 'Lower-Middle-Income' },
  'Kenya': { fee: 50, classification: 'Lower-Middle-Income' },
  'Ukraine': { fee: 50, classification: 'Lower-Middle-Income' },
  'Ghana': { fee: 50, classification: 'Lower-Middle-Income' },
  'Zambia': { fee: 50, classification: 'Lower-Middle-Income' },
  'Morocco': { fee: 50, classification: 'Lower-Middle-Income' },
  'Cameroon': { fee: 50, classification: 'Lower-Middle-Income' },
  'Nepal': { fee: 50, classification: 'Lower-Middle-Income' },
  'Myanmar': { fee: 50, classification: 'Lower-Middle-Income' },
  'Sudan': { fee: 50, classification: 'Lower-Middle-Income' },
  'Tanzania': { fee: 50, classification: 'Lower-Middle-Income' },
  'Uzbekistan': { fee: 50, classification: 'Lower-Middle-Income' },
  'Angola': { fee: 50, classification: 'Lower-Middle-Income' },
  'Ivory Coast': { fee: 50, classification: 'Lower-Middle-Income' },
  'Senegal': { fee: 50, classification: 'Lower-Middle-Income' },
  'Honduras': { fee: 50, classification: 'Lower-Middle-Income' },
  'Cambodia': { fee: 50, classification: 'Lower-Middle-Income' },
  
  // Low-Income Countries - €25
  'Afghanistan': { fee: 25, classification: 'Low-Income' },
  'Haiti': { fee: 25, classification: 'Low-Income' },
  'Ethiopia': { fee: 25, classification: 'Low-Income' },
  'Democratic Republic of the Congo': { fee: 25, classification: 'Low-Income' },
  'Mozambique': { fee: 25, classification: 'Low-Income' },
  'Somalia': { fee: 25, classification: 'Low-Income' },
  'Yemen': { fee: 25, classification: 'Low-Income' },
  'Chad': { fee: 25, classification: 'Low-Income' },
  'Malawi': { fee: 25, classification: 'Low-Income' },
  'Burundi': { fee: 25, classification: 'Low-Income' },
  'Central African Republic': { fee: 25, classification: 'Low-Income' },
  'Liberia': { fee: 25, classification: 'Low-Income' },
  'Sierra Leone': { fee: 25, classification: 'Low-Income' },
  'Niger': { fee: 25, classification: 'Low-Income' },
  'South Sudan': { fee: 25, classification: 'Low-Income' },
  'Togo': { fee: 25, classification: 'Low-Income' },
  'Gambia': { fee: 25, classification: 'Low-Income' },
  'Guinea': { fee: 25, classification: 'Low-Income' },
  'Rwanda': { fee: 25, classification: 'Low-Income' },
  'Madagascar': { fee: 25, classification: 'Low-Income' }
};

const countries = Object.keys(countryClassifications).concat(['Other']).sort();

const IndividualMembershipForm = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IndividualFormData>();
  const [selectedCountry, setSelectedCountry] = useState('');

  const watchCountry = watch('country');
  const countryInfo = countryClassifications[watchCountry as keyof typeof countryClassifications];
  const membershipFee = countryInfo?.fee || 100;
  const classification = countryInfo?.classification || 'Other';

  const onSubmit = (data: IndividualFormData) => {
    console.log('Individual membership application:', data);
    // Handle form submission
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
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    placeholder="John"
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

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <select
                    id="country"
                    {...register('country', { required: 'Country is required' })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={(e) => {
                      setSelectedCountry(e.target.value);
                      setValue('country', e.target.value);
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
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
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

            {/* Goals and Contributions */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Membership Goals & Contributions</h3>
              
              <div>
                <Label htmlFor="professionalGoals">Professional Development Goals *</Label>
                <Textarea
                  id="professionalGoals"
                  {...register('professionalGoals', { required: 'Professional goals are required' })}
                  placeholder="What do you hope to achieve through CCEA membership? How will it help your professional development?"
                  rows={4}
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
                />
              </div>

              <div>
                <Label htmlFor="references">Professional References</Label>
                <Textarea
                  id="references"
                  {...register('references')}
                  placeholder="Please provide two professional references (name, title, organization, email)"
                  rows={3}
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
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Membership Investment</h3>
              {watchCountry && countryInfo ? (
                <>
                  <p className="text-green-800 mb-2">
                    <strong>Your Annual Membership Fee:</strong> €{membershipFee}
                  </p>
                  <p className="text-sm text-green-700 mb-2">
                    <strong>Country Classification:</strong> {classification}
                  </p>
                  <p className="text-sm text-green-700">
                    Pricing is based on World Bank country income classifications to ensure global accessibility. 
                    Individual membership fees are structured to be affordable within each country's economic context.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-green-800 mb-2">
                    <strong>Individual Membership Fees:</strong>
                  </p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• High-Income Countries: €100 annually</li>
                    <li>• Upper-Middle-Income Countries: €75 annually</li>
                    <li>• Lower-Middle-Income Countries: €50 annually</li>
                    <li>• Low-Income Countries: €25 annually</li>
                  </ul>
                  <p className="text-xs text-green-600 mt-3">
                    Select your country above to see your specific membership fee.
                  </p>
                </>
              )}
            </div>

            {/* Submit Button */}
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
