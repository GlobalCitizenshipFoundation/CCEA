
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to CCEA
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Join a global network of K-12 schools, universities, and organizations committed to transforming civic and citizenship education across diverse local and national contexts.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/membership" className="flex items-center">
                Join Alliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To strengthen civic and citizenship education globally through collaborative research, professional development, and innovative practices that prepare learners for active democratic participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Research</h3>
              <p className="text-gray-600">Conducting cutting-edge research to inform best practices in civic education.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Development</h3>
              <p className="text-gray-600">Providing educators with the tools and training they need to succeed.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Practices</h3>
              <p className="text-gray-600">Promoting innovative approaches to engage students in civic life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CCEA is making a difference in communities around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600">150+</div>
              <div className="text-lg text-gray-700">Member Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600">45</div>
              <div className="text-lg text-gray-700">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600">10,000+</div>
              <div className="text-lg text-gray-700">Educators Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Call-to-Action */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Civic Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
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
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
