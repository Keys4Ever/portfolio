export interface BaseProject {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
    year: string;
    tags: string[];
  }
  
  export interface FeaturedProject extends BaseProject {
    type: 'featured';
    overview: string;
    challenges: string[];
    solutions: string[];
    images: string[];
  }
  
  export interface SecondaryProject extends BaseProject {
    type: 'secondary';
  }
  
  export type Project = FeaturedProject | SecondaryProject;