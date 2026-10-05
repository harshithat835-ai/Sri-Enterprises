export type DivisionType = 'all' | 'adhesives' | 'training';

export interface AdhesiveProduct {
  id: string;
  name: string;
  category: 'Printing & Binding' | 'Packaging & Carton' | 'Lamination & Film' | 'Specialty Adhesives';
  description: string;
  viscosity: string;
  openTime: string;
  applicationTemp: string;
  suitableSubstrates: string[];
  keyBenefit: string;
  packagingOptions: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Campus Placement' | 'Corporate Soft Skills' | 'Leadership & Communication' | 'Technical Transition';
  duration: string;
  targetAudience: string;
  description: string;
  modules: string[];
  keyOutcomes: string[];
}

export interface CompanyCredentials {
  name: string;
  shortName: string;
  tagline: string;
  clearPositioning: string;
  oneLineClarity: string;
  introduction: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    fullFormatted: string;
  };
  gstin: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  email: string;
}

export interface QuoteRequestForm {
  division: 'adhesives' | 'training';
  name: string;
  organization: string;
  email: string;
  phone: string;
  productOrProgram: string;
  quantityOrBatchSize: string;
  requirements: string;
}
