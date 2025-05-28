
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Networking', 'Training'];

  const events = [
    {
      id: 1,
      title: "Annual CCEA Conference 2025",
      description: "Join educators, policymakers, and researchers from around the world for our flagship annual conference on civic education innovation.",
      date: "March 15-17, 2025",
      time: "09:00 - 17:00 CET",
      location: "Brussels, Belgium",
      type: "Conference",
      capacity: 500,
      registered: 342,
      featured: true,
      virtual: false
    },
    {
      id: 2,
      title: "Digital Civic Education Workshop",
      description: "Learn about the latest digital tools and methodologies for enhancing civic education in the digital age.",
      date: "January 20, 2025",
      time: "14:00 - 16:00 CET",
      location: "Online",
      type: "Workshop",
      capacity: 150,
      registered: 98,
      featured: true,
      virtual: true
    },
    {
      id: 3,
      title: "Member Networking Session",
      description: "Connect with fellow CCEA members and share experiences in civic education implementation.",
      date: "February 8, 2025",
      time: "15:00 - 18:00 CET",
      location: "Vienna, Austria",
      type: "Networking",
      capacity: 80,
      registered: 65,
      featured: false,
      virtual: false
    },
    {
      id: 4,
      title: "Youth Engagement Strategies Webinar",
      description: "Explore effective strategies for engaging young people in democratic processes and civic participation.",
      date: "January 30, 2025",
      time: "13:00 - 14:30 CET",
      location: "Online",
      type: "Webinar",
      capacity: 200,
      registered: 156,
      featured: false,
      virtual: true
    },
    {
      id: 5,
      title: "Civic Education Policy Training",
      description: "Professional development training for educators on implementing civic education policy frameworks.",
      date: "March 5-7, 2025",
      time: "09:00 - 16:00 CET",
      location: "Amsterdam, Netherlands",
      type: "Training",
      capacity: 60,
      registered: 45,
      featured: false,
      virtual: false
    },
    {
      id: 6,
      title: "Regional Coordinators Meeting",
      description: "Quarterly meeting for CCEA regional coordinators to discuss strategic initiatives and regional developments.",
      date: "February 20, 2025",
      time: "10:00 - 15:00 CET",
      location: "Paris, France",
      type: "Conference",
      capacity: 40,
      registered: 28,
      featured: false,
      virtual: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Events & Conferences
          </h1>
          <p className="text-xl text-gray-700">
            Join our community at conferences, workshops, and networking events designed to advance civic education.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${event.virtual ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                        {event.type} {event.virtual && '• Virtual'}
                      </Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex flex-col space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {event.registered}/{event.capacity} registered
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${(event.registered / event.capacity) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link to={`/events/${event.id}`}>
                          Register Now
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events ({filteredEvents.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={event.virtual ? 'border-purple-300 text-purple-700' : ''}>
                      {event.type}
                    </Badge>
                    {event.virtual && <Badge variant="secondary" className="text-xs">Virtual</Badge>}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-sm space-y-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                    <span>{event.registered}/{event.capacity} registered</span>
                    <div className="w-16 bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-blue-600 h-1 rounded-full" 
                        style={{width: `${(event.registered / event.capacity) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link to={`/events/${event.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(''); setSelectedType('All');}}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
