
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Calendar, ExternalLink, Share2, Users, Award, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
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
  const { toast } = useToast();

  const handleShare = async (platform: string) => {
    const shareUrl = window.location.href;
    const title = encodeURIComponent(`${member.name} - CCEA Member`);
    const text = encodeURIComponent(member.description);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${title}&summary=${text}`,
      email: `mailto:?subject=${title}&body=${text}%0A%0A${shareUrl}`,
      copy: shareUrl
    };
    
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "Member profile link has been copied to your clipboard.",
        });
      } catch (err) {
        toast({
          title: "Copy failed",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
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

          {/* Social Sharing */}
          <div className="mb-6 p-4 bg-white rounded-lg border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Share this member profile:</span>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('twitter')}
                    className="h-8 w-8 p-0"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('linkedin')}
                    className="h-8 w-8 p-0"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('facebook')}
                    className="h-8 w-8 p-0"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('email')}
                    className="h-8 w-8 p-0"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('copy')}
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
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
