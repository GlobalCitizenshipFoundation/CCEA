
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndividualMembershipForm from '@/components/forms/IndividualMembershipForm';

const MembershipApplicationIndividual = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/membership" className="hover:text-blue-600">Membership</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Associate Membership Application</span>
          </nav>

          <IndividualMembershipForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipApplicationIndividual;
