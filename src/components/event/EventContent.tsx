
import React from 'react';
import { Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EventContentProps {
  event: {
    title: string;
    content: string;
    agenda?: string;
    requirements?: string;
    speakers?: Array<{
      name: string;
      title: string;
      organization?: string;
      bio?: string;
      profileImage?: string;
    }>;
    materials?: Array<{
      title: string;
      type: string;
      url: string;
      description?: string;
    }>;
  };
}

const EventContent: React.FC<EventContentProps> = ({ event }) => {
  return (
    <div className="space-y-8">
      {/* Event Content */}
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: event.content }} />
      </div>

      {/* Agenda */}
      {event.agenda && (
        <div>
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
        <div>
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
        <div>
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
        <div>
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
  );
};

export default EventContent;
