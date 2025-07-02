// components/Team/team.types.ts
export interface TeamMemberData {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  description: string;
  linkedinUrl?: string;
}

export interface TeamPageContent {
  heading: string;
  subheading: string;
  teamMembers: TeamMemberData[];
}
