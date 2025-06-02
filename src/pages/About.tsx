
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Users, BookOpen, Target, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "We believe in the power of international cooperation to strengthen civic education worldwide."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Our alliance welcomes diverse perspectives and approaches to civic and citizenship education."
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Practice",
      description: "We promote research-informed approaches to civic education that demonstrate measurable impact."
    },
    {
      icon: Target,
      title: "Systemic Change",
      description: "We work toward sustainable, system-wide improvements in civic education practices."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About the Civic and Citizenship Education Alliance
          </h1>
          <p className="text-xl text-gray-700">
            A global network dedicated to transforming civic and citizenship education 
            across diverse local and national contexts.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Exist</h2>
              <p className="text-lg text-gray-700 mb-6">
                Polarization, inequality, and disconnection are fraying the threads that hold our 
                societies together. In this moment of global uncertainty, civic and citizenship education 
                has emerged as a critical tool for rebuilding trust, fostering understanding, 
                and creating more just and resilient societies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Civic and Citizenship Education Alliance (CCEA) brings together K-12 schools, 
                universities, and civil society organizations across continents to elevate the impact of 
                civic learning. Convened by the Global Citizenship Foundation, CCEA unites to 
                promote innovation, share effective practices, and support educators and 
                institutions to help them cultivate youth civic learning and agency for 
                meaningful civic engagement.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Foundation</h3>
              <p className="text-gray-700 mb-4">
                Built on a Foundation of Global Expertise
              </p>
              <p className="text-gray-700">
                The Civic and Citizenship Education Alliance is a strategic initiative of the Global Citizenship Foundation (GCF), a specialist organization with a mandate to realize UN SDG 4.7, that is, Education for Global Citizenship and Sustainable Development). CCEA leverages GCF's extensive global network, research, and years of experience to provide unparalleled support to its members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and define our commitment to excellence in civic education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Measuring our collective progress in transforming civic education globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Member Organizations</div>
                <div className="text-gray-600">Schools, universities, and NGOs worldwide</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Countries Represented</div>
                <div className="text-gray-600">Spanning all continents and regions</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Students Reached</div>
                <div className="text-gray-600">Through our member programs annually</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of a global movement transforming civic education and strengthening democratic societies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
