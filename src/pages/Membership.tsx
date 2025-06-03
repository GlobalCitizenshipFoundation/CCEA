import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, Building, User, Globe, Users, BookOpen, Award, Star, Shield, Heart, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const institutionalBenefits = [
    "Full voting rights in Alliance governance and strategic decisions",
    "Priority access to CCEA programs, research, and exclusive resources",
    "Opportunity to host Alliance events and co-branded conferences",
    "Featured placement in member directory with enhanced visibility",
    "Access to exclusive research publications and policy briefings",
    "Networking opportunities with global education leaders and policymakers",
    "Professional development workshops and certification programs for staff",
    "Co-branding opportunities for joint initiatives and publications",
    "Direct input into Alliance strategic planning and priority setting",
    "Access to member-only funding opportunities and collaborative grants"
  ];

  const associateBenefits = [
    "Full access to CCEA resource library and digital materials",
    "Participation in webinars, workshops, and virtual conferences",
    "Monthly member newsletter with sector insights and updates",
    "Networking opportunities with international peers and experts",
    "Professional development opportunities and skill-building sessions",
    "Significantly discounted rates for CCEA premium events",
    "Access to online learning platforms and certification courses",
    "Certificate of membership and professional recognition",
    "Collaborative opportunities with fellow education professionals",
    "Early access to new resources and research publications"
  ];

  const requirements = {
    institutional: [
      "Accredited educational institution or recognized civic education organization",
      "Demonstrated commitment to civic education with proven track record",
      "Minimum 2 years of operational history in education sector",
      "Letter of institutional commitment from executive leadership",
      "Annual membership investment based on organization size and capacity"
    ],
    associate: [
      "Current professional role in civic, citizenship, or democratic education",
      "Professional qualifications or demonstrated experience in education",
      "Two professional references from education or civic sector",
      "Commitment to CCEA values, mission, and code of conduct",
      "Annual membership fee for individual professionals"
    ]
  };

  const membershipValues = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Join a worldwide movement transforming civic education across continents and cultures."
    },
    {
      icon: Users,
      title: "Professional Community",
      description: "Connect with like-minded educators, researchers, and practitioners advancing democratic values."
    },
    {
      icon: BookOpen,
      title: "Knowledge Exchange",
      description: "Access cutting-edge research, innovative practices, and collaborative learning opportunities."
    },
    {
      icon: Target,
      title: "Strategic Influence",
      description: "Shape the future of civic education through policy advocacy and strategic initiatives."
    }
  ];

  const successStories = [
    {
      quote: "CCEA membership has transformed our institution's approach to civic education. The resources and network have been invaluable.",
      author: "Prof. Sarah Johnson",
      institution: "European Institute of Democracy",
      memberType: "Full Member since 2019"
    },
    {
      quote: "The professional development opportunities and global connections have enhanced my teaching practice significantly.",
      author: "Maria Santos",
      institution: "Civic Education Teacher, Spain",
      memberType: "Associate Member since 2021"
    }
  ];

  const handleExploreOptions = () => {
    const element = document.getElementById('membership-levels');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-6 px-4 py-2">
              Join the Movement
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Shape the Future of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Civic Education</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a global alliance of educators, institutions, and leaders committed to strengthening democratic 
              values through innovative civic education. Together, we're building more engaged, informed citizens 
              for tomorrow's world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg" onClick={handleExploreOptions}>
                Explore Membership Options
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Download Membership Guide
              </Button>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section id="membership-levels" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Membership Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the membership type that aligns with your role and organization's needs. 
              Both options provide access to our global community and valuable resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Full Membership */}
            <Card className="border-2 border-blue-200 relative shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-8 py-2 text-lg font-semibold">
                  Most Comprehensive
                </Badge>
              </div>
              <CardHeader className="text-center pt-12 pb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold">Full Membership</CardTitle>
                <CardDescription className="text-xl text-gray-600 mt-2">
                  For Institutions & Organizations
                </CardDescription>
                <div className="mt-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    Custom Pricing
                  </div>
                  <p className="text-sm text-gray-600">Tailored to your organization's size and capacity</p>
                  <p className="text-xs text-gray-500 mt-2">Starting from €500 annually</p>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <div className="space-y-4 mb-10">
                  {institutionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg font-semibold" asChild>
                    <Link to="/membership/apply/institutional">
                      Apply for Full Membership
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full py-3">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Associate Membership */}
            <Card className="border-2 border-green-200 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="text-center pt-8 pb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold">Associate Membership</CardTitle>
                <CardDescription className="text-xl text-gray-600 mt-2">
                  For Individual Educators & Leaders
                </CardDescription>
                <div className="mt-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    From €100
                  </div>
                  <p className="text-sm text-gray-600">Per year, based on Purchasing Power Parity</p>
                  <p className="text-xs text-gray-500 mt-2">Ensuring global accessibility</p>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <div className="space-y-4 mb-10">
                  {associateBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg font-semibold" asChild>
                    <Link to="/membership/apply/individual">
                      Join as Associate Member
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full py-3">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Offers */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold text-purple-900">Special Launch Offer</h3>
                </div>
                <p className="text-purple-800 mb-6">
                  Early adopters receive 20% off their first year membership and exclusive access to founding member resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                    Offer expires March 31, 2025
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    No setup fees for founding members
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Success Stories */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Members Say</h2>
            <p className="text-xl text-gray-600">
              Hear from educators and institutions who are making a difference through CCEA membership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="h-6 w-6 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Member Testimonial</span>
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{story.author}</p>
                      <p className="text-sm text-gray-600">{story.institution}</p>
                      <p className="text-xs text-blue-600">{story.memberType}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Requirements</h2>
            <p className="text-xl text-gray-600">
              Simple, transparent criteria to ensure our community maintains the highest standards of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Building className="h-7 w-7 text-blue-600 mr-3" />
                  Full Membership Requirements
                </CardTitle>
                <CardDescription className="text-lg">
                  For institutions and organizations seeking comprehensive partnership
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.institutional.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <User className="h-7 w-7 text-green-600 mr-3" />
                  Associate Membership Requirements
                </CardTitle>
                <CardDescription className="text-lg">
                  For individual educators and education leaders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.associate.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple Application Process</h2>
            <p className="text-xl text-gray-600">
              Join our community in three straightforward steps. Our team will guide you through the entire process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete our comprehensive online application form with required documentation and references.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Review & Interview</h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership committee conducts a thorough review and may schedule a brief consultation call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Welcome & Onboarding</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your welcome package and join our comprehensive onboarding program with dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transform Civic Education?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of educators, institutions, and leaders who are shaping the future of democratic 
              participation through innovative civic education. Your membership makes a global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={handleExploreOptions}>
                Start Your Application Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Schedule a Consultation
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm">Secure Application</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span className="text-sm">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
