
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
  ScrollText
} from 'lucide-react';

export const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  {
    name: 'Members & Membership',
    icon: UserCheck,
    dropdown: 'membership',
    items: [
      { name: 'Membership Information', href: '/membership', icon: UserCheck },
      { name: 'All Members', href: '/members', icon: Users }
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
    name: 'Team & Governance',
    icon: Building,
    dropdown: 'team',
    items: [
      { name: 'Our Team', href: '/team', icon: Building },
      { name: 'Governance', href: '/governance', icon: Shield },
      { name: 'Governance Charter', href: '/governance-charter', icon: ScrollText }
    ]
  },
  { name: 'Contact', href: '/contact', icon: Mail }
];
