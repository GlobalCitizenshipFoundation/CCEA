
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadership = [
    {
      id: 1,
      name: "Dr. Maria Elena Rodriguez",
      title: "Executive Director",
      location: "Brussels, Belgium",
      bio: "Dr. Rodriguez brings over 20 years of experience in international education and civic engagement. She previously served as Director of Global Citizenship Programs at the European Commission.",
      expertise: ["Global Citizenship Education", "Policy Development", "International Partnerships"],
      education: "PhD in Educational Policy, University of Oxford",
      image: "MER"
    },
    {
      id: 2,
      name: "Prof. James Chen",
      title: "Director of Research & Innovation",
      location: "Geneva, Switzerland",
      bio: "Professor Chen is a leading researcher in civic education methodologies with over 15 years of experience in educational innovation and democratic learning frameworks.",
      expertise: ["Educational Research", "Democratic Learning", "Innovation in Civic Education"],
      education: "PhD in Education, Stanford University",
      image: "JC"
    },
    {
      id: 3,
      name: "Dr. Amara Okafor",
      title: "Director of Member Engagement",
      location: "Vienna, Austria",
      bio: "Dr. Okafor specializes in building inclusive educational communities and has extensive experience in international development and cross-cultural education programs.",
      expertise: ["Community Building", "Inclusive Education", "International Development"],
      education: "PhD in International Education, University of Cambridge",
      image: "AO"
    }
  ];

  const staff = [
    {
      id: 4,
      name: "Sophie Laurent",
      title: "Program Coordinator",
      location: "Paris, France",
      department: "Programs & Events",
      image: "SL"
    },
    {
      id: 5,
      name: "Dr. Ahmed Hassan",
      title: "Research Associate",
      location: "Cairo, Egypt",
      department: "Research & Innovation",
      image: "AH"
    },
    {
      id: 6,
      name: "Lisa Park",
      title: "Communications Manager",
      location: "Seoul, South Korea",
      department: "Communications",
      image: "LP"
    },
    {
      id: 7,
      name: "Miguel Santos",
      title: "Regional Coordinator - Latin America",
      location: "São Paulo, Brazil",
      department: "Regional Coordination",
      image: "MS"
    },
    {
      id: 8,
      name: "Dr. Priya Sharma",
      title: "Digital Learning Specialist",
      location: "Mumbai, India",
      department: "Digital Innovation",
      image: "PS"
    },
    {
      id: 9,
      name: "Thomas Anderson",
      title: "Operations Manager",
      location: "Copenhagen, Denmark",
      department: "Operations",
      image: "TA"
    }
  ];

  const advisors = [
    {
      id: 10,
      name: "Prof. Elizabeth Thompson",
      title: "Senior Advisor",
      affiliation: "Harvard Graduate School of Education",
      expertise: "Democratic Education Theory"
    },
    {
      id: 11,
      name: "Dr. Klaus Weber",
      title: "Policy Advisor",
      affiliation: "European Parliament",
      expertise: "Education Policy & Governance"
    },
    {
      id: 12,
      name: "Prof. Fatima Al-Rashid",
      title: "Research Advisor",
      affiliation: "American University of Beirut",
      expertise: "Civic Education in Diverse Contexts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-700">
            Meet the dedicated professionals working to advance civic education worldwide.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{member.image}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>
                    <div className="text-blue-600 font-medium">{member.title}</div>
                    <div className="flex items-center justify-center mt-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Education:</strong> {member.education}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Link to={`/team/${member.id}`} className="flex items-center">
                        View Profile
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-green-600">{member.image}</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>
                    <div className="text-green-600 font-medium">{member.title}</div>
                    <div className="text-sm text-gray-600">{member.department}</div>
                    <div className="flex items-center justify-center mt-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Link to={`/team/${member.id}`}>
                        Profile
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <Card key={advisor.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{advisor.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{advisor.affiliation}</p>
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {advisor.expertise}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of a global movement transforming civic education. We're always looking for passionate individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
