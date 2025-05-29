
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Digital Learning', 'International Studies', 'Youth Development', 'Policy Research', 'Best Practices'];

  const articles = [
    {
      id: 1,
      title: "Transforming Civic Education in the Digital Age",
      excerpt: "Exploring innovative approaches to civic education through digital platforms and virtual engagement, including case studies from leading institutions.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      category: "Digital Learning",
      readTime: "8 min read",
      featured: true,
      slug: "transforming-civic-education-digital-age"
    },
    {
      id: 2,
      title: "Global Perspectives on Citizenship Education",
      excerpt: "A comprehensive analysis of citizenship education practices across different cultural contexts, highlighting successful international collaborations.",
      author: "Prof. Marco Rossi",
      date: "December 10, 2024",
      category: "International Studies",
      readTime: "12 min read",
      featured: true,
      slug: "global-perspectives-citizenship-education"
    },
    {
      id: 3,
      title: "Youth Engagement in Democratic Processes",
      excerpt: "Research findings on effective strategies for engaging young people in democratic participation and civic responsibility.",
      author: "Dr. Elena Müller",
      date: "December 5, 2024",
      category: "Youth Development",
      readTime: "6 min read",
      featured: false,
      slug: "youth-engagement-democratic-processes"
    },
    {
      id: 4,
      title: "Policy Frameworks for Civic Education Reform",
      excerpt: "Analyzing successful policy interventions that have strengthened civic education curricula at national and regional levels.",
      author: "Prof. James Chen",
      date: "December 1, 2024",
      category: "Policy Research",
      readTime: "10 min read",
      featured: false,
      slug: "policy-frameworks-civic-education-reform"
    },
    {
      id: 5,
      title: "Building Inclusive Civic Learning Communities",
      excerpt: "Best practices for creating inclusive environments that welcome diverse perspectives in civic education settings.",
      author: "Dr. Amara Okafor",
      date: "November 28, 2024",
      category: "Best Practices",
      readTime: "7 min read",
      featured: false,
      slug: "building-inclusive-civic-learning-communities"
    },
    {
      id: 6,
      title: "Technology Integration in Civic Curriculum",
      excerpt: "Practical guidelines for integrating digital tools and platforms into traditional civic education programs.",
      author: "Dr. Lisa Park",
      date: "November 25, 2024",
      category: "Digital Learning",
      readTime: "9 min read",
      featured: false,
      slug: "technology-integration-civic-curriculum"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Articles & Research
          </h1>
          <p className="text-xl text-gray-700">
            Discover insights, research, and best practices from our global community of civic education experts.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                aria-label="Search articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-100 text-blue-800">{article.category}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{article.excerpt}</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/articles/${article.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Articles ({filteredArticles.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm">
                    By {article.author} • {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <Link to={`/articles/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
