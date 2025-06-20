
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Globe } from 'lucide-react'
import EditableText from './editable/EditableText'
import EditableImage from './editable/EditableImage'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <EditableImage
                  src="/lovable-uploads/9fe4bf5c-153e-4db8-a758-19dbd5b2bf54.png"
                  alt="CCEA Logo"
                  className="w-8 h-8"
                  fieldPath="logo"
                  objectId="footer"
                />
              </div>
              <div>
                <EditableText
                  text="CCEA"
                  as="span"
                  className="text-xl font-semibold"
                  fieldPath="title"
                  objectId="footer"
                />
                <EditableText
                  text="Civic and Citizenship Education Alliance"
                  as="p"
                  className="text-sm text-gray-300"
                  fieldPath="subtitle"
                  objectId="footer"
                />
              </div>
            </div>
            <EditableText
              text="Join a global network of K-12 schools, universities, and organizations committed to transforming civic and citizenship education across diverse local and national contexts."
              className="text-gray-300 mb-4 max-w-md"
              fieldPath="description"
              objectId="footer"
            />
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <EditableText
                  text="Global Network"
                  as="span"
                  fieldPath="globalNetwork"
                  objectId="footer"
                />
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <EditableText
                  text="contact@ccea.org"
                  as="span"
                  fieldPath="email"
                  objectId="footer"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <EditableText
              text="Quick Links"
              as="h3"
              className="text-lg font-semibold mb-4"
              fieldPath="quickLinks.title"
              objectId="footer"
            />
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="About Us" as="span" fieldPath="quickLinks.about" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Membership" as="span" fieldPath="quickLinks.membership" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Articles" as="span" fieldPath="quickLinks.articles" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Resources" as="span" fieldPath="quickLinks.resources" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Events" as="span" fieldPath="quickLinks.events" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Members" as="span" fieldPath="quickLinks.members" objectId="footer" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <EditableText
              text="Organization"
              as="h3"
              className="text-lg font-semibold mb-4"
              fieldPath="organization.title"
              objectId="footer"
            />
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Our Team" as="span" fieldPath="organization.team" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Governance" as="span" fieldPath="organization.governance" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/governance-charter" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Governance Charter" as="span" fieldPath="organization.charter" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/brand-guidelines" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Brand Guidelines" as="span" fieldPath="organization.brandGuidelines" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Contact" as="span" fieldPath="organization.contact" objectId="footer" />
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-white transition-colors">
                  <EditableText text="Impressum" as="span" fieldPath="organization.impressum" objectId="footer" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <EditableText
            text="© 2024 Civic and Citizenship Education Alliance. All rights reserved."
            as="p"
            className="text-gray-400 text-sm"
            fieldPath="copyright"
            objectId="footer"
          />
          <EditableText
            text="An initiative of the <b>Global Citizenship Foundation</b>."
            as="p"
            className="text-gray-400 text-sm mt-4 md:mt-0"
            fieldPath="initiative"
            objectId="footer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
