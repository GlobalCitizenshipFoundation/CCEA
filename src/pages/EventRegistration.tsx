
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventRegistrationForm from '@/components/forms/EventRegistrationForm';

const EventRegistration = () => {
  // The route in App.tsx uses the param name `slug`
  // so we should read `slug` here instead of `id`
  const { slug } = useParams();

  // This would normally fetch event data based on ID
  // For now, using sample data
  const event = {
    title: "Annual CCEA Conference 2025",
    startDate: "2025-03-15T09:00:00Z",
    endDate: "2025-03-17T17:00:00Z",
    isVirtual: false,
    registrationInfo: {
      fees: {
        regular: 299,
        earlyBird: 199,
        student: 99,
        member: 149
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/events" className="hover:text-blue-600">Events</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/events/${slug}`} className="hover:text-blue-600">{event.title}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Registration</span>
          </nav>

          <EventRegistrationForm event={event} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventRegistration;
