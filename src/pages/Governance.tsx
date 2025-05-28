
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, Calendar, Shield, Globe, Award } from 'lucide-react';

const Governance = () => {
  const boardMembers = [
    {
      name: "Prof. Anne-Marie Dubois",
      title: "Board Chair",
      affiliation: "Sorbonne University, France",
      tenure: "2022-2025",
      expertise: "Democratic Education Policy"
    },
    {
      name: "Dr. Robert Mitchell",
      title: "Vice Chair",
      affiliation: "Georgetown University, USA",
      tenure: "2023-2026",
      expertise: "Civic Engagement Research"
    },
    {
      name: "Prof. Yuki Tanaka",
      title: "Treasurer",
      affiliation: "University of Tokyo, Japan",
      tenure: "2022-2025",
      expertise: "Educational Finance & Sustainability"
    },
    {
      name: "Dr. Ingrid Larsson",
      title: "Secretary",
      affiliation: "University of Stockholm, Sweden",
      tenure: "2023-2026",
      expertise: "International Education Cooperation"
    },
    {
      name: "Prof. Carlos Mendoza",
      title: "Board Member",
      affiliation: "Universidad de Buenos Aires, Argentina",
      tenure: "2021-2024",
      expertise: "Latin American Civic Education"
    },
    {
      name: "Dr. Fatou Diallo",
      title: "Board Member",
      affiliation: "University of Dakar, Senegal",
      tenure: "2023-2026",
      expertise: "African Educational Development"
    }
  ];

  const committees = [
    {
      name: "Academic Standards Committee",
      chair: "Prof. Elizabeth Thompson",
      members: 8,
      mandate: "Oversees research quality, academic standards, and peer review processes for CCEA publications and resources.",
      meetingFrequency: "Quarterly"
    },
    {
      name: "Membership Committee",
      chair: "Dr. Ahmed Hassan",
      members: 6,
      mandate: "Reviews membership applications, establishes membership criteria, and oversees member engagement strategies.",
      meetingFrequency: "Bi-monthly"
    },
    {
      name: "Ethics & Compliance Committee",
      chair: "Prof. Maria Santos",
      members: 5,
      mandate: "Ensures adherence to ethical standards in research and educational practices, handles compliance matters.",
      meetingFrequency: "As needed"
    },
    {
      name: "Strategic Planning Committee",
      chair: "Dr. Klaus Weber",
      members: 7,
      mandate: "Develops long-term strategic plans, oversees organizational development and expansion initiatives.",
      meetingFrequency: "Quarterly"
    }
  ];

  const policies = [
    {
      title: "Code of Conduct",
      description: "Ethical guidelines and behavioral standards for all CCEA members and participants.",
      lastUpdated: "December 2024",
      category: "Ethics"
    },
    {
      title: "Membership Policies",
      description: "Comprehensive guidelines for membership application, renewal, and termination procedures.",
      lastUpdated: "November 2024",
      category: "Membership"
    },
    {
      title: "Research & Publication Standards",
      description: "Standards for research quality, peer review, and publication ethics within CCEA.",
      lastUpdated: "October 2024",
      category: "Academic"
    },
    {
      title: "Data Protection & Privacy Policy",
      description: "Guidelines for handling personal data and protecting member privacy in compliance with GDPR.",
      lastUpdated: "September 2024",
      category: "Legal"
    },
    {
      title: "Financial Management Policy",
      description: "Procedures for financial oversight, budget management, and transparency in financial reporting.",
      lastUpdated: "August 2024",
      category: "Financial"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Governance & Leadership
          </h1>
          <p className="text-xl text-gray-700">
            Learn about our governance structure, leadership bodies, and the policies that guide our organization.
          </p>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Governance Model</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              CCEA operates under a democratic governance model that ensures transparency, accountability, 
              and inclusive decision-making across our global network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-gray-600">Open governance processes with clear decision-making procedures and public accountability.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600">Representative leadership that reflects our diverse global membership and stakeholder community.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Commitment to high standards in all aspects of our work and organizational operations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {member.name}
                    <Badge className="bg-blue-100 text-blue-800">{member.title}</Badge>
                  </CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div>{member.affiliation}</div>
                      <div className="text-sm">Term: {member.tenure}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {member.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Standing Committees</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    {committee.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div><strong>Chair:</strong> {committee.chair}</div>
                      <div><strong>Members:</strong> {committee.members}</div>
                      <div><strong>Meets:</strong> {committee.meetingFrequency}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{committee.mandate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policies & Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Policies & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{policy.category}</Badge>
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{policy.title}</CardTitle>
                  <CardDescription>
                    Last updated: {policy.lastUpdated}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{policy.description}</p>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Download PDF
                    </button>
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                      View Online
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meeting Schedule & Information</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  Annual General Meeting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Date:</strong> March 15, 2025</p>
                  <p><strong>Location:</strong> Brussels, Belgium (hybrid format available)</p>
                  <p><strong>Purpose:</strong> Annual reporting, strategic planning, and member voting on key initiatives</p>
                  <p className="text-sm text-gray-600">All full members are entitled to vote. Associate members may attend as observers.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-6 w-6 text-green-600 mr-3" />
                  Board Meetings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Frequency:</strong> Quarterly</p>
                  <p><strong>Format:</strong> Virtual with annual in-person meeting</p>
                  <p><strong>Next Meeting:</strong> January 25, 2025</p>
                  <p className="text-sm text-gray-600">Minutes from board meetings are published within 30 days for member review.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Governance;
