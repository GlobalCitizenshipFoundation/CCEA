
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Building, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ChevronRight,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface MemberTemplateProps {
  member: {
    name: string;
    memberType: 'organization' | 'individual';
    membershipLevel: 'full' | 'associate' | 'honorary';
    organization?: string;
    title?: string;
    profileImage?: string;
    logo?: string;
    description: string;
    bio?: string;
    location?: {
      city?: string;
      country?: string;
      region?: string;
    };
    contactInfo?: {
      email?: string;
      phone?: string;
      website?: string;
    };
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
    };
    memberSince: string;
    expertise?: string[];
    achievements?: string[];
    contributions?: string;
    featured?: boolean;
    publicProfile?: boolean;
  };
}

const MemberTemplate: React.FC<MemberTemplateProps> = ({ member }) => {
  const getMembershipLevelColor = () => {
    switch (member.membershipLevel) {
      case 'full':
        return 'bg-blue-100 text-blue-800';
      case 'associate':
        return 'bg-green-100 text-green-800';
      case 'honorary':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMemberTypeIcon = () => {
    return member.memberType === 'organization' ? Building : User;
  };

  const getLocationString = () => {
    const parts = [];
    if (member.location?.city) parts.push(member.location.city);
    if (member.location?.country) parts.push(member.location.country);
    if (member.location?.region && parts.length === 0) parts.push(member.location.region);
    return parts.join(', ');
  };

  const MemberTypeIcon = getMemberTypeIcon();

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/members" className="hover:text-blue-600">Members</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{member.name}</span>
      </nav>

      {/* Member Header */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image/Logo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {(member.memberType === 'organization' ? member.logo : member.profileImage) ? (
                <img
                  src={member.memberType === 'organization' ? member.logo : member.profileImage}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <MemberTypeIcon className="h-16 w-16 text-gray-400" />
              )}
            </div>
          </div>

          {/* Member Info */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={getMembershipLevelColor()}>
                {member.membershipLevel.charAt(0).toUpperCase() + member.membershipLevel.slice(1)} Member
              </Badge>
              <Badge variant="outline">
                <MemberTypeIcon className="h-3 w-3 mr-1" />
                {member.memberType === 'organization' ? 'Organization' : 'Individual'}
              </Badge>
              {member.featured && (
                <Badge className="bg-gold-100 text-gold-800">Featured</Badge>
              )}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {member.name}
            </h1>

            {member.title && (
              <p className="text-xl text-blue-600 mb-2">{member.title}</p>
            )}

            {member.organization && member.memberType === 'individual' && (
              <p className="text-lg text-gray-600 mb-4">{member.organization}</p>
            )}

            <p className="text-gray-700 mb-6">{member.description}</p>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {getLocationString() && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{getLocationString()}</span>
                </div>
              )}
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Member since {format(new Date(member.memberSince), 'MMMM yyyy')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Bio/About */}
          {member.bio && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {member.memberType === 'organization' ? 'About Our Organization' : 'Biography'}
              </h2>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: member.bio }} />
              </div>
            </div>
          )}

          {/* Expertise */}
          {member.expertise && member.expertise.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {member.achievements && member.achievements.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Achievements & Recognition</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contributions */}
          {member.contributions && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Contributions to CCEA</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: member.contributions }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {member.contactInfo?.email && (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-500 mr-3" />
                    <a 
                      href={`mailto:${member.contactInfo.email}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {member.contactInfo.email}
                    </a>
                  </div>
                )}

                {member.contactInfo?.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-3" />
                    <a 
                      href={`tel:${member.contactInfo.phone}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {member.contactInfo.phone}
                    </a>
                  </div>
                )}

                {member.contactInfo?.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-500 mr-3" />
                    <a 
                      href={member.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          {member.socialLinks && Object.values(member.socialLinks).some(link => link) && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {member.socialLinks.linkedin && (
                    <Button variant="outline" size="sm">
                      <a 
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}

                  {member.socialLinks.twitter && (
                    <Button variant="outline" size="sm">
                      <a 
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </a>
                    </Button>
                  )}

                  {member.socialLinks.facebook && (
                    <Button variant="outline" size="sm">
                      <a 
                        href={member.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </a>
                    </Button>
                  )}

                  {member.socialLinks.instagram && (
                    <Button variant="outline" size="sm">
                      <a 
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Membership Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Membership Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <Badge className={getMembershipLevelColor()}>
                    {member.membershipLevel.charAt(0).toUpperCase() + member.membershipLevel.slice(1)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">
                    {member.memberType === 'organization' ? 'Organization' : 'Individual'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since:</span>
                  <span className="font-medium">
                    {format(new Date(member.memberSince), 'MMM yyyy')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-3">
                Interested in joining CCEA?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Become part of our global community of civic education professionals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link to="/membership">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default MemberTemplate;
