import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Clock, Calendar } from 'lucide-react';

interface ArticleTemplateProps {
  article: {
    title: string;
    excerpt?: string;
    author: {
      name: string;
      title: string;
      profileImage?: string;
    };
    date: string;
    categories?: string[];
    tags?: string[];
    readTime?: string;
    featuredImage?: string;
    content: string;
    relatedArticles?: Array<{
      title: string;
      excerpt?: string;
      slug: string;
      featuredImage?: string;
    }>;
    socialSharing?: boolean;
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${article.title}`;

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You might want to show a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categories?.map((category) => (
            <Badge key={category} variant="secondary">{category}</Badge>
          ))}
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
        )}

        <div className="flex items-center justify-between border-y border-gray-200 py-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              {article.author.profileImage ? (
                <AvatarImage src={article.author.profileImage} alt={article.author.name} />
              ) : (
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <div className="font-medium">{article.author.name}</div>
              <div className="text-sm text-gray-600">{article.author.title}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(article.date), 'MMM d, yyyy')}
            </span>
            {article.readTime && (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="mb-12">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {/* You might want to use a markdown renderer here */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      )}

      {/* Social Sharing */}
      {article.socialSharing && (
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('linkedin')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
            >
              <LinkIcon className="h-4 w-4 mr-2" />
              Copy Link
            </Button>
          </div>
        </div>
      )}

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {article.relatedArticles.map((related, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                {related.featuredImage && (
                  <img
                    src={related.featuredImage}
                    alt={related.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    <a href={`/articles/${related.slug}`} className="hover:text-blue-600">
                      {related.title}
                    </a>
                  </h3>
                  {related.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {related.excerpt}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ArticleTemplate;