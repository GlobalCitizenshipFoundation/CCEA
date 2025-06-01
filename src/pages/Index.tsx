
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Globe, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Civic and Citizenship Education Alliance
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connecting educators, researchers, and policymakers worldwide to advance civic education and democratic participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/membership">
                    Join CCEA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Empowering Global Civic Education
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We bring together diverse perspectives and expertise to strengthen democratic institutions through education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Events & Conferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join our global community at conferences, workshops, and networking events.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Research & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access cutting-edge research, publications, and educational materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Professional Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connect with educators, researchers, and policymakers worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Make a difference in civic education across diverse cultural contexts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Become part of a global network dedicated to strengthening democracy through education.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/membership">
                Explore Membership Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
