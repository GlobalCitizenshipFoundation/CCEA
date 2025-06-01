
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Calendar, ExternalLink, Share2, Award, BookOpen, GraduationCap, ChevronRight, Clock, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from './Navigation';
import Footer from './Footer';

interface TeamMemberTemplateProps {
  teamMember: {
    name: string;
    title: string;
    department?: string;
    location?: string;
    profileImage: string;
    photoGallery?: string[];
    bio: string;
    shortBio: string;
    expertise: string[];
    education?: Array<{
      degree: string;
      institution: string;
      year: string;
      field: string;
    }>;
    publications?: Array<{
      title: string;
      type: string;
      year: string;
      url?: string;
    }>;
    awards?: Array<{
      title: string;
      organization: string;
      year: string;
    }>;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      researchGate?: string;
      orcid?: string;
      googleScholar?: string;
    };
    contactInfo?: {
      email?: string;
      phone?: string;
      officeHours?: string;
    };
    languages?: string[];
    featured?: boolean;
    lastUpdated?: string;
  };
}

const TeamMemberTemplate: React.FC<TeamMemberTemplateProps> = ({ teamMember }) => {
  const [selectedImage, setSelectedImage] = useState(teamMember.profileImage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/team" className="hover:text-blue-600">Team</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{teamMember.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={selectedImage}
                      alt={teamMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Photo Gallery */}
                  {teamMember.photoGallery && teamMember.photoGallery.length > 0 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                      <button
                        onClick={() => setSelectedImage(teamMember.profileImage)}
                        className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                          selectedImage === teamMember.profileImage ? 'border-blue-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={teamMember.profileImage}
                          alt={`${teamMember.name} profile`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                      {teamMember.photoGallery.map((photo, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(photo)}
                          className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                            selectedImage === photo ? 'border-blue-500' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={photo}
                            alt={`${teamMember.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Basic Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teamMember.department && (
                      <Badge variant="secondary">{teamMember.department}</Badge>
                    )}
                    {teamMember.featured && (
                      <Badge className="bg-gold-100 text-gold-800">Featured</Badge>
                    )}
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {teamMember.name}
                  </h1>

                  <p className="text-xl text-blue-600 mb-4">{teamMember.title}</p>

                  {teamMember.location && (
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{teamMember.location}</span>
                    </div>
                  )}

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {teamMember.shortBio}
                  </p>

                  {/* Quick Contact */}
                  <div className="flex flex-wrap gap-3">
                    {teamMember.contactInfo?.email && (
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${teamMember.contactInfo.email}`}>
                          Email
                        </a>
                      </Button>
                    )}
                    {teamMember.socialLinks?.linkedin && (
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        <a href={teamMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {/* Biography */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Biography</h2>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: teamMember.bio }} />
              </div>
            </div>

            {/* Expertise */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {teamMember.expertise.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            {teamMember.education && teamMember.education.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  {teamMember.education.map((edu, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <GraduationCap className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                            {edu.field && (
                              <p className="text-blue-600 mb-1">{edu.field}</p>
                            )}
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Publications */}
            {teamMember.publications && teamMember.publications.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Recent Publications</h2>
                <div className="space-y-4">
                  {teamMember.publications.slice(0, 10).map((pub, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <BookOpen className="h-5 w-5 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">
                              {pub.url ? (
                                <a 
                                  href={pub.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {pub.title}
                                </a>
                              ) : (
                                pub.title
                              )}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <Badge variant="outline" className="text-xs">{pub.type}</Badge>
                              <span>{pub.year}</span>
                              {pub.url && (
                                <ExternalLink className="h-3 w-3" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Awards */}
            {teamMember.awards && teamMember.awards.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
                <div className="space-y-4">
                  {teamMember.awards.map((award, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{award.title}</h3>
                            <p className="text-gray-600">{award.organization}</p>
                            <p className="text-sm text-gray-500">{award.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <Card className="mb-8 sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMember.contactInfo?.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-500 mr-3" />
                      <a 
                        href={`mailto:${teamMember.contactInfo.email}`}
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {teamMember.contactInfo.email}
                      </a>
                    </div>
                  )}

                  {teamMember.contactInfo?.phone && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-3" />
                      <a 
                        href={`tel:${teamMember.contactInfo.phone}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {teamMember.contactInfo.phone}
                      </a>
                    </div>
                  )}

                  {teamMember.contactInfo?.officeHours && (
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-gray-500 mr-3 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-gray-700">Office Hours</p>
                        <p className="text-gray-600">{teamMember.contactInfo.officeHours}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Social & Professional Links */}
            {teamMember.socialLinks && Object.values(teamMember.socialLinks).some(link => link) && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Professional Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {teamMember.socialLinks.linkedin && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <a 
                          href={teamMember.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full"
                        >
                          <Linkedin className="h-4 w-4 mr-3" />
                          LinkedIn
                        </a>
                      </Button>
                    )}

                    {teamMember.socialLinks.twitter && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <a 
                          href={teamMember.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full"
                        >
                          <Twitter className="h-4 w-4 mr-3" />
                          Twitter
                        </a>
                      </Button>
                    )}

                    {teamMember.socialLinks.researchGate && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <a 
                          href={teamMember.socialLinks.researchGate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full"
                        >
                          <Globe className="h-4 w-4 mr-3" />
                          ResearchGate
                        </a>
                      </Button>
                    )}

                    {teamMember.socialLinks.googleScholar && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <a 
                          href={teamMember.socialLinks.googleScholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full"
                        >
                          <GraduationCap className="h-4 w-4 mr-3" />
                          Google Scholar
                        </a>
                      </Button>
                    )}

                    {teamMember.socialLinks.orcid && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <a 
                          href={teamMember.socialLinks.orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full"
                        >
                          <ExternalLink className="h-4 w-4 mr-3" />
                          ORCID
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Languages */}
            {teamMember.languages && teamMember.languages.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {teamMember.languages.map((language, index) => (
                      <Badge key={index} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Call to Action */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Work with our team
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Interested in collaborating or joining our mission?
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberTemplate;
