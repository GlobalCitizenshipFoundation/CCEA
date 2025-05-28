
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Users, MapPin, Building, User, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const memberTypes = ['All', 'Full Member', 'Associate Member'];
  const regions = ['All', 'Europe', 'North America', 'Asia-Pacific', 'Africa', 'Latin America'];

  const members = [
    {
      id: 1,
      name: "European Democracy Institute",
      type: "Full Member",
      category: "University",
      country: "Belgium",
      region: "Europe",
      memberSince: "2020",
      description: "Leading research institution focused on democratic innovation and civic education across Europe.",
      students: 15000,
      programs: 8,
      logo: "EDI",
      featured: true
    },
    {
      id: 2,
      name: "Global Citizenship Foundation",
      type: "Full Member",
      category: "NGO",
      country: "United States",
      region: "North America",
      memberSince: "2019",
      description: "International organization promoting global citizenship education and democratic participation.",
      students: 50000,
      programs: 15,
      logo: "GCF",
      featured: true
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      type: "Associate Member",
      category: "Individual",
      country: "Canada",
      region: "North America",
      memberSince: "2021",
      description: "Professor of Civic Education at University of Toronto, specializing in digital civic engagement.",
      specialization: "Digital Civic Engagement",
      logo: "SJ",
      featured: false
    },
    {
      id: 4,
      name: "Vienna Democracy School",
      type: "Full Member",
      category: "K-12 School",
      country: "Austria",
      region: "Europe",
      memberSince: "2022",
      description: "Innovative K-12 institution integrating democratic practices and civic education throughout curriculum.",
      students: 1200,
      programs: 4,
      logo: "VDS",
      featured: false
    },
    {
      id: 5,
      name: "Prof. Marco Rossi",
      type: "Associate Member",
      category: "Individual",
      country: "Italy",
      region: "Europe",
      memberSince: "2020",
      description: "Research professor specializing in European citizenship education and cross-cultural democratic studies.",
      specialization: "European Citizenship Education",
      logo: "MR",
      featured: false
    },
    {
      id: 6,
      name: "Pacific Civic Learning Network",
      type: "Full Member",
      category: "Network",
      country: "Australia",
      region: "Asia-Pacific",
      memberSince: "2021",
      description: "Regional network connecting educational institutions across the Asia-Pacific region.",
      students: 25000,
      programs: 12,
      logo: "PCLN",
      featured: false
    },
    {
      id: 7,
      name: "African Democratic Education Alliance",
      type: "Full Member",
      category: "NGO",
      country: "South Africa",
      region: "Africa",
      memberSince: "2023",
      description: "Pan-African organization working to strengthen democratic education across the continent.",
      students: 30000,
      programs: 10,
      logo: "ADEA",
      featured: false
    },
    {
      id: 8,
      name: "Dr. Elena Müller",
      type: "Associate Member",
      category: "Individual",
      country: "Germany",
      region: "Europe",
      memberSince: "2022",
      description: "Education policy researcher focusing on youth engagement and democratic participation.",
      specialization: "Youth Democratic Participation",
      logo: "EM",
      featured: false
    }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || member.type === selectedType;
    const matchesRegion = selectedRegion === 'All' || member.region === selectedRegion;
    return matchesSearch && matchesType && matchesRegion;
  });

  const featuredMembers = filteredMembers.filter(member => member.featured);
  const regularMembers = filteredMembers.filter(member => !member.featured);

  const stats = {
    totalMembers: members.length,
    fullMembers: members.filter(m => m.type === 'Full Member').length,
    associateMembers: members.filter(m => m.type === 'Associate Member').length,
    countries: [...new Set(members.map(m => m.country))].length
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Members
          </h1>
          <p className="text-xl text-gray-700">
            Meet the diverse community of institutions and educators driving civic education innovation worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalMembers}</div>
              <div className="text-gray-600">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.fullMembers}</div>
              <div className="text-gray-600">Full Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.associateMembers}</div>
              <div className="text-gray-600">Associate Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.countries}</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
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
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {memberTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {type}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRegion(region)}
                  className={selectedRegion === region ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      {featuredMembers.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Members</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-100 text-blue-800">{member.type}</Badge>
                        <Badge variant="outline">{member.category}</Badge>
                      </div>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="font-bold text-blue-600">{member.logo}</span>
                      </div>
                      {member.name}
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.country}
                      </div>
                      <span>Member since {member.memberSince}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{member.description}</p>
                    {member.students && (
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {member.students.toLocaleString()} students
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {member.programs} programs
                        </div>
                      </div>
                    )}
                    {member.specialization && (
                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Specialization:</strong> {member.specialization}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Link to={`/members/${member.id}`}>
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Members ({filteredMembers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={member.type === 'Full Member' ? 'border-blue-300 text-blue-700' : 'border-green-300 text-green-700'}>
                      {member.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">{member.category}</Badge>
                  </div>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="font-bold text-gray-600 text-sm">{member.logo}</span>
                    </div>
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.country} • Member since {member.memberSince}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{member.description}</p>
                  {member.students && (
                    <div className="text-sm text-gray-600 mb-3">
                      {member.students.toLocaleString()} students • {member.programs} programs
                    </div>
                  )}
                  {member.specialization && (
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>Focus:</strong> {member.specialization}
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full">
                    <Link to={`/members/${member.id}`}>
                      View Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No members found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(''); setSelectedType('All'); setSelectedRegion('All');}}
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

export default Members;
