
import { 
  Home, 
  Info, 
  Users, 
  FileText, 
  Calendar, 
  BookOpen, 
  Mail, 
  UserCheck,
  Building,
  Shield,
  ScrollText,
  Palette,
  Scale
} from 'lucide-react';

export const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'Membership',
    icon: UserCheck,
    dropdown: 'membership',
    items: [
      { name: 'Membership Information', href: '/membership', icon: UserCheck },
      { name: 'All Members', href: '/members', icon: Users },
      { name: 'Using CCEA Brand by Members', href: '/brand-guidelines', icon: Palette }
    ]
  },
  {
    name: 'Articles & Resources',
    icon: FileText,
    dropdown: 'content',
    items: [
      { name: 'Articles', href: '/articles', icon: FileText },
      { name: 'Resources', href: '/resources', icon: BookOpen }
    ]
  },
  { name: 'Events', href: '/events', icon: Calendar },
  {
    name: 'CCEA Governance',
    icon: Scale,
    dropdown: 'governance',
    items: [
      {
        name: 'About CCEA',
        items: [
          { name: 'About Us', href: '/about', icon: Info },
          { name: 'Our Team', href: '/team', icon: Building },
          { name: 'Governance', href: '/governance', icon: Shield }
        ]
      },
      {
        name: 'About Governance',
        items: [
          { name: 'Governance Charter', href: '/governance-charter', icon: ScrollText },
          { name: 'Brand Guidelines', href: '/brand-guidelines', icon: Palette }
        ]
      }
    ]
  },
  { name: 'Contact', href: '/contact', icon: Mail }
];
