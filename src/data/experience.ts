export interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
    url?: string;
    type: 'work' | 'education';
}

export const experiences: ExperienceItem[] = [
    {
        id: 'exp1',
        type: 'work',
        company: "Nimble Gravity",
        position: "Junior Full-Stack Developer",
        period: "04-2025 - Present",
        description: "Currently working here :D.",
        technologies: ["Angular.js", "PHP", "Typescript", "Bootstrap 3", "Next.JS"],
        url: "https://nimblegravity.com"
    },
    {
        id: 'edu1',
        type: 'education',
        company: "Universidad Tecnológica Nacional",
        position: "Universitary Technical Degree in Programming",
        period: "03-2024 - Present (expected 12-2025)",
        description: "Specialized in designing scalable systems, writing clean code, and applying SOLID principles.",
        technologies: ["C++", "C#", "ASP.Net", "SQL Server"],
    },
];
