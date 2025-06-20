
import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Globe, BookOpen } from 'lucide-react'
import EditableText from '@/components/editable/EditableText'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
                <EditableText
                  text="Civic and Citizenship Education Alliance"
                  as="h1"
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                  fieldPath="hero.title"
                  objectId="home"
                />
                <EditableText
                  text="Connecting educators, researchers, and policymakers worldwide to advance civic education and democratic participation."
                  as="p"
                  className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                  fieldPath="hero.subtitle"
                  objectId="home"
                />
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
                <EditableText
                  text="Empowering Global Civic Education"
                  as="h2"
                  id="features-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  fieldPath="features.title"
                  objectId="home"
                />
                <EditableText
                  text="We bring together diverse perspectives and expertise to strengthen democratic institutions through education."
                  as="p"
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  fieldPath="features.description"
                  objectId="home"
                />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <EditableText
                      text="Events & Conferences"
                      as="h3"
                      className="text-lg"
                      fieldPath="features.cards[0].title"
                      objectId="home"
                    />
                  </CardHeader>
                  <CardContent>
                    <EditableText
                      text="Join our global community at conferences, workshops, and networking events."
                      as="p"
                      className="text-gray-600"
                      fieldPath="features.cards[0].text"
                      objectId="home"
                    />
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <EditableText
                      text="Research & Resources"
                      as="h3"
                      className="text-lg"
                      fieldPath="features.cards[1].title"
                      objectId="home"
                    />
                  </CardHeader>
                  <CardContent>
                    <EditableText
                      text="Access cutting-edge research, publications, and educational materials."
                      as="p"
                      className="text-gray-600"
                      fieldPath="features.cards[1].text"
                      objectId="home"
                    />
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <EditableText
                      text="Professional Network"
                      as="h3"
                      className="text-lg"
                      fieldPath="features.cards[2].title"
                      objectId="home"
                    />
                  </CardHeader>
                  <CardContent>
                    <EditableText
                      text="Connect with educators, researchers, and policymakers worldwide."
                      as="p"
                      className="text-gray-600"
                      fieldPath="features.cards[2].text"
                      objectId="home"
                    />
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-500" role="listitem">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <EditableText
                      text="Global Impact"
                      as="h3"
                      className="text-lg"
                      fieldPath="features.cards[3].title"
                      objectId="home"
                    />
                  </CardHeader>
                  <CardContent>
                    <EditableText
                      text="Make a difference in civic education across diverse cultural contexts."
                      as="p"
                      className="text-gray-600"
                      fieldPath="features.cards[3].text"
                      objectId="home"
                    />
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
              <EditableText
                text="Ready to Join Our Community?"
                as="h2"
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                fieldPath="cta.title"
                objectId="home"
              />
              <EditableText
                text="Become part of a global network dedicated to strengthening democracy through education."
                as="p"
                className="text-xl text-blue-50 mb-8"
                fieldPath="cta.subtitle"
                objectId="home"
              />
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <Link to="/membership" aria-describedby="membership-cta-description">
                  <EditableText
                    text="Explore Membership Options"
                    as="span"
                    fieldPath="cta.button"
                    objectId="home"
                  />
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
