
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Clock, User, Users, Tag, Share2, BookOpen, Copy, ChevronRight, Twitter, Linkedin, Facebook, Mail, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Navigation from './Navigation';
import Footer from './Footer';

interface ArticleTemplateProps {
  article: {
    title: string;
    excerpt: string;
    author: {
      name: string;
      title: string;
      profileImage?: string;
      bio?: string;
    };
    coAuthors?: Array<{
      name: string;
      title: string;
      profileImage?: string;
    }>;
    publishDate: string;
    lastModified?: string;
    categories: string[];
    tags?: string[];
    readTime: number;
    featuredImage: string;
    content: string;
    relatedArticles?: Array<{
      title: string;
      excerpt: string;
      slug: string;
      featuredImage: string;
      author: { name: string };
      publishDate: string;
      readTime: number;
    }>;
    tableOfContents?: boolean;
    socialSharing?: boolean;
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  const { toast } = useToast();
  const shareUrl = `https://edu.citizen.ngo/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`;
  
  const generateAPACitation = () => {
    const publishYear = new Date(article.publishDate).getFullYear();
    const publishMonth = format(new Date(article.publishDate), 'MMMM d');
    const currentDate = format(new Date(), 'MMMM d, yyyy');
    
    let authorString = article.author.name;
    if (article.coAuthors && article.coAuthors.length > 0) {
      const coAuthorNames = article.coAuthors.map(author => author.name);
      if (coAuthorNames.length === 1) {
        authorString += ` & ${coAuthorNames[0]}`;
      } else {
        authorString += `, ${coAuthorNames.slice(0, -1).join(', ')}, & ${coAuthorNames[coAuthorNames.length - 1]}`;
      }
    }
    
    return `${authorString} (${publishYear}, ${publishMonth}). ${article.title}. *CCEA - Civic and Citizenship Education Alliance*. Retrieved ${currentDate}, from ${shareUrl}`;
  };

  const copyAPACitation = async () => {
    const citation = generateAPACitation();
    try {
      await navigator.clipboard.writeText(citation);
      toast({
        title: "Citation copied!",
        description: "APA citation has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async (platform: string) => {
    const title = encodeURIComponent(article.title);
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(article.excerpt);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${text}`,
      email: `mailto:?subject=${title}&body=${text}%0A%0A${url}`,
      copy: shareUrl
    };
    
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "Article link has been copied to your clipboard.",
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/articles" className="hover:text-blue-600">Articles</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                  {category}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author and Meta Information */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-y border-gray-200 py-6 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {article.author.profileImage ? (
                    <img 
                      src={article.author.profileImage} 
                      alt={article.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-blue-600" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{article.author.name}</p>
                  <p className="text-sm text-gray-600">{article.author.title}</p>
                  {article.coAuthors && article.coAuthors.length > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      Co-authors: {article.coAuthors.map(author => author.name).join(', ')}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{format(new Date(article.publishDate), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime} min read</span>
                </div>
                {article.lastModified && (
                  <div className="text-xs">
                    Updated: {format(new Date(article.lastModified), 'MMM d, yyyy')}
                  </div>
                )}
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Share:</span>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('twitter')}
                    className="h-8 w-8 p-0"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('linkedin')}
                    className="h-8 w-8 p-0"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleShare('facebook')}
                    className="h-8 w-8 p-0"
                  >
                    <Facebook className="h-4 w-4" />
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
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* APA Citation Section */}
          <Card className="mb-12 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">APA Citation</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-800 leading-relaxed font-mono">
                  {generateAPACitation()}
                </p>
              </div>
              <Button onClick={copyAPACitation} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Copy className="h-4 w-4 mr-2" />
                Copy APA Citation
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-12" />

          {/* Author Bio */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">About the Author</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                {article.author.profileImage ? (
                  <img 
                    src={article.author.profileImage} 
                    alt={article.author.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{article.author.name}</h4>
                <p className="text-blue-600 mb-3">{article.author.title}</p>
                {article.author.bio && (
                  <p className="text-gray-600 leading-relaxed">{article.author.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.relatedArticles.slice(0, 4).map((relatedArticle, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <Link to={`/articles/${relatedArticle.slug}`}>
                      <img 
                        src={relatedArticle.featuredImage} 
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </Link>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 line-clamp-2">
                        <Link 
                          to={`/articles/${relatedArticle.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By {relatedArticle.author.name}</span>
                        <span>{relatedArticle.readTime} min read</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Join the Conversation
              </h3>
              <p className="text-gray-600 mb-6">
                Share your thoughts and connect with our community of civic education professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/membership">Become a Member</Link>
                </Button>
                <Button variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleTemplate;
