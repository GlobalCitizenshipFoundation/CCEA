import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Clock, MapPin, Users, ExternalLink, Download, Globe, Share2, ChevronRight, Video, User, Mail, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Navigation from './Navigation';
import Footer from './Footer';

interface EventTemplateProps {
  event: {
    title: string;
    description: string;
    eventType: string;
    startDate: string;
    endDate: string;
    timezone: string;
    location?: {
      venue?: string;
      address?: string;
      city?: string;
      country?: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    isVirtual: boolean;
    virtualPlatform?: string;
    registrationInfo?: {
      registrationUrl?: string;
      registrationDeadline?: string;
      earlyBirdDeadline?: string;
      fees?: {
        regular?: number;
        earlyBird?: number;
        student?: number;
        member?: number;
      };
    };
    capacity?: number;
    registered: number;
    speakers?: Array<{
      name: string;
      title: string;
      organization?: string;
      bio?: string;
      profileImage?: string;
    }>;
    organizers?: Array<{
      name: string;
      title: string;
      email?: string;
    }>;
    agenda?: string;
    requirements?: string;
    featuredImage?: string;
    gallery?: string[];
    content: string;
    materials?: Array<{
      title: string;
      type: string;
      url: string;
      description?: string;
    }>;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  };
}

const EventTemplate: React.FC<EventTemplateProps> = ({ event }) => {
  const { toast } = useToast();
  
  const getStatusColor = () => {
    switch (event.status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isRegistrationOpen = () => {
    if (event.status !== 'upcoming') return false;
    if (!event.registrationInfo?.registrationDeadline) return true;
    return new Date() < new Date(event.registrationInfo.registrationDeadline);
  };

  const getLocationString = () => {
    if (event.isVirtual) {
      return `Online${event.virtualPlatform ? ` (${event.virtualPlatform})` : ''}`;
    }
    
    const parts = [];
    if (event.location?.venue) parts.push(event.location.venue);
    if (event.location?.city) parts.push(event.location.city);
    if (event.location?.country) parts.push(event.location.country);
    return parts.join(', ') || 'Location TBA';
  };

  const formatDateForCalendar = (dateString: string) => {
    return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const generateCalendarData = () => {
    const startDate = formatDateForCalendar(event.startDate);
    const endDate = formatDateForCalendar(event.endDate);
    const location = event.isVirtual ? 'Online Event' : getLocationString();
    
    return {
      title: event.title,
      description: event.description,
      startDate,
      endDate,
      location,
      timezone: event.timezone
    };
  };

  const downloadGoogleCalendar = () => {
    const calData = generateCalendarData();
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calData.title)}&dates=${calData.startDate}/${calData.endDate}&details=${encodeURIComponent(calData.description)}&location=${encodeURIComponent(calData.location)}`;
    window.open(googleUrl, '_blank');
  };

  const downloadOutlookCalendar = () => {
    const calData = generateCalendarData();
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(calData.title)}&startdt=${calData.startDate}&enddt=${calData.endDate}&body=${encodeURIComponent(calData.description)}&location=${encodeURIComponent(calData.location)}`;
    window.open(outlookUrl, '_blank');
  };

  const downloadAppleCalendar = () => {
    const calData = generateCalendarData();
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CCEA//Event//EN
BEGIN:VEVENT
UID:${Date.now()}@ccea.org
DTSTAMP:${formatDateForCalendar(new Date().toISOString())}
DTSTART:${calData.startDate}
DTEND:${calData.endDate}
SUMMARY:${calData.title}
DESCRIPTION:${calData.description}
LOCATION:${calData.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async (platform: string) => {
    const shareUrl = window.location.href;
    const title = encodeURIComponent(event.title);
    const text = encodeURIComponent(event.description);
    
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
          description: "Event link has been copied to your clipboard.",
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
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/events" className="hover:text-blue-600">Events</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{event.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Header */}
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {event.eventType}
                  </Badge>
                  <Badge className={getStatusColor()}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </Badge>
                  {event.isVirtual && (
                    <Badge className="bg-blue-100 text-blue-800">
                      <Video className="h-3 w-3 mr-1" />
                      Virtual
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {event.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8">{event.description}</p>

                {/* Event Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-medium">
                        {format(new Date(event.startDate), 'EEEE, MMMM d, yyyy')}
                      </p>
                      {event.startDate !== event.endDate && (
                        <p className="text-sm text-gray-600">
                          to {format(new Date(event.endDate), 'EEEE, MMMM d, yyyy')}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-medium">
                        {format(new Date(event.startDate), 'h:mm a')} - {format(new Date(event.endDate), 'h:mm a')}
                      </p>
                      <p className="text-sm text-gray-600">{event.timezone}</p>
                    </div>
                  </div>

                  <div className="flex items-start text-gray-700">
                    {event.isVirtual ? (
                      <Globe className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                    ) : (
                      <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{getLocationString()}</p>
                      {event.location?.address && (
                        <p className="text-sm text-gray-600">{event.location.address}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <p className="font-medium">
                        {event.registered} registered
                        {event.capacity && ` / ${event.capacity} capacity`}
                      </p>
                      {event.capacity && (
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{width: `${Math.min((event.registered / event.capacity) * 100, 100)}%`}}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Share:</span>
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
              </header>

              {/* Featured Image */}
              {event.featuredImage && (
                <div className="mb-8">
                  <img
                    src={event.featuredImage}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Event Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: event.content }} />
              </div>

              {/* Agenda */}
              {event.agenda && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Agenda</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: event.agenda }} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Speakers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              {speaker.profileImage ? (
                                <img 
                                  src={speaker.profileImage} 
                                  alt={speaker.name}
                                  className="w-16 h-16 rounded-full object-cover"
                                />
                              ) : (
                                <User className="h-8 w-8 text-blue-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{speaker.name}</h3>
                              <p className="text-blue-600 text-sm">{speaker.title}</p>
                              {speaker.organization && (
                                <p className="text-gray-600 text-sm">{speaker.organization}</p>
                              )}
                              {speaker.bio && (
                                <p className="text-gray-700 text-sm mt-2 line-clamp-3">{speaker.bio}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {event.requirements && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: event.requirements }} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Materials */}
              {event.materials && event.materials.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Event Materials</h2>
                  <div className="space-y-3">
                    {event.materials.map((material, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium">{material.title}</h4>
                              <p className="text-sm text-gray-600">{material.type}</p>
                              {material.description && (
                                <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                              )}
                            </div>
                            <Button variant="outline" size="sm">
                              <a href={material.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </a>
                            </Button>
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
              {/* Registration Card */}
              <Card className="mb-8 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl">Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  {event.status === 'upcoming' && isRegistrationOpen() ? (
                    <div className="space-y-4">
                      {event.registrationInfo?.fees && (
                        <div className="space-y-2">
                          <h4 className="font-medium">Registration Fees</h4>
                          <div className="text-sm space-y-1">
                            {event.registrationInfo.fees.member && (
                              <div className="flex justify-between">
                                <span>Members:</span>
                                <span className="font-medium">€{event.registrationInfo.fees.member}</span>
                              </div>
                            )}
                            {event.registrationInfo.fees.regular && (
                              <div className="flex justify-between">
                                <span>Regular:</span>
                                <span className="font-medium">€{event.registrationInfo.fees.regular}</span>
                              </div>
                            )}
                            {event.registrationInfo.fees.student && (
                              <div className="flex justify-between">
                                <span>Students:</span>
                                <span className="font-medium">€{event.registrationInfo.fees.student}</span>
                              </div>
                            )}
                            {event.registrationInfo.fees.earlyBird && event.registrationInfo.earlyBirdDeadline && (
                              <div className="text-xs text-green-600 mt-2">
                                Early bird pricing available until {format(new Date(event.registrationInfo.earlyBirdDeadline), 'MMM d, yyyy')}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {event.registrationInfo?.registrationDeadline && (
                        <div className="text-sm text-orange-600">
                          Registration closes: {format(new Date(event.registrationInfo.registrationDeadline), 'MMM d, yyyy')}
                        </div>
                      )}

                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => event.registrationInfo?.registrationUrl && window.open(event.registrationInfo.registrationUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Register Now
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-600">
                        {event.status === 'completed' && 'This event has ended'}
                        {event.status === 'cancelled' && 'This event has been cancelled'}
                        {event.status === 'upcoming' && !isRegistrationOpen() && 'Registration is closed'}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar Integration */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-3">Add to Calendar</h4>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={downloadGoogleCalendar}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Google Calendar
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={downloadOutlookCalendar}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Outlook Calendar
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={downloadAppleCalendar}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Apple Calendar (.ics)
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              {event.organizers && event.organizers.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {event.organizers.map((organizer, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{organizer.name}</p>
                            <p className="text-xs text-gray-600">{organizer.title}</p>
                            {organizer.email && (
                              <a 
                                href={`mailto:${organizer.email}`}
                                className="text-xs text-blue-600 hover:underline flex items-center mt-1"
                              >
                                <Mail className="h-3 w-3 mr-1" />
                                {organizer.email}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Location Map Placeholder */}
              {!event.isVirtual && event.location?.coordinates && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-4">
                      <p className="text-gray-600">Interactive map would go here</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{event.location.venue}</p>
                      <p className="text-gray-600">{event.location.address}</p>
                      <p className="text-gray-600">{event.location.city}, {event.location.country}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventTemplate;
