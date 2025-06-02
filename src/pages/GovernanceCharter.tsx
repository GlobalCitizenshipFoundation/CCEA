import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollText, Users, Shield, FileText, Scale, Award, Building, Vote, Gavel, Eye, Clock } from 'lucide-react';

const GovernanceCharter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CCEA Governance Charter
          </h1>
          <div className="flex justify-center space-x-4 mb-6">
            <Badge className="bg-blue-100 text-blue-800">Adopted: TBA</Badge>
            <Badge className="bg-green-100 text-green-800">Effective: Post Adoption</Badge>
          </div>
          <p className="text-xl text-gray-700">
            The foundational document governing the structure, processes, and principles of the 
            Civic and Citizenship Education Alliance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Purpose and Scope */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              I. Purpose and Scope
            </h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  The Civic and Citizenship Education Alliance (CCEA) is an international consortium of K-12 schools, 
                  universities, organizations, and civic and citizenship education leaders convened by the Global Citizenship 
                  Foundation (GCF) to strengthen civic and citizenship education as a vital response to today's democratic, 
                  social, and global challenges.
                </p>
                <p className="text-gray-700">
                  This Governance Charter outlines the structures, processes, and principles that ensure CCEA remains 
                  collaborative, representative, and strategically aligned with its mission and mandate of supporting 
                  and advancing equitable, inclusive, and context-responsive civic learning.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    Member-Driven
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Governance, strategic direction, and major decisions reflect the collective expertise and priorities of our members.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    Semi-Autonomous
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">CCEA operates with operational independence, while GCF provides foundational support, brand stewardship, and mission oversight.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="h-6 w-6 text-purple-600 mr-3" />
                    Transparency & Accountability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">All governance processes, decisions, and financial reports are open to members, subject to necessary confidentiality constraints.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Scale className="h-6 w-6 text-orange-600 mr-3" />
                    Democratic Representation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Leadership is selected through regular, fair elections, ensuring diverse institutional and individual voices guide CCEA's future.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Governing Bodies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Building className="h-8 w-8 text-blue-600 mr-3" />
              II. Governing Bodies
            </h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">A. General Assembly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Members:</h4>
                    <p className="text-gray-700">All institutional and individual members in good standing.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Powers:</h4>
                    <p className="text-gray-700">Ratifies amendments to this Charter; elects Board members; approves annual budget and major strategic initiatives.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Meetings:</h4>
                    <p className="text-gray-700">Annual General Assembly (AGA) held virtually or in person; special assemblies may be convened by the Board or petition of 20% of members.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">B. Governing Board</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Composition (11 seats):</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Convenor (Voting, ex officio):</strong> A GCF representative responsible for mission alignment.</li>
                      <li><strong>Council for GCED Representative (Voting, ex officio):</strong> Ensuring alignment with global GCED standards.</li>
                      <li><strong>Institutional Representatives (6 seats):</strong> Two each elected by K–12 schools, universities, and CSO/NGOs respectively.</li>
                      <li><strong>Individual Representatives (3 seats):</strong> Elected by associate members (educators, researchers, youth leaders, policymakers).</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Majority Requirement:</h4>
                    <p className="text-gray-700">Institutional representatives hold a majority of Board seats to preserve member-driven governance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Term Length:</h4>
                    <p className="text-gray-700">Two-year staggered terms; maximum of two consecutive terms per member.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                    <p className="text-gray-700">Strategic oversight; approval of budgets, policies, recognition frameworks; appointment of the Executive Director.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">C. Executive Committee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Membership:</h4>
                    <p className="text-gray-700">Convenor + two Board-appointed members.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Role:</h4>
                    <p className="text-gray-700">Expedite urgent decisions between full Board meetings; report actions to the Board at the next regular meeting.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                    <p className="text-gray-700">Cannot amend this Charter, change Board composition, or veto previous Board decisions.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">D. Advisory Council</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Membership:</h4>
                    <p className="text-gray-700">Up to 12 experts (non-voting) drawn from academia, civil society, government, and youth networks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Role:</h4>
                    <p className="text-gray-700">Provide thematic expertise, review program frameworks, and advise on thought-leadership initiatives.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Elections & Appointments */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Vote className="h-8 w-8 text-blue-600 mr-3" />
              III. Elections & Appointments
            </h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">A. Nomination Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Call for Nominations:</h4>
                    <p className="text-gray-700">Issued 120 days before each AGA.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-gray-700">Institutional members in good standing for ≥1 year may nominate candidates for Institutional Representative seats; individual members in good standing for ≥6 months may self-nominate for Individual Representative and Committee positions.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nomination Committee:</h4>
                    <p className="text-gray-700">A standing committee of five members (appointed by the Board annually) vets candidate eligibility and ensures geographic, sectoral, and gender balance.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">B. Voting Procedure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Balloting:</h4>
                    <p className="text-gray-700">Conducted electronically over a two-week period preceding the AGA.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Threshold:</h4>
                    <p className="text-gray-700">Candidates receiving the highest votes fill open seats; ties are resolved by instant-runoff among tied candidates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-gray-700">Certified by an independent Elections Officer and announced at the AGA.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">C. Vacancy & Removal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vacancies:</h4>
                    <p className="text-gray-700">Filled by runner-up candidate from the previous election or, if none, by Board appointment until the next election cycle.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Removal:</h4>
                    <p className="text-gray-700">A Board member may be removed for ethical misconduct or non-participation (failing three consecutive meetings without apology) by a two-thirds Board vote.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Roles & Responsibilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              IV. Roles & Responsibilities
            </h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">A. Convenor (GCF Representative)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">• Ensures alignment with founding mission and SDG 4.7.</p>
                  <p className="text-gray-700">• Holds a single-purpose veto ("directional veto") over Board decisions that conflict with CCEA's mission or the GCF charter—must provide written rationale.</p>
                  <p className="text-gray-700">• The Convenor may delegate responsibilities, including coordination and administrative support, to a designated staff member within the GCF to ensure continuity and operational efficiency.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">B. Governing Board</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">• Sets strategic priorities and approves major programs (e.g., recognition frameworks, membership models).</p>
                  <p className="text-gray-700">• Reviews and approves annual budgets and financial audits.</p>
                  <p className="text-gray-700">• Appoints and evaluates the Executive Director.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">C. Secretary-General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Appointment:</h4>
                    <p className="text-gray-700">By the Board on recommendation of a Search Committee.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                    <p className="text-gray-700">Day-to-day management, staff supervision, program execution, and reporting to the Board.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">D. Advisory Council</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Contributes specialized advice on content pillars, research, and external partnerships.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Decision-Making & Voting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Gavel className="h-8 w-8 text-blue-600 mr-3" />
              V. Decision-Making & Voting
            </h2>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quorum Requirements</h3>
                    <p className="text-gray-700 mb-4">At least 6 of 11 Board seats must be present (virtually or in person) to conduct business.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Decisions</h3>
                    <p className="text-gray-700">Require a simple majority of votes cast from those present.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Charter Amendments</h3>
                    <p className="text-gray-700 mb-4">Require two-thirds majority of full Board plus ratification by a simple majority of the General Assembly.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Convenor Veto</h3>
                    <p className="text-gray-700">Can be exercised once per fiscal year; overridden only by two-thirds Board plus General Assembly approval.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Committees */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              VI. Committees
            </h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Standing Committees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Finance & Audit</h4>
                      <p className="text-gray-700 text-sm">Oversees budgeting, financial controls, and audit process.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Membership & Outreach</h4>
                      <p className="text-gray-700 text-sm">Guides member recruitment, retention, and engagement.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recognition & Programs</h4>
                      <p className="text-gray-700 text-sm">Develops award criteria and reviews institutional recognition applications.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Governance & Ethics</h4>
                      <p className="text-gray-700 text-sm">Monitors compliance with this Charter, handles conflicts of interest, and oversees elections.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Ad Hoc Committees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Formed by the Board to address specific strategic initiatives (e.g., technology, research partnerships).</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Transparency & Reporting */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              VII. Transparency & Reporting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Annual Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">Published on the CCEA website, includes financial statements, program outcomes, and election results.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Meeting Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">Summaries (excluding confidential deliberations) made available to members within two weeks.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Member Surveys</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">Conducted biennially to inform strategic planning and board elections.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Amendment & Review */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              VIII. Amendment & Review
            </h2>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Cycle</h3>
                    <p className="text-gray-700">This Charter is reviewed every three years by the Governance & Ethics Committee.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Amendment Process</h3>
                    <p className="text-gray-700">Proposals may originate from any member of the Board or 10% of General Assembly members; final adoption follows the procedure in Section V.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CCEA Identity and Identity Protection */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              IX. CCEA Identity and Identity Protection
            </h2>

            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  The Civic and Citizenship Education Alliance (CCEA) name, acronym, visual identity, and all related branding elements—including logos, marks, and associated digital assets—are the intellectual property of the Global Citizenship Foundation (GCF) and are held in trust for the benefit of the Alliance.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    CCEA's identity reflects its purpose as a collaborative, mission-driven entity. Use of the CCEA name or branding by member organizations or third parties must align with established guidelines and values of the Alliance. Unauthorized, misleading, or inconsistent use is prohibited.
                  </p>
                  <p className="text-gray-700">
                    The Governing Board, in coordination with the GCF, will issue and periodically update brand use guidelines. Members in good standing may display the CCEA Membership Badge in accordance with these guidelines. Any breach may result in review and possible suspension of membership privileges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Member Engagement & Incentives */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              X. Member Engagement & Incentives
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  To encourage active participation and cultivate future alliance leaders, CCEA offers:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Special and Priority Access:</h4>
                    <p className="text-gray-700">Alliance Members who serve on standing committees receive priority consideration for professional development opportunities, and special invitations to exclusive activities and events where applicable.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Governance Pathways:</h4>
                    <p className="text-gray-700">Committee members with exemplary contributions (two cycles of committee service) become eligible to stand for Governing Board elections.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recognition & Badging:</h4>
                    <p className="text-gray-700">Contributors earn digital badges and public acknowledgment in annual reports, highlighting their role in shaping CCEA's direction.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mentorship & Networking:</h4>
                    <p className="text-gray-700">Committee volunteers are paired with Board mentors and gain invitations to exclusive strategy workshops.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Charter Implementation */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Charter Implementation</h3>
              <p className="text-blue-800 mb-6">
                This Charter represents our commitment to democratic governance and member-driven leadership. 
                For questions about governance procedures or Charter interpretation, please contact the CCEA Secretariat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Full Charter (PDF)
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Contact Secretariat
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

export default GovernanceCharter;
