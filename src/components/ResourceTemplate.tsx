import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, User, ExternalLink } from 'lucide-react';

interface ResourceTemplateProps {
  resource: {
    title: string;
    description?: string;
    resourceType: string;
    category: string;
    fileType?: string;
    fileSize?: string;
    downloadUrl?: string;
    downloadCount: number;
    content: string;
    lastUpdated?: string;
    thumbnail?: string;
    author?: {
      name: string;
      title: string;
      profileImage?: string;
    };
  };
}

const ResourceTemplate: React.FC<ResourceTemplateProps> = ({ resource }) => {
  const handleDownload = () => {
    if (resource.downloadUrl) {
      window.open(resource.downloadUrl, '_blank');
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Resource Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{resource.resourceType}</Badge>
          <Badge variant="outline">{resource.category}</Badge>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {resource.title}
        </h1>

        {resource.description && (
          <p className="text-xl text-gray-600 mb-8">{resource.description}</p>
        )}

        <div className="flex flex-wrap items-center justify-between border-y border-gray-200 py-4 gap-4">
          <div className="flex items-center space-x-4">
            {resource.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">{resource.author.name}</span>
              </div>
            )}
            {resource.lastUpdated && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Updated {format(new Date(resource.lastUpdated), 'MMM d, yyyy')}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {resource.fileType && resource.fileSize && (
              <Badge variant="outline" className="text-xs">
                <FileText className="h-3 w-3 mr-1" />
                {resource.fileType.toUpperCase()} • {resource.fileSize}
              </Badge>
            )}
            <Badge variant="secondary" className="text-xs">
              {resource.downloadCount} downloads
            </Badge>
          </div>
        </div>
      </header>

      {/* Resource Preview */}
      {resource.thumbnail && (
        <div className="mb-12">
          <Card className="overflow-hidden">
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="w-full h-auto"
            />
          </Card>
        </div>
      )}

      {/* Download Section */}
      {resource.downloadUrl && (
        <div className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Download Resource</h3>
                  {resource.fileType && resource.fileSize && (
                    <p className="text-sm text-gray-600">
                      Available as {resource.fileType.toUpperCase()} ({resource.fileSize})
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Resource Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: resource.content }} />
      </div>

      {/* Usage Guidelines */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold mb-4">Usage Guidelines</h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• This resource is provided for educational and non-commercial use</li>
              <li>• Please cite the source when using this material</li>
              <li>• Do not modify or redistribute without permission</li>
              <li>• Contact us for commercial use inquiries</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </article>
  );
};

export default ResourceTemplate;