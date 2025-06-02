
import React from 'react';
import { format } from 'date-fns';
import { ExternalLink, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EventSidebarProps {
  event: {
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
    isVirtual: boolean;
    location?: {
      venue?: string;
      address?: string;
      city?: string;
      country?: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    registrationInfo?: {
      registrationUrl?: string;
      registrationDeadline?: string;
      earlyBirdDeadline?: string;
      fees?: {
        regular?: number;
        earlyBird?: number;
        student?: number;
        member?: number;
      };
    };
    organizers?: Array<{
      name: string;
      title: string;
      email?: string;
    }>;
  };
}

const EventSidebar: React.FC<EventSidebarProps> = ({ event }) => {
  const isRegistrationOpen = () => {
    if (event.status !== 'upcoming') return false;
    if (!event.registrationInfo?.registrationDeadline) return true;
    return new Date() < new Date(event.registrationInfo.registrationDeadline);
  };

  return (
    <aside className="lg:col-span-1 space-y-8" aria-label="Event sidebar">
      {/* Registration Card */}
      <Card className="sticky top-8">
        <CardHeader>
          <CardTitle className="text-xl">Registration</CardTitle>
        </CardHeader>
        <CardContent>
          {event.status === 'upcoming' && isRegistrationOpen() ? (
            <div className="space-y-4">
              {event.registrationInfo?.fees && (
                <div className="space-y-2">
                  <h4 className="font-medium">Registration Fees</h4>
                  <div className="text-sm space-y-1">
                    {event.registrationInfo.fees.member && (
                      <div className="flex justify-between">
                        <span>Members:</span>
                        <span className="font-medium">€{event.registrationInfo.fees.member}</span>
                      </div>
                    )}
                    {event.registrationInfo.fees.regular && (
                      <div className="flex justify-between">
                        <span>Regular:</span>
                        <span className="font-medium">€{event.registrationInfo.fees.regular}</span>
                      </div>
                    )}
                    {event.registrationInfo.fees.student && (
                      <div className="flex justify-between">
                        <span>Students:</span>
                        <span className="font-medium">€{event.registrationInfo.fees.student}</span>
                      </div>
                    )}
                    {event.registrationInfo.fees.earlyBird && event.registrationInfo.earlyBirdDeadline && (
                      <div className="text-xs text-green-600 mt-2">
                        Early bird pricing available until {format(new Date(event.registrationInfo.earlyBirdDeadline), 'MMM d, yyyy')}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {event.registrationInfo?.registrationDeadline && (
                <div className="text-sm text-orange-600">
                  Registration closes: {format(new Date(event.registrationInfo.registrationDeadline), 'MMM d, yyyy')}
                </div>
              )}

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => event.registrationInfo?.registrationUrl && window.open(event.registrationInfo.registrationUrl, '_blank')}
                aria-label="Register for this event"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Register Now
              </Button>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-600">
                {event.status === 'completed' && 'This event has ended'}
                {event.status === 'cancelled' && 'This event has been cancelled'}
                {event.status === 'upcoming' && !isRegistrationOpen() && 'Registration is closed'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      {event.organizers && event.organizers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {event.organizers.map((organizer, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{organizer.name}</p>
                    <p className="text-xs text-gray-600">{organizer.title}</p>
                    {organizer.email && (
                      <a 
                        href={`mailto:${organizer.email}`}
                        className="text-xs text-blue-600 hover:underline flex items-center mt-1"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        {organizer.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Location Map Placeholder */}
      {!event.isVirtual && event.location?.coordinates && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-600">Interactive map would go here</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">{event.location.venue}</p>
              <p className="text-gray-600">{event.location.address}</p>
              <p className="text-gray-600">{event.location.city}, {event.location.country}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </aside>
  );
};

export default EventSidebar;
