
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  BookOpen, 
  Calendar,
  FileText,
  UserCheck,
  GraduationCap
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Community of Practice",
      description: "Become part of a vibrant international network of educators dedicated to advancing civic learning and citizenship education through shared learning, dialogue, and collaboration."
    },
    {
      icon: GraduationCap,
      title: "Showcase Your Leadership",
      description: "As a recognized member of the Alliance, amplify your organization's commitment to civic education to motivate and demonstrate your commitment to fostering deeper civic learning."
    },
    {
      icon: BookOpen,
      title: "Cultivate Expertise",
      description: "Strengthen your team's capabilities and knowledge! Participate in developmental through access to courses and learning opportunities designed to deepen understanding and improve civic and citizenship education."
    },
    {
      icon: Users,
      title: "Drive Systemic Change",
      description: "Move beyond systemic efforts. Contribute to a strategic, collective effort for civic learning that influences democratic civic learning practices and campaigns, democratic justice across communities and systems."
    }
  ];

  const recentArticles = [
    {
      title: "Transforming Civic Education in Digital Age",
      author: "Dr. Sarah Johnson",
      topic: "Digital Learning",
      date: "December 15, 2024",
      excerpt: "Exploring innovative approaches to civic education through digital platforms and virtual engagement."
    },
    {
      title: "Global Perspectives on Citizenship Education",
      author: "Prof. Marco Rossi",
      topic: "International Studies",
      date: "December 10, 2024", 
      excerpt: "A comprehensive analysis of citizenship education practices across different cultural contexts."
    },
    {
      title: "Youth Engagement in Democratic Processes",
      author: "Dr. Elena Müller",
      topic: "Youth Development",
      date: "December 5, 2024",
      excerpt: "Research findings on effective strategies for engaging young people in democratic participation."
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual CCEA Conference 2025",
      date: "March 15-17, 2025",
      location: "Brussels, Belgium",
      type: "Conference"
    },
    {
      title: "Digital Civic Education Workshop",
      date: "January 20, 2025",
      location: "Online",
      type: "Workshop"
    },
    {
      title: "Member Networking Session",
      date: "February 8, 2025",
      location: "Vienna, Austria",
      type: "Networking"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Elevate your impact in Civic and Citizenship Education
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Join a global network of K-12 schools, universities, and organizations from around the world committed to 
                transforming civic and citizenship education across diverse local and national contexts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/membership" className="flex items-center">
                    Join the Alliance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/993c31cf-6130-4733-8968-6b53004996e7.png"
                alt="Civic Education in Action"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Member Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Become a Member?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of a recognized global network that elevates your institution's profile, strengthens your 
              civic education practices, and enhances your efforts and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link to="/articles">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {article.topic}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    By {article.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Link to="/events">
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Voices Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Voices</h2>
            <p className="text-xl text-gray-600">
              Hear from our community of educators and institutions making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  "Joining CCEA has transformed our approach to civic education. The global perspective 
                  and collaborative opportunities have been invaluable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-800">SJ</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Global Citizenship Foundation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  "The resources and networking opportunities provided by CCEA have helped us reach 
                  thousands more students with quality civic education."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-800">MR</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Prof. Marco Rossi</p>
                    <p className="text-sm text-gray-600">European Education Institute</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  "Being part of this alliance has strengthened our institution's commitment to 
                  democratic values and civic engagement."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-purple-800">EM</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Dr. Elena Müller</p>
                    <p className="text-sm text-gray-600">Vienna University of Democracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Civic Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our global alliance and become part of a movement dedicated to strengthening 
            democratic participation and civic engagement worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
