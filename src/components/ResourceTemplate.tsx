import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, Calendar, User, Users, Tag, Share2, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from './Navigation';
import Footer from './Footer';

interface Author {
  name: string;
  title?: string;
  profileImage?: string;
}

interface Contributor {
  name: string;
  title?: string;
}

interface License {
  type: string;
  url: string;
  attribution: string;
}

interface RelatedResource {
  title: string;
  resourceType: string;
  slug: string;
  thumbnail?: string;
}

interface FileInfo {
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  previewUrl?: string;
}

interface Resource {
  title: string;
  description: string;
  resourceType: string;
  category: string;
  subcategory?: string;
  accessType: string;
  fileInfo: FileInfo;
  downloadCount?: number;
  content: string;
  lastUpdated: string;
  thumbnail?: string;
  author: Author;
  contributors?: Contributor[];
  license?: License;
  relatedResources?: RelatedResource[];
  featured?: boolean;
}

interface ResourceTemplateProps {
  resource: Resource;
}

const ResourceTemplate: React.FC<ResourceTemplateProps> = ({ resource }) => {
  const handleDownload = () => {
    console.log(`Downloading ${resource.title} from ${resource.fileInfo.downloadUrl}`);
    // Implement download logic here, e.g., using window.location.href or a download library
  };

  const handlePreview = () => {
    if (resource.fileInfo.previewUrl) {
      window.open(resource.fileInfo.previewUrl, '_blank');
    } else {
      console.log('No preview available for this resource.');
    }
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resource Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">{resource.title}</h1>
            <p className="text-gray-500 mt-2">{resource.description}</p>
            <div className="flex items-center space-x-2 mt-4">
              <Badge variant="secondary">{resource.resourceType}</Badge>
              {resource.category && <Badge>{resource.category}</Badge>}
              {resource.subcategory && <Badge>{resource.subcategory}</Badge>}
            </div>
          </div>

          {/* Resource Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Resource Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span>Type: {resource.fileInfo.fileType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-gray-500" />
                      <span>Size: {resource.fileInfo.fileSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Last Updated: {resource.lastUpdated}</span>
                    </div>
                    {resource.author && (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span>Author: {resource.author.name}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleDownload} className="w-full" variant="secondary">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  {resource.fileInfo.previewUrl && (
                    <Button onClick={handlePreview} className="w-full" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  )}
                  <Button onClick={handleShare} className="w-full" variant="ghost">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </CardContent>
              </Card>

              {resource.relatedResources && resource.relatedResources.length > 0 && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-none space-y-2">
                      {resource.relatedResources.map(related => (
                        <li key={related.slug}>
                          <Link to={`/resources/${related.slug}`} className="text-blue-500 hover:underline">
                            {related.title} ({related.resourceType})
                          </Link>
                        </li>
                      ))}
                    </ul>
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

export default ResourceTemplate;
