
import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, MapPin, Users, Globe, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EventHeaderProps {
  event: {
    title: string;
    description: string;
    eventType: string;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
    isVirtual: boolean;
    startDate: string;
    endDate: string;
    timezone: string;
    location?: {
      venue?: string;
      address?: string;
      city?: string;
      country?: string;
    };
    virtualPlatform?: string;
    capacity?: number;
    registered: number;
    featuredImage?: string;
  };
}

const EventHeader: React.FC<EventHeaderProps> = ({ event }) => {
  const getStatusColor = () => {
    switch (event.status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLocationString = () => {
    if (event.isVirtual) {
      return `Online${event.virtualPlatform ? ` (${event.virtualPlatform})` : ''}`;
    }
    
    const parts = [];
    if (event.location?.venue) parts.push(event.location.venue);
    if (event.location?.city) parts.push(event.location.city);
    if (event.location?.country) parts.push(event.location.country);
    return parts.join(', ') || 'Location TBA';
  };

  return (
    <header className="mb-8">
      <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Event badges">
        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
          {event.eventType}
        </Badge>
        <Badge className={getStatusColor()}>
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </Badge>
        {event.isVirtual && (
          <Badge className="bg-blue-100 text-blue-800">
            <Video className="h-3 w-3 mr-1" aria-hidden="true" />
            Virtual
          </Badge>
        )}
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        {event.title}
      </h1>

      <p className="text-xl text-gray-600 mb-8">{event.description}</p>

      {/* Event Meta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center text-gray-700">
          <Calendar className="h-5 w-5 mr-3 text-blue-600" aria-hidden="true" />
          <div>
            <p className="font-medium">
              {format(new Date(event.startDate), 'EEEE, MMMM d, yyyy')}
            </p>
            {event.startDate !== event.endDate && (
              <p className="text-sm text-gray-600">
                to {format(new Date(event.endDate), 'EEEE, MMMM d, yyyy')}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center text-gray-700">
          <Clock className="h-5 w-5 mr-3 text-blue-600" aria-hidden="true" />
          <div>
            <p className="font-medium">
              {format(new Date(event.startDate), 'h:mm a')} - {format(new Date(event.endDate), 'h:mm a')}
            </p>
            <p className="text-sm text-gray-600">{event.timezone}</p>
          </div>
        </div>

        <div className="flex items-start text-gray-700">
          {event.isVirtual ? (
            <Globe className="h-5 w-5 mr-3 text-blue-600 mt-0.5" aria-hidden="true" />
          ) : (
            <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" aria-hidden="true" />
          )}
          <div>
            <p className="font-medium">{getLocationString()}</p>
            {event.location?.address && (
              <p className="text-sm text-gray-600">{event.location.address}</p>
            )}
          </div>
        </div>

        <div className="flex items-center text-gray-700">
          <Users className="h-5 w-5 mr-3 text-blue-600" aria-hidden="true" />
          <div>
            <p className="font-medium">
              {event.registered} registered
              {event.capacity && ` / ${event.capacity} capacity`}
            </p>
            {event.capacity && (
              <div className="w-32 bg-gray-200 rounded-full h-2 mt-1" role="progressbar" 
                   aria-valuenow={event.registered} aria-valuemax={event.capacity} 
                   aria-label={`${event.registered} of ${event.capacity} registered`}>
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{width: `${Math.min((event.registered / event.capacity) * 100, 100)}%`}}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {event.featuredImage && (
        <div className="mb-8">
          <img
            src={event.featuredImage}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </header>
  );
};

export default EventHeader;
