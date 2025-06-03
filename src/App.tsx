import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Team from "./pages/Team";
import Governance from "./pages/Governance";
import GovernanceCharter from "./pages/GovernanceCharter";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";
import BrandGuidelines from '@/pages/BrandGuidelines';

// Template components for individual pages
import ArticleTemplate from "./components/ArticleTemplate";
import ResourceTemplate from "./components/ResourceTemplate";
import EventTemplate from "./components/EventTemplate";
import MemberTemplate from "./components/MemberTemplate";
import TeamMemberTemplate from "./components/TeamMemberTemplate";

const queryClient = new QueryClient();

import MembershipApplicationInstitutional from './pages/MembershipApplicationInstitutional';
import MembershipApplicationIndividual from './pages/MembershipApplicationIndividual';
import EventRegistration from './pages/EventRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/apply/institutional" element={<MembershipApplicationInstitutional />} />
          <Route path="/membership/apply/individual" element={<MembershipApplicationIndividual />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={
            <ArticleTemplate article={{
              title: "Sample Article Title",
              excerpt: "This is a sample article excerpt that demonstrates the Harvard Business Review-style layout with comprehensive metadata and social sharing functionality.",
              author: {
                name: "Dr. Sarah Johnson",
                title: "Director of Civic Education Research",
                profileImage: "/placeholder.svg",
                bio: "Dr. Johnson is a leading expert in civic education with over 15 years of experience in educational policy and democratic learning frameworks."
              },
              coAuthors: [
                { name: "Prof. Maria Rodriguez", title: "Senior Researcher", profileImage: "/placeholder.svg" }
              ],
              publishDate: "2024-12-15",
              lastModified: "2024-12-20",
              categories: ["Digital Learning", "Research"],
              tags: ["civic education", "digital tools", "innovation"],
              readTime: 8,
              featuredImage: "/placeholder.svg",
              content: "<p>This is sample article content that would be rendered as HTML. It includes comprehensive information about civic education innovations and best practices.</p><h2>Key Findings</h2><p>Our research demonstrates significant improvements in student engagement when digital tools are properly integrated into civic education curricula.</p>",
              relatedArticles: [
                {
                  title: "Future of Democratic Education",
                  excerpt: "Exploring trends in democratic education",
                  slug: "future-democratic-education",
                  featuredImage: "/placeholder.svg",
                  author: { name: "Prof. Chen" },
                  publishDate: "2024-12-10",
                  readTime: 6
                }
              ],
              tableOfContents: true,
              socialSharing: true
            }} />
          } />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={
            <ResourceTemplate resource={{
              title: "Civic Education Curriculum Framework",
              description: "A comprehensive guide for developing civic education curricula across different educational levels and cultural contexts, featuring best practices and implementation strategies.",
              resourceType: "guide",
              category: "Curriculum Development",
              subcategory: "Framework",
              accessType: "free",
              fileInfo: {
                fileType: "PDF",
                fileSize: "2.5 MB",
                downloadUrl: "/sample-resource.pdf",
                previewUrl: "/sample-preview.pdf"
              },
              downloadCount: 1250,
              content: "<p>This comprehensive framework provides educators and institutions with practical guidance for developing effective civic education curricula.</p><h2>Key Components</h2><ul><li>Learning objectives and outcomes</li><li>Assessment strategies</li><li>Implementation timeline</li><li>Resource requirements</li></ul>",
              lastUpdated: "2024-12-15",
              thumbnail: "/placeholder.svg",
              author: {
                name: "Dr. Elena Müller",
                title: "Curriculum Development Specialist",
                profileImage: "/placeholder.svg"
              },
              contributors: [
                { name: "Prof. James Chen", title: "Research Director" },
                { name: "Maria Santos", title: "Education Consultant" }
              ],
              license: {
                type: "Creative Commons BY-SA 4.0",
                url: "https://creativecommons.org/licenses/by-sa/4.0/",
                attribution: "Attribution required when sharing or adapting"
              },
              relatedResources: [
                {
                  title: "Assessment Tools for Civic Learning",
                  resourceType: "toolkit",
                  slug: "assessment-tools",
                  thumbnail: "/placeholder.svg"
                }
              ],
              featured: true
            }} />
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={
            <EventTemplate event={{
              title: "Annual CCEA Conference 2025: Innovating Civic Education for the Digital Age",
              description: "Join educators, policymakers, and researchers from around the world for our flagship annual conference exploring innovations in civic education and democratic learning.",
              eventType: "conference",
              startDate: "2025-03-15T09:00:00Z",
              endDate: "2025-03-17T17:00:00Z",
              timezone: "Europe/Brussels",
              location: {
                venue: "Brussels Convention Centre",
                address: "Place Eugène Flagey 18",
                city: "Brussels",
                country: "Belgium",
                coordinates: { lat: 50.8503, lng: 4.3517 }
              },
              isVirtual: false,
              registrationInfo: {
                registrationUrl: "https://conference.ccea.org/register",
                registrationDeadline: "2025-03-01",
                earlyBirdDeadline: "2025-02-15",
                fees: {
                  member: 350,
                  regular: 450,
                  student: 150,
                  earlyBird: 300
                }
              },
              capacity: 500,
              registered: 342,
              speakers: [
                {
                  name: "Dr. Maria Rodriguez",
                  title: "Executive Director, CCEA",
                  organization: "Civic and Citizenship Education Alliance",
                  bio: "Leading expert in international civic education policy with over 20 years of experience.",
                  profileImage: "/placeholder.svg"
                },
                {
                  name: "Prof. James Chen",
                  title: "Director of Research",
                  organization: "University of Global Education",
                  bio: "Renowned researcher in digital learning methodologies and democratic education.",
                  profileImage: "/placeholder.svg"
                }
              ],
              organizers: [
                {
                  name: "Sophie Laurent",
                  title: "Conference Coordinator",
                  email: "sophie.laurent@ccea.org"
                }
              ],
              agenda: "<h3>Day 1: Opening & Keynotes</h3><p>9:00 AM - Welcome & Opening Ceremony</p><p>10:00 AM - Keynote: The Future of Civic Education</p><h3>Day 2: Workshops & Sessions</h3><p>Full day of interactive workshops and research presentations</p><h3>Day 3: Policy & Implementation</h3><p>Focus on policy frameworks and practical implementation strategies</p>",
              requirements: "<p>All participants should bring:</p><ul><li>Valid ID for registration</li><li>Laptop or tablet for interactive sessions</li><li>Business cards for networking</li></ul>",
              featuredImage: "/placeholder.svg",
              content: "<p>This year's conference brings together the global civic education community to explore cutting-edge innovations in democratic learning. Over three days, participants will engage with leading researchers, practitioners, and policymakers to shape the future of civic education.</p><h2>Conference Highlights</h2><ul><li>50+ expert speakers and panelists</li><li>Interactive workshops and hands-on sessions</li><li>Networking opportunities with global leaders</li><li>Exhibition of latest educational technologies</li></ul>",
              materials: [
                {
                  title: "Conference Program",
                  type: "PDF",
                  url: "/conference-program.pdf",
                  description: "Complete schedule and speaker information"
                },
                {
                  title: "Participant Handbook",
                  type: "PDF",
                  url: "/participant-handbook.pdf",
                  description: "Essential information for attendees"
                }
              ],
              status: "upcoming"
            }} />
          } />
          <Route path="/events/:id/register" element={<EventRegistration />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:slug" element={
            <MemberTemplate member={{
              name: "European Institute of Democracy",
              memberType: "organization",
              membershipLevel: "full",
              title: "Leading Research Institution",
              logo: "/placeholder.svg",
              description: "A premier research institution dedicated to advancing democratic education and civic engagement across Europe and beyond.",
              bio: "<p>The European Institute of Democracy has been at the forefront of civic education research and implementation for over two decades. Our work spans across multiple countries and cultural contexts, developing innovative approaches to democratic learning.</p><h3>Our Mission</h3><p>We strive to strengthen democratic societies through evidence-based civic education programs and policy advocacy.</p>",
              location: {
                city: "Brussels",
                country: "Belgium",
                region: "Europe"
              },
              contactInfo: {
                email: "info@europeandemocracy.org",
                phone: "+32 2 123 4567",
                website: "https://www.europeandemocracy.org"
              },
              socialLinks: {
                linkedin: "https://linkedin.com/company/european-institute-democracy",
                twitter: "https://twitter.com/EuroDemo",
                facebook: "https://facebook.com/EuropeanInstituteOfDemocracy"
              },
              memberSince: "2019-03-15",
              expertise: [
                "Democratic Education Research",
                "Policy Development",
                "Curriculum Design",
                "Teacher Training",
                "International Cooperation"
              ],
              achievements: [
                "Developed civic education curricula used in 12 European countries",
                "Published 50+ peer-reviewed research papers",
                "Trained over 5,000 educators through professional development programs",
                "Received EU Excellence Award for Educational Innovation (2023)"
              ],
              contributions: "<p>As a founding member of CCEA, the European Institute of Democracy has contributed significantly to our alliance's research agenda and policy advocacy efforts. They have hosted three international conferences and co-authored our flagship research report on digital civic education.</p>",
              featured: true,
              publicProfile: true
            }} />
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={
            <TeamMemberTemplate teamMember={{
              name: "Dr. Maria Elena Rodriguez",
              title: "Executive Director",
              department: "Leadership",
              location: "Brussels, Belgium",
              profileImage: "/placeholder.svg",
              photoGallery: ["/placeholder.svg", "/placeholder.svg"],
              bio: "<p>Dr. Rodriguez brings over 20 years of experience in international education and civic engagement to her role as Executive Director of CCEA. She previously served as Director of Global Citizenship Programs at the European Commission, where she led initiatives to strengthen democratic education across EU member states.</p><h3>Leadership Philosophy</h3><p>Dr. Rodriguez believes in the transformative power of education to build more inclusive and democratic societies. Her work focuses on bridging research and practice to create meaningful change in civic education globally.</p>",
              shortBio: "Leading expert in international civic education with 20+ years of experience in policy development and educational innovation.",
              expertise: [
                "Global Citizenship Education",
                "Policy Development",
                "International Partnerships",
                "Educational Leadership",
                "Democratic Learning Frameworks"
              ],
              education: [
                {
                  degree: "Ph.D. in Educational Policy",
                  institution: "University of Oxford",
                  year: "2003",
                  field: "International Education"
                },
                {
                  degree: "M.A. in Political Science",
                  institution: "Sciences Po Paris",
                  year: "1999",
                  field: "European Studies"
                }
              ],
              publications: [
                {
                  title: "Global Frameworks for Civic Education: A Comparative Analysis",
                  type: "Journal Article",
                  year: "2024",
                  url: "https://example.com/publication1"
                },
                {
                  title: "Building Democratic Societies Through Education",
                  type: "Book",
                  year: "2023",
                  url: "https://example.com/book1"
                }
              ],
              awards: [
                {
                  title: "UNESCO Prize for Education",
                  organization: "UNESCO",
                  year: "2023"
                },
                {
                  title: "European Education Leadership Award",
                  organization: "European Education Foundation",
                  year: "2022"
                }
              ],
              socialLinks: {
                linkedin: "https://linkedin.com/in/maria-rodriguez",
                twitter: "https://twitter.com/mariaerodr",
                researchGate: "https://researchgate.net/profile/maria-rodriguez",
                googleScholar: "https://scholar.google.com/citations?user=example"
              },
              contactInfo: {
                email: "maria.rodriguez@ccea.org",
                phone: "+32 2 123 4567",
                officeHours: "Tuesdays and Thursdays, 2:00-4:00 PM CET"
              },
              languages: ["English", "Spanish", "French", "Portuguese"],
              featured: true,
              lastUpdated: "2024-12-15"
            }} />
          } />
          <Route path="/governance" element={<Governance />} />
          <Route path="/governance-charter" element={<GovernanceCharter />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
