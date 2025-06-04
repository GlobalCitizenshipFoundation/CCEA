
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Globe, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeSchema from '@/components/HomeSchema';

const Index = () => {
  React.useEffect(() => {
    // Set page title and meta description
    document.title = "CCEA - Civic and Citizenship Education Alliance | Global Network for Democratic Learning";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join a global network of K-12 schools, universities, and organizations committed to transforming civic and citizenship education across diverse local and national contexts.');
    }
  }, []);

  return (
    <>
      <HomeSchema />
      <div className="min-h-screen bg-white">
        {/* Skip to main content for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section 
            className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 
                  id="hero-heading"
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                >
                  Civic and Citizenship Education Alliance
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Connecting educators, researchers, and policymakers worldwide to advance civic education and democratic participation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Link to="/membership" aria-describedby="join-description">
                      Join CCEA
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <span id="join-description" className="sr-only">
                    Become a member of the Civic and Citizenship Education Alliance
                  </span>
                  <Button asChild variant="outline" size="lg" className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Link to="/about" aria-describedby="learn-more-description">
                      Learn More About CCEA
                    </Link>
                  </Button>
                  <span id="learn-more-description" className="sr-only">
                    Discover more about our mission, vision, and impact
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section 
            className="py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="features-heading"
          >
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2 
                  id="features-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Empowering Global Civic Education
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We bring together diverse perspectives and expertise to strengthen democratic institutions through education.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
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

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
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

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
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

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
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

          {/* CTA Section - Fixed contrast issues */}
          <section 
            className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="cta-heading"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-blue-50 mb-8">
                Become part of a global network dedicated to strengthening democracy through education.
              </p>
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <Link to="/membership" aria-describedby="membership-cta-description">
                  Explore Membership Options
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <span id="membership-cta-description" className="sr-only">
                View different membership tiers and benefits available
              </span>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
