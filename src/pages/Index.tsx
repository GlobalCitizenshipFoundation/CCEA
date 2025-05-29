
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Globe, Award, Calendar, MapPin, Clock, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual CCEA Conference 2025",
      date: "March 15-17, 2025",
      location: "Brussels, Belgium",
      type: "Conference"
    },
    {
      id: 2,
      title: "Digital Civic Education Workshop",
      date: "January 20, 2025",
      location: "Online",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Youth Engagement Strategies Webinar",
      date: "January 30, 2025",
      location: "Online",
      type: "Webinar"
    }
  ];

  // Sample data for institutional members
  const institutionalMembers = [
    {
      id: 1,
      name: "Harvard Graduate School of Education",
      country: "United States",
      type: "University",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      name: "UNESCO APNIEVE",
      country: "Thailand",
      type: "NGO",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      name: "International School of Brussels",
      country: "Belgium",
      type: "K-12 School",
      logo: "/placeholder.svg"
    },
    {
      id: 4,
      name: "University of Sydney",
      country: "Australia",
      type: "University",
      logo: "/placeholder.svg"
    }
  ];

  // Sample testimonials
  const memberVoices = [
    {
      quote: "CCEA has transformed our approach to civic education. The collaborative network provides invaluable insights and resources.",
      author: "Dr. Sarah Johnson",
      institution: "Harvard Graduate School of Education",
      role: "Director of Civic Education Programs"
    },
    {
      quote: "Being part of CCEA has elevated our institution's profile and connected us with like-minded educators globally.",
      author: "Prof. Marco Rossi",
      institution: "University of Milan",
      role: "Head of Political Science Department"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Elevate your impact in Civic and Citizenship Education
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join a global network of K-12 schools, universities, and organizations from around the world committed to transforming civic and citizenship education across diverse local and national contexts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/membership" className="flex items-center">
                    Become a Member
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Global network of educators collaborating" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Member Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Become a Member?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Become part of a recognized global network that elevates your institution's profile, strengthens your civic education practices, and enhances your efforts and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Global Community of Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Become part of a vibrant international network of educators, institutions, and organizations committed to advancing civic and citizenship education through shared learning, dialogue, and collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Showcase Your Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As a recognized member of the Alliance, display your official blockchain-enabled badge across institutional materials to demonstrate your commitment to fostering impactful civic learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Cultivate Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strengthen your team's capabilities with meaningful professional development through access to curated workshops, thought-provoking dialogues, and peer-to-peer learning designed to deepen practice and inspire innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <ArrowRight className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">Drive Systemic Change</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Move beyond isolated efforts. Contribute to a strategic, collective push for civic learning that addresses polarization, promotes justice, and strengthens democratic culture across communities and systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us at our upcoming conferences, workshops, and networking events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="self-start mb-2">{event.type}</Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/events/${event.id}`}>View Event Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Alliance Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Alliance Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CCEA is an alliance of leading K-12 schools, universities, and NGOs dedicated to advancing civic and citizenship education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {institutionalMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to={`/members/${member.id}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src={member.logo} 
                        alt={`${member.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{member.name}</h3>
                    <Badge variant="outline" className="mb-2">{member.type}</Badge>
                    <p className="text-sm text-gray-600">{member.country}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/members">View All Members</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Member Voices Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Member Voices</h2>
            <p className="text-xl text-gray-600">Hear from our community about their CCEA experience.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {memberVoices.map((voice, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{voice.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{voice.author}</p>
                      <p className="text-sm text-gray-600">{voice.role}</p>
                      <p className="text-sm text-blue-600">{voice.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Global Citizenship Foundation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Global Citizenship Foundation Logo" 
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Built on a Foundation of Global Expertise</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Civic and Citizenship Education Alliance is a strategic initiative of the Global Citizenship Foundation (GCF), a specialist organization with a mandate to realize UN SDG 4.7, that is, Education for Global Citizenship and Sustainable Development. CCEA leverages GCF's extensive global network, research, and years of experience to provide unparalleled support to its members.
              </p>
              <Button variant="outline" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn More About GCF
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-sm text-gray-700 font-medium">Member Institutions</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">45</div>
                <div className="text-sm text-gray-700 font-medium">Countries Represented</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                <div className="text-sm text-gray-700 font-medium">Educators Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Civic Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our global alliance and become part of a movement dedicated to strengthening democratic societies through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
              <Link to="/membership">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
