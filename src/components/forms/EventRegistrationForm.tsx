
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Mail, Building } from 'lucide-react';

interface EventRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  registrationType: string;
  dietaryRequirements: string;
  accessibilityNeeds: string;
  emergencyContact: string;
  emergencyPhone: string;
  additionalInfo: string;
}

interface EventRegistrationFormProps {
  event: {
    title: string;
    startDate: string;
    endDate: string;
    isVirtual: boolean;
    registrationInfo?: {
      fees?: {
        regular?: number;
        earlyBird?: number;
        student?: number;
        member?: number;
      };
    };
  };
}

const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ event }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<EventRegistrationData>();

  const onSubmit = (data: EventRegistrationData) => {
    console.log('Event registration:', data);
    // Handle form submission
    alert(`Thank you for registering for "${event.title}"! You will receive a confirmation email with event details and payment instructions.`);
  };

  const fees = event.registrationInfo?.fees;
  const today = new Date();
  const eventDate = new Date(event.startDate);
  const earlyBirdDeadline = new Date(eventDate);
  earlyBirdDeadline.setDate(eventDate.getDate() - 30);
  
  const isEarlyBird = today < earlyBirdDeadline;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Calendar className="h-7 w-7 text-blue-600 mr-3" />
            Event Registration
          </CardTitle>
          <p className="text-gray-600">{event.title}</p>
          <p className="text-sm text-gray-500">
            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    placeholder="+1-555-123-4567"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    {...register('organization', { required: 'Organization is required' })}
                    placeholder="Your school, university, or organization"
                  />
                  {errors.organization && (
                    <p className="text-sm text-red-600 mt-1">{errors.organization.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="position">Position/Title *</Label>
                  <Input
                    id="position"
                    {...register('position', { required: 'Position is required' })}
                    placeholder="Teacher, Professor, Director, etc."
                  />
                  {errors.position && (
                    <p className="text-sm text-red-600 mt-1">{errors.position.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Registration Type and Fees */}
            {fees && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Registration Type</h3>
                
                <RadioGroup onValueChange={(value) => setValue('registrationType', value)}>
                  {fees.member && (
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="member" id="member" />
                        <Label htmlFor="member">CCEA Member</Label>
                      </div>
                      <span className="font-semibold">€{fees.member}</span>
                    </div>
                  )}
                  
                  {fees.student && (
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student">Student</Label>
                      </div>
                      <span className="font-semibold">€{fees.student}</span>
                    </div>
                  )}
                  
                  {fees.earlyBird && isEarlyBird && (
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="earlyBird" id="earlyBird" />
                        <Label htmlFor="earlyBird">Early Bird (Limited Time)</Label>
                      </div>
                      <span className="font-semibold text-green-600">€{fees.earlyBird}</span>
                    </div>
                  )}
                  
                  {fees.regular && (
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regular" id="regular" />
                        <Label htmlFor="regular">Regular</Label>
                      </div>
                      <span className="font-semibold">€{fees.regular}</span>
                    </div>
                  )}
                </RadioGroup>
              </div>
            )}

            {/* Special Requirements (only for in-person events) */}
            {!event.isVirtual && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Special Requirements</h3>
                
                <div>
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="dietaryRequirements"
                    {...register('dietaryRequirements')}
                    placeholder="Please list any dietary restrictions or food allergies..."
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="accessibilityNeeds">Accessibility Needs</Label>
                  <Textarea
                    id="accessibilityNeeds"
                    {...register('accessibilityNeeds')}
                    placeholder="Please describe any accessibility accommodations needed..."
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Emergency Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    {...register('emergencyContact')}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    {...register('emergencyPhone')}
                    placeholder="+1-555-987-6543"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
              
              <div>
                <Label htmlFor="additionalInfo">Additional Comments or Questions</Label>
                <Textarea
                  id="additionalInfo"
                  {...register('additionalInfo')}
                  placeholder="Any additional information, questions, or special requests..."
                  rows={3}
                />
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                <p className="mb-2">
                  <strong>Registration Terms:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Registration is confirmed upon payment receipt</li>
                  <li>Cancellations must be made 7 days before the event for full refund</li>
                  <li>Event details and joining instructions will be sent via email</li>
                  {event.isVirtual && <li>Virtual event link will be provided 24 hours before the event</li>}
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Complete Registration
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                You will receive a confirmation email with payment instructions and event details.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventRegistrationForm;
