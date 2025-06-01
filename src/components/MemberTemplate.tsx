import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Calendar, ExternalLink, Share2, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from './Navigation';
import Footer from './Footer';

interface MemberTemplateProps {
  member: {
    name: string;
    memberType: string;
    membershipLevel: string;
    title: string;
    logo: string;
    description: string;
    bio: string;
    location: {
      city: string;
      country: string;
      region: string;
    };
    contactInfo: {
      email: string;
      phone?: string;
      website?: string;
    };
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
    };
    memberSince: string;
    expertise: string[];
    achievements?: string[];
    contributions?: string;
    featured: boolean;
    publicProfile: boolean;
  };
}

const MemberTemplate: React.FC<MemberTemplateProps> = ({ member }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: member.name,
        text: member.description,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.error('Error sharing', error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/members" className="text-blue-500 hover:text-blue-700">
              &larr; Back to Members
            </Link>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
                <Button variant="outline" size="icon" onClick={handleShare} aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="mb-4">
                    <img src={member.logo} alt={member.name} className="w-full h-48 object-contain bg-gray-100 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600">{member.title}</p>
                    <Badge className="mt-2">{member.membershipLevel} Member</Badge>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <ul className="space-y-2">
                      {member.contactInfo.website && (
                        <li className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-gray-500" />
                          <a href={member.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Visit Website
                          </a>
                        </li>
                      )}
                      {member.contactInfo.email && (
                        <li className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-500" />
                          <a href={`mailto:${member.contactInfo.email}`} className="text-blue-500 hover:underline">
                            {member.contactInfo.email}
                          </a>
                        </li>
                      )}
                      {member.contactInfo.phone && (
                        <li className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{member.contactInfo.phone}</span>
                        </li>
                      )}
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{member.location.city}, {member.location.country}</span>
                      </li>
                    </ul>
                  </div>
                  {member.socialLinks && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Connect</h4>
                      <div className="flex space-x-3">
                        {member.socialLinks.linkedin && (
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                            LinkedIn
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                            Twitter
                          </a>
                        )}
                        {member.socialLinks.facebook && (
                          <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                            Facebook
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      {member.expertise && <TabsTrigger value="expertise">Expertise</TabsTrigger>}
                      {member.achievements && <TabsTrigger value="achievements">Achievements</TabsTrigger>}
                      {member.contributions && <TabsTrigger value="contributions">Contributions</TabsTrigger>}
                    </TabsList>
                    <TabsContent value="overview">
                      <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: member.bio }} />
                    </TabsContent>
                    {member.expertise && (
                      <TabsContent value="expertise">
                        <h4 className="text-lg font-semibold mb-2">Areas of Expertise</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {member.expertise.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </TabsContent>
                    )}
                    {member.achievements && (
                      <TabsContent value="achievements">
                        <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {member.achievements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </TabsContent>
                    )}
                    {member.contributions && (
                      <TabsContent value="contributions">
                        <h4 className="text-lg font-semibold mb-2">Contributions to CCEA</h4>
                        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: member.contributions }} />
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MemberTemplate;
