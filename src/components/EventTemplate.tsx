
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import EventHeader from './event/EventHeader';
import EventActions from './event/EventActions';
import EventContent from './event/EventContent';
import EventSidebar from './event/EventSidebar';
import EventSchema from './event/EventSchema';

interface EventTemplateProps {
  event: {
    title: string;
    description: string;
    eventType: string;
    startDate: string;
    endDate: string;
    timezone: string;
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
    isVirtual: boolean;
    virtualPlatform?: string;
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
    capacity?: number;
    registered: number;
    speakers?: Array<{
      name: string;
      title: string;
      organization?: string;
      bio?: string;
      profileImage?: string;
    }>;
    organizers?: Array<{
      name: string;
      title: string;
      email?: string;
    }>;
    agenda?: string;
    requirements?: string;
    featuredImage?: string;
    gallery?: string[];
    content: string;
    materials?: Array<{
      title: string;
      type: string;
      url: string;
      description?: string;
    }>;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  };
}

const EventTemplate: React.FC<EventTemplateProps> = ({ event }) => {
  return (
    <>
      {/* SEO and Schema.org structured data */}
      <EventSchema event={event} />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-6" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link to="/events" className="hover:text-blue-600">Events</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-gray-900" aria-current="page">{event.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <EventHeader event={event} />
                <EventActions event={event} />
                <div className="mt-8">
                  <EventContent event={event} />
                </div>
              </div>

              {/* Sidebar */}
              <EventSidebar event={event} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EventTemplate;
