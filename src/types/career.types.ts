// src/types/career.types.ts

export interface JobData {
  title: string;
  description?: string;
  responsibilitiesTitle?: string;
  responsibilities?: string[];
  keyRequirementsTitle?: string;
  keyRequirements?: string[];
  salary?: string;
  jobNature?: string;
  experience?: string;
  qualification?: string;
}

export interface CareerPageContent {
  heading: string;
  subHeading1: string;
  subHeading2: string;
  jobs: JobData[];
}
