
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Mail, Phone, Globe, FileText, Shield } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Impressum
          </h1>
          <p className="text-xl text-gray-700">
            Legal information and publisher details for the Civic and Citizenship Education Alliance.
          </p>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Publisher Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-6 w-6 text-blue-600 mr-3" />
                  Publisher Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Organization Name:</h3>
                  <p className="text-gray-700">Civic and Citizenship Education Alliance (CCEA)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Form:</h3>
                  <p className="text-gray-700">International Non-Profit Association under Belgian Law</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Registration Number:</h3>
                  <p className="text-gray-700">BE 0123.456.789</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">VAT Number:</h3>
                  <p className="text-gray-700">BE 0123.456.789</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Registered Address:</h3>
                  <p className="text-gray-700">
                    Avenue des Arts 15<br />
                    1210 Brussels<br />
                    Belgium
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Details:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-700">info@ccea.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-700">+32 2 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-700">www.ccea.org</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Representatives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  Legal Representatives
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Executive Director:</h3>
                  <p className="text-gray-700">Dr. Maria Elena Rodriguez</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Board Chair:</h3>
                  <p className="text-gray-700">Prof. Anne-Marie Dubois</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Authorized to represent the organization individually</h3>
                </div>
              </CardContent>
            </Card>

            {/* Editorial Responsibility */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-orange-600 mr-3" />
                  Editorial Responsibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Responsible for Content:</h3>
                  <p className="text-gray-700">
                    Dr. Maria Elena Rodriguez<br />
                    Executive Director<br />
                    Avenue des Arts 15<br />
                    1210 Brussels, Belgium
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Editorial Team:</h3>
                  <p className="text-gray-700">
                    Lisa Park, Communications Manager<br />
                    Prof. James Chen, Director of Research & Innovation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Accuracy:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    CCEA makes every effort to ensure that the information published on this website is accurate and up-to-date. 
                    However, CCEA cannot guarantee the completeness, accuracy, or timeliness of the information provided and 
                    assumes no liability for any errors or omissions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">External Links:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This website may contain links to external websites. CCEA has no control over the content of these 
                    external sites and assumes no responsibility for their content or availability. The inclusion of links 
                    to external websites does not imply endorsement of their content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Intellectual Property:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    All content on this website, including text, images, graphics, and logos, is protected by copyright 
                    and other intellectual property rights. Reproduction or distribution without explicit permission 
                    from CCEA is prohibited.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Controller:</h3>
                  <p className="text-gray-700">
                    Civic and Citizenship Education Alliance<br />
                    Avenue des Arts 15<br />
                    1210 Brussels, Belgium
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Protection Officer:</h3>
                  <p className="text-gray-700">
                    Contact: privacy@ccea.org
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliance:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    CCEA processes personal data in accordance with the General Data Protection Regulation (GDPR) 
                    and other applicable data protection laws. For detailed information about how we handle personal data, 
                    please refer to our Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>Governing Law & Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This website and the legal relationships arising from its use are governed by Belgian law. 
                  The courts of Brussels, Belgium, have exclusive jurisdiction over any disputes arising from 
                  the use of this website, unless mandatory consumer protection laws provide otherwise.
                </p>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t">
              <p className="text-gray-600 text-sm">
                This Impressum was last updated on December 20, 2024
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
