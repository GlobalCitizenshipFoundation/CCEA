
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, XCircle, Eye, FileText, Palette, Shield } from 'lucide-react';

const BrandGuidelines = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Palette className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CCEA Brand Guidelines
          </h1>
          <p className="text-xl text-gray-700">
            Guidelines, rights, responsibilities, and requirements for using the CCEA brand identity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              Brand Identity Protection
            </h2>
            
            <Alert className="mb-8">
              <Shield className="h-4 w-4" />
              <AlertDescription className="text-base">
                The CCEA name, acronym, visual identity, and all related branding elements are the intellectual 
                property of the Global Citizenship Foundation (GCF) and are held in trust for the benefit of the Alliance.
              </AlertDescription>
            </Alert>

            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  CCEA's identity reflects its purpose as a collaborative, mission-driven entity. Use of the CCEA 
                  name or branding by member organizations or third parties must align with established guidelines 
                  and values of the Alliance.
                </p>
                <p className="text-gray-700">
                  These guidelines ensure consistent, respectful, and appropriate use of our brand while protecting 
                  the integrity and reputation of the Alliance.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Member Rights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Rights & Privileges</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Permitted Uses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Badge className="bg-green-100 text-green-800 mr-3 mt-0.5">✓</Badge>
                      <span>Display CCEA Membership Badge on official websites</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-green-100 text-green-800 mr-3 mt-0.5">✓</Badge>
                      <span>Reference CCEA membership in promotional materials</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-green-100 text-green-800 mr-3 mt-0.5">✓</Badge>
                      <span>Use CCEA logo in partnership announcements</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-green-100 text-green-800 mr-3 mt-0.5">✓</Badge>
                      <span>Include CCEA affiliation in academic publications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <XCircle className="h-6 w-6 text-red-600 mr-3" />
                    Prohibited Uses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Badge className="bg-red-100 text-red-800 mr-3 mt-0.5">✗</Badge>
                      <span>Implying CCEA endorsement of non-Alliance activities</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-red-100 text-red-800 mr-3 mt-0.5">✗</Badge>
                      <span>Modifying or altering CCEA logos or marks</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-red-100 text-red-800 mr-3 mt-0.5">✗</Badge>
                      <span>Using CCEA branding for commercial purposes</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="bg-red-100 text-red-800 mr-3 mt-0.5">✗</Badge>
                      <span>Sublicensing CCEA brand elements to third parties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Visual Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Visual Identity Guidelines</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Logo Usage</CardTitle>
                  <CardDescription>Proper placement and sizing of CCEA logos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Clear Space Requirements</h4>
                      <p className="text-gray-700 mb-4">
                        Maintain clear space around the logo equal to the height of the "C" in CCEA.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Minimum size: 24px height for digital use</li>
                        <li>• Minimum size: 0.5 inch height for print use</li>
                        <li>• Never stretch or distort the logo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Color Variations</h4>
                      <p className="text-gray-700 mb-4">
                        Use appropriate logo versions based on background colors.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Full color on white/light backgrounds</li>
                        <li>• White version on dark backgrounds</li>
                        <li>• Monochrome for single-color applications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography & Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Primary Colors</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                          <span className="text-sm">CCEA Blue: #2563EB</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gray-900 rounded mr-3"></div>
                          <span className="text-sm">CCEA Dark: #111827</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Typography</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Primary: Inter (headings)</p>
                        <p>Secondary: System fonts (body text)</p>
                        <p>Web-safe alternatives provided</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Responsibilities</h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Standards</h3>
                    <p className="text-gray-700 mb-4">
                      Members must ensure that any use of CCEA branding maintains high standards of 
                      quality and professionalism that reflect positively on the Alliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Approval Process</h3>
                    <p className="text-gray-700 mb-4">
                      For significant promotional campaigns or materials featuring CCEA branding, 
                      members should seek approval from the CCEA Communications Team.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Monitoring</h3>
                    <p className="text-gray-700">
                      CCEA reserves the right to request modifications or discontinuation of brand 
                      usage that does not align with these guidelines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Download Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Assets & Downloads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    Logo Package
                  </CardTitle>
                  <CardDescription>Complete logo set in various formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Logos (ZIP)
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 text-green-600 mr-2" />
                    Brand Guidelines PDF
                  </CardTitle>
                  <CardDescription>Complete visual identity manual</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Guidelines (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Questions About Brand Usage?</h3>
              <p className="text-blue-800 mb-4">
                Contact our Communications Team for guidance on brand usage or to request approval 
                for specific applications.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Communications Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrandGuidelines;
