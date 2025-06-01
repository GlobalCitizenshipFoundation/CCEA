import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Globe, Award, BookOpen, Calendar, MessageSquare, ExternalLink } from 'lucide-react';

const Index = () => {
  const mockMembers = [
    {
      id: 1,
      name: "International School of Geneva",
      country: "Switzerland",
      type: "K-12 School",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      name: "University of British Columbia",
      country: "Canada",
      type: "University",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Global Citizenship Foundation",
      country: "United States",
      type: "NGO",
      logo: "/placeholder.svg"
    }
  ];

  const mockEvents = [
    {
      id: 1,
      title: "Annual CCEA Conference 2025",
      date: "March 15-17, 2025",
      location: "Virtual & Geneva, Switzerland",
      type: "Conference"
    },
    {
      id: 2,
      title: "Civic Education Workshop Series",
      date: "February 10, 2025",
      location: "Online",
      type: "Workshop"
    }
  ];

  const memberTestimonials = [
    {
      quote: "Being part of CCEA has transformed our approach to civic education and connected us with a global community of practice.",
      author: "Dr. Maria Rodriguez",
      institution: "Universidad Nacional de Colombia",
      role: "Director of Civic Studies"
    },
    {
      quote: "The professional development opportunities through CCEA have enhanced our teachers' capabilities significantly.",
      author: "James Chen",
      institution: "Singapore International School",
      role: "Head of Social Studies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate your impact in Civic and Citizenship Education
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join a global network of K-12 schools, universities, and organizations from around the world committed to transforming civic and citizenship education across diverse local and national contexts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/membership">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Member Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Become a Member?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of a recognized global network that elevates your institution's profile, strengthens your civic education practices, and enhances your efforts and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Global Community of Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Become part of a vibrant international network of educators, institutions, and organizations committed to advancing civic and citizenship education through shared learning, dialogue, and collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Showcase Your Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As a recognized member of the Alliance, display your official blockchain-enabled badge across institutional materials to demonstrate your commitment to fostering impactful civic learning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Cultivate Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strengthen your team's capabilities with meaningful professional development through access to curated workshops, thought-provoking dialogues, and peer-to-peer learning designed to deepen practice and inspire innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Drive Systemic Change</CardTitle>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for meaningful dialogue and professional development opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {mockEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{event.type}</Badge>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div>{event.date}</div>
                      <div>{event.location}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/events">View Event Details</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Alliance Members
            </h2>
            <p className="text-xl text-gray-600">
              CCEA is an alliance of leading K-12 schools, universities, and NGOs dedicated to advancing civic and citizenship education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {mockMembers.map((member) => (
              <Link key={member.id} to="/members">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src={member.logo} 
                        alt={`${member.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div>{member.country}</div>
                        <Badge variant="secondary" className="text-xs">{member.type}</Badge>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Member Voices
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community about their experience with CCEA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {memberTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.institution}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About GCF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Built on a Foundation of Global Expertise
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                The Civic and Citizenship Education Alliance is a strategic initiative of the Global Citizenship Foundation (GCF), a specialist organization with a mandate to realize UN SDG 4.7, that is, Education for Global Citizenship and Sustainable Development. CCEA leverages GCF's extensive global network, research, and years of experience to provide unparalleled support to its members.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about" className="inline-flex items-center">
                  Learn More About GCF
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Global Impact</h3>
              <p className="text-center text-gray-600 mb-8">CCEA is making a difference in communities around the world.</p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Member Institutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">45</div>
                  <div className="text-sm text-gray-600">Countries Represented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">Educators Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Civic Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a community of forward-thinking educators and institutions committed to building a more just and democratic world through civic education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/membership">
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
