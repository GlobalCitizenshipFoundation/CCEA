
export interface IndividualFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  
  // Professional Information
  currentPosition: string;
  organization: string;
  educationLevel: string;
  yearsExperience: string;
  areasOfExpertise: string;
  linkedinProfile: string;
  
  // Membership Goals
  professionalGoals: string;
  contributions: string;
  references: string;
  additionalInfo: string;
}

export interface InstitutionalFormData {
  // Organization Information
  organizationName: string;
  organizationType: string;
  foundedYear: number;
  organizationSize: string;
  website: string;
  
  // Contact Information
  primaryContact: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  
  // Experience & Goals
  civicEducationExperience: string;
  currentPrograms: string;
  membershipGoals: string;
  commitmentLetter: File | null;
  references: string;
  additionalInfo: string;
  
  // Additional fields that might be needed
  annualBudget: string;
}
