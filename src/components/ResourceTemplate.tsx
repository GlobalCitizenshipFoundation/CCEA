
import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Download, 
  FileText, 
  Calendar, 
  User, 
  ExternalLink, 
  Eye,
  Share2,
  ChevronRight,
  Star,
  Users,
  Globe,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceTemplateProps {
  resource: {
    title: string;
    description: string;
    resourceType: string;
    category: string;
    subcategory?: string;
    accessType: 'free' | 'members-only' | 'premium';
    fileInfo?: {
      fileType?: string;
      fileSize?: string;
      downloadUrl?: string;
      previewUrl?: string;
      externalUrl?: string;
    };
    downloadCount: number;
    content: string;
    lastUpdated: string;
    thumbnail?: string;
    gallery?: string[];
    author?: {
      name: string;
      title: string;
      profileImage?: string;
    };
    contributors?: Array<{
      name: string;
      title: string;
    }>;
    license?: {
      type: string;
      url?: string;
      attribution?: string;
    };
    relatedResources?: Array<{
      title: string;
      resourceType: string;
      slug: string;
      thumbnail?: string;
    }>;
    featured?: boolean;
  };
}

const ResourceTemplate: React.FC<ResourceTemplateProps> = ({ resource }) => {
  const handleDownload = () => {
    if (resource.fileInfo?.downloadUrl) {
      window.open(resource.fileInfo.downloadUrl, '_blank');
    }
  };

  const handlePreview = () => {
    if (resource.fileInfo?.previewUrl) {
      window.open(resource.fileInfo.previewUrl, '_blank');
    }
  };

  const getAccessIcon = () => {
    switch (resource.accessType) {
      case 'members-only':
        return <Users className="h-4 w-4" />;
      case 'premium':
        return <Star className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  const getAccessColor = () => {
    switch (resource.accessType) {
      case 'members-only':
        return 'bg-blue-100 text-blue-800';
      case 'premium':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/resources" className="hover:text-blue-600">Resources</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{resource.title}</span>
      </nav>

      {/* Resource Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            {resource.resourceType}
          </Badge>
          <Badge variant="outline">{resource.category}</Badge>
          {resource.subcategory && (
            <Badge variant="outline">{resource.subcategory}</Badge>
          )}
          <Badge className={getAccessColor()}>
            <span className="flex items-center">
              {getAccessIcon()}
              <span className="ml-1 capitalize">{resource.accessType.replace('-', ' ')}</span>
            </span>
          </Badge>
          {resource.featured && (
            <Badge className="bg-gold-100 text-gold-800">Featured</Badge>
          )}
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {resource.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8">{resource.description}</p>

        <div className="flex flex-wrap items-center justify-between border-y border-gray-200 py-4 gap-4">
          <div className="flex items-center space-x-6">
            {resource.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">{resource.author.name}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-600">
                Updated {format(new Date(resource.lastUpdated), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-600">
                {resource.downloadCount.toLocaleString()} downloads
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {resource.fileInfo?.fileType && resource.fileInfo?.fileSize && (
              <Badge variant="outline" className="text-xs">
                <FileText className="h-3 w-3 mr-1" />
                {resource.fileInfo.fileType.toUpperCase()} • {resource.fileInfo.fileSize}
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Resource Preview */}
      {(resource.thumbnail || resource.gallery) && (
        <div className="mb-12">
          {resource.gallery && resource.gallery.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resource.gallery.slice(0, 4).map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={image}
                    alt={`${resource.title} preview ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </Card>
              ))}
            </div>
          ) : resource.thumbnail && (
            <Card className="overflow-hidden">
              <img
                src={resource.thumbnail}
                alt={resource.title}
                className="w-full h-auto"
              />
            </Card>
          )}
        </div>
      )}

      {/* Access/Download Section */}
      <div className="mb-12">
        <Card className="border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Access Resource</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {resource.fileInfo?.fileType && resource.fileInfo?.fileSize && (
                    <p>Available as {resource.fileInfo.fileType.toUpperCase()} ({resource.fileInfo.fileSize})</p>
                  )}
                  <p className="flex items-center">
                    {getAccessIcon()}
                    <span className="ml-2 capitalize">{resource.accessType.replace('-', ' ')} access</span>
                  </p>
                  {resource.license && (
                    <p>License: {resource.license.type}</p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                {resource.fileInfo?.previewUrl && (
                  <Button variant="outline" onClick={handlePreview}>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                )}
                
                {resource.fileInfo?.downloadUrl && (
                  <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                )}
                
                {resource.fileInfo?.externalUrl && (
                  <Button 
                    onClick={() => window.open(resource.fileInfo!.externalUrl, '_blank')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Online
                  </Button>
                )}

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {resource.accessType !== 'free' && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center text-blue-800">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {resource.accessType === 'members-only' 
                      ? 'This resource requires CCEA membership to access.' 
                      : 'This is a premium resource requiring special access.'}
                  </span>
                </div>
                {resource.accessType === 'members-only' && (
                  <Button className="mt-3 bg-blue-600 hover:bg-blue-700" size="sm">
                    <Link to="/membership">Become a Member</Link>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Resource Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: resource.content }} />
      </div>

      {/* Contributors */}
      {resource.contributors && resource.contributors.length > 0 && (
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Contributors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resource.contributors.map((contributor, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{contributor.name}</p>
                  <p className="text-sm text-gray-600">{contributor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Separator className="my-12" />

      {/* Related Resources */}
      {resource.relatedResources && resource.relatedResources.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resource.relatedResources.map((relatedResource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <Link to={`/resources/${relatedResource.slug}`}>
                  {relatedResource.thumbnail && (
                    <img 
                      src={relatedResource.thumbnail} 
                      alt={relatedResource.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  )}
                </Link>
                <CardContent className="p-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {relatedResource.resourceType}
                  </Badge>
                  <h4 className="font-semibold line-clamp-2">
                    <Link 
                      to={`/resources/${relatedResource.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {relatedResource.title}
                    </Link>
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Usage Guidelines & License */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold mb-6">Usage Guidelines & License</h3>
        <Card>
          <CardContent className="p-6">
            {resource.license ? (
              <div className="mb-4">
                <h4 className="font-medium mb-2">License Information</h4>
                <p className="text-sm text-gray-600 mb-2">{resource.license.type}</p>
                {resource.license.attribution && (
                  <p className="text-sm text-gray-600">{resource.license.attribution}</p>
                )}
                {resource.license.url && (
                  <Button variant="outline" size="sm" className="mt-2">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    <a href={resource.license.url} target="_blank" rel="noopener noreferrer">
                      View License
                    </a>
                  </Button>
                )}
              </div>
            ) : (
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• This resource is provided for educational and non-commercial use</li>
                <li>• Please cite the source when using this material</li>
                <li>• Do not modify or redistribute without permission</li>
                <li>• Contact us for commercial use inquiries</li>
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </article>
  );
};

export default ResourceTemplate;
