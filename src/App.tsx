
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { lazy, Suspense } from 'react';

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Articles = lazy(() => import('./pages/Articles'));
const Events = lazy(() => import('./pages/Events'));
const Resources = lazy(() => import('./pages/Resources'));
const Members = lazy(() => import('./pages/Members'));
const Team = lazy(() => import('./pages/Team'));
const Membership = lazy(() => import('./pages/Membership'));
const MembershipApplicationIndividual = lazy(() => import('./pages/MembershipApplicationIndividual'));
const MembershipApplicationInstitutional = lazy(() => import('./pages/MembershipApplicationInstitutional'));
const EventRegistration = lazy(() => import('./pages/EventRegistration'));
const Governance = lazy(() => import('./pages/Governance'));
const GovernanceCharter = lazy(() => import('./pages/GovernanceCharter'));
const BrandGuidelines = lazy(() => import('./pages/BrandGuidelines'));
const Impressum = lazy(() => import('./pages/Impressum'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Create a query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<Articles />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<Events />} />
              <Route path="/event-registration/:slug" element={<EventRegistration />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<Resources />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:slug" element={<Members />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:slug" element={<Team />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/membership/individual" element={<MembershipApplicationIndividual />} />
              <Route path="/membership/institutional" element={<MembershipApplicationInstitutional />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/governance/:slug" element={<Governance />} />
              <Route path="/governance-charter" element={<GovernanceCharter />} />
              <Route path="/brand-guidelines" element={<BrandGuidelines />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
