
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Building, User, Globe, Users, BookOpen, Award } from 'lucide-react';

const Membership = () => {
  const institutionalBenefits = [
    "Full voting rights in Alliance governance",
    "Priority access to CCEA programs and resources",
    "Opportunity to host Alliance events and conferences",
    "Featured placement in member directory",
    "Access to exclusive research and publications",
    "Networking opportunities with global leaders",
    "Professional development workshops for staff",
    "Co-branding opportunities for joint initiatives"
  ];

  const associateBenefits = [
    "Access to CCEA resource library",
    "Participation in webinars and virtual events",
    "Member newsletter and updates",
    "Networking opportunities with peers",
    "Professional development opportunities",
    "Discounted rates for CCEA events",
    "Access to online learning platforms",
    "Certificate of membership"
  ];

  const requirements = {
    institutional: [
      "Accredited educational institution or recognized organization",
      "Demonstrated commitment to civic education",
      "Minimum 2 years of operational history",
      "Letter of institutional commitment from leadership",
      "Annual membership fee based on organization size"
    ],
    associate: [
      "Individual educator or education leader",
      "Current role in civic/citizenship education",
      "Professional references (2 required)",
      "Commitment to CCEA values and mission",
      "Annual membership fee for individuals"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join the Alliance
          </h1>
          <p className="text-xl text-gray-700">
            Choose the membership type that best fits your role in civic education and 
            become part of our global community.
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Full Membership */}
            <Card className="border-2 border-blue-200 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Full Membership</CardTitle>
                <CardDescription className="text-lg">
                  For Institutions & Organizations
                </CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">
                  Contact for Pricing
                </div>
                <p className="text-sm text-gray-600">Based on organization size</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-8">
                  {institutionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Apply for Full Membership
                </Button>
              </CardContent>
            </Card>

            {/* Associate Membership */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Associate Membership</CardTitle>
                <CardDescription className="text-lg">
                  For Individual Educators & Leaders
                </CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">
                  €150
                </div>
                <p className="text-sm text-gray-600">Per year</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-8">
                  {associateBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Apply for Associate Membership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Requirements</h2>
            <p className="text-xl text-gray-600">
              What you need to know before applying
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Building className="h-6 w-6 text-blue-600 mr-3" />
                  Full Membership Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.institutional.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <User className="h-6 w-6 text-green-600 mr-3" />
                  Associate Membership Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.associate.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our global community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application form with required documentation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Review Process</h3>
              <p className="text-gray-600">Our membership committee reviews applications within 2-3 weeks.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Welcome & Onboarding</h3>
              <p className="text-gray-600">Get welcomed into the community with orientation and resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Alliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step toward transforming civic education in your community and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
