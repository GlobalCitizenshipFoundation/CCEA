
import React from 'react';
import { Calendar, Download, Copy, Mail, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface EventActionsProps {
  event: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    timezone: string;
    isVirtual: boolean;
    location?: {
      venue?: string;
      address?: string;
      city?: string;
      country?: string;
    };
    virtualPlatform?: string;
    registrationInfo?: {
      registrationUrl?: string;
    };
  };
}

const EventActions: React.FC<EventActionsProps> = ({ event }) => {
  const { toast } = useToast();

  const formatDateForCalendar = (dateString: string) => {
    return new Date(dateString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
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
    <div className="flex flex-col lg:flex-row gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
      {/* Share Section */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Share this event:</h3>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleShare('twitter')}
            className="flex items-center gap-2"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleShare('linkedin')}
            className="flex items-center gap-2"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-2"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleShare('email')}
            className="flex items-center gap-2"
            aria-label="Share via Email"
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleShare('copy')}
            className="flex items-center gap-2"
            aria-label="Copy link"
          >
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>
        </div>
      </div>

      {/* Add to Calendar Section */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Add to calendar:</h3>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={downloadGoogleCalendar}
            className="flex items-center gap-2"
            aria-label="Add to Google Calendar"
          >
            <Calendar className="h-4 w-4" />
            Google
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={downloadOutlookCalendar}
            className="flex items-center gap-2"
            aria-label="Add to Outlook Calendar"
          >
            <Calendar className="h-4 w-4" />
            Outlook
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={downloadAppleCalendar}
            className="flex items-center gap-2"
            aria-label="Download Apple Calendar file"
          >
            <Download className="h-4 w-4" />
            Apple (.ics)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventActions;
