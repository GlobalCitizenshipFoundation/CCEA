
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, ExternalLink, BookOpen, FileText, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Curriculum', 'Research', 'Tools', 'Videos', 'Case Studies', 'Policy'];

  const resources = [
    {
      id: 1,
      title: "Civic Education Curriculum Framework",
      description: "Comprehensive guide for developing civic education curricula across different educational levels and contexts.",
      category: "Curriculum",
      type: "PDF Guide",
      downloadCount: 1250,
      featured: true,
      icon: BookOpen
    },
    {
      id: 2,
      title: "Digital Civic Engagement Tools",
      description: "Collection of digital tools and platforms for enhancing civic participation and democratic engagement.",
      category: "Tools",
      type: "Toolkit",
      downloadCount: 890,
      featured: true,
      icon: Users
    },
    {
      id: 3,
      title: "Youth Democracy Research Report 2024",
      description: "Latest research findings on youth engagement in democratic processes across EU member states.",
      category: "Research",
      type: "Research Paper",
      downloadCount: 672,
      featured: false,
      icon: FileText
    },
    {
      id: 4,
      title: "Best Practices in Civic Education",
      description: "Case studies and examples of successful civic education implementations from around the world.",
      category: "Case Studies",
      type: "Case Study",
      downloadCount: 445,
      featured: false,
      icon: BookOpen
    },
    {
      id: 5,
      title: "Policy Recommendations for Civic Learning",
      description: "Evidence-based policy recommendations for strengthening civic education in national curricula.",
      category: "Policy",
      type: "Policy Brief",
      downloadCount: 334,
      featured: false,
      icon: FileText
    },
    {
      id: 6,
      title: "Interactive Civic Education Videos",
      description: "Educational video series covering key concepts in citizenship and democratic participation.",
      category: "Videos",
      type: "Video Series",
      downloadCount: 1100,
      featured: false,
      icon: Video
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = filteredResources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resources & Materials
          </h1>
          <p className="text-xl text-gray-700">
            Access comprehensive resources, tools, and materials to enhance your civic education programs.
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
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
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
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-100 text-green-800">{resource.category}</Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center">
                      <resource.icon className="h-6 w-6 mr-3 text-blue-600" />
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <span>{resource.type}</span>
                      <span>{resource.downloadCount} downloads</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link to={`/resources/${resource.id}`} className="flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Access Resource
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Resources ({filteredResources.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{resource.category}</Badge>
                    <span className="text-sm text-gray-500">{resource.downloadCount} downloads</span>
                  </div>
                  <CardTitle className="text-lg flex items-center">
                    <resource.icon className="h-5 w-5 mr-2 text-blue-600" />
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {resource.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link to={`/resources/${resource.id}`} className="flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Access Resource
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
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

export default Resources;
