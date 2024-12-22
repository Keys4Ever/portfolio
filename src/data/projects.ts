import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "URL-Shortener",
    type: "featured",
    title: "URL Shortener",
    description: "Full-stack application built with Node.js, Express, React and PostgreSQL",
    overview: "A URL shortening service that allows users to create shortened URLs from long links. Features include custom URL aliases, clicks counts, user authentication, and Tags for the urls.",
    challenges: [
      "Implementing redis caching for faster redirections",
      "Designing a scalable database schema for storing URLs",
      "Securing the application from malicious URL inputs",
      "Creating a user-friendly interface for managing URLs",
      "Optimizing the application for high traffic loads",
      "Implementing tags system for urls"
    ],
    solutions: [
      "Used Redis for caching frequently accessed URLs",
      "Designed a PostgreSQL schema optimized for URL storage",
      "Implemented input validation and sanitization",
      "Built a responsive React front-end",
      "Deployed the application on AWS EC2 and RDS",
      "Used PostgreSQL for storing tags and implemented many-to-many relationship between urls and tags"
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    images: [
      "https://i.imgur.com/Dvigxup.png",
      "https://i.imgur.com/AStyyNn.png",
    ],
    github: "https://github.com/Keys4Ever/URLShortenerV2",
    demo: "https://keys.lat",
    year: "2024",
    tags: ["REACT.JS", "EXPRESS.JS", "TYPESCRIPT"]
  },
  {
    id: "ai-image-generator",
    type: "featured",
    title: "AI IMAGE GENERATOR",
    description: "Creative AI tool using Stable Diffusion",
    overview: "An innovative AI-powered image generation platform that allows users to create unique artwork through text prompts. Features include style mixing, image-to-image generation, and a gallery system for sharing creations.",
    challenges: [
      "Optimizing AI model performance for web deployment",
      "Managing high-resolution image processing",
      "Creating an intuitive UI for complex AI parameters"
    ],
    solutions: [
      "Implemented WebGL acceleration for client-side processing",
      "Built custom image processing pipeline",
      "Designed an advanced yet user-friendly parameter control system"
    ],
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "WebGL",
      "FastAPI"
    ],
    images: [
      "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024",
    tags: ["AI", "REACT", "PYTHON"]
  },
  {
    id: "blockchain-explorer",
    type: "featured",
    title: "BLOCKCHAIN EXPLORER",
    description: "Real-time blockchain data visualization platform",
    overview: "A comprehensive blockchain explorer that provides real-time insights into various blockchain networks. Features include transaction tracking, address monitoring, and advanced analytics.",
    challenges: [
      "Processing large volumes of blockchain data",
      "Maintaining real-time synchronization",
      "Visualizing complex blockchain relationships"
    ],
    solutions: [
      "Implemented WebSocket-based real-time updates",
      "Built custom data indexing system",
      "Created interactive network visualization"
    ],
    technologies: [
      "React",
      "Node.js",
      "Web3.js",
      "D3.js"
    ],
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023",
    tags: ["BLOCKCHAIN", "REACT", "NODE.JS"]
  },
  {
    id: "npm-package",
    type: "secondary",
    title: "REACT STATE MANAGER",
    description: "Lightweight state management solution for React applications",
    technologies: ["TypeScript", "React", "RxJS"],
    github: "https://github.com",
    year: "2023",
    tags: ["OPEN SOURCE", "REACT", "TYPESCRIPT"]
  },
  {
    id: "cli-tool",
    type: "secondary",
    title: "DEV WORKFLOW CLI",
    description: "Command-line tool for automating development workflows",
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    github: "https://github.com",
    year: "2023",
    tags: ["CLI", "NODE.JS", "TYPESCRIPT"]
  },
  {
    id: "vscode-extension",
    type: "secondary",
    title: "CODE SNIPPETS MANAGER",
    description: "VSCode extension for managing and sharing code snippets",
    technologies: ["TypeScript", "VSCode API"],
    github: "https://github.com",
    year: "2023",
    tags: ["VSCODE", "TYPESCRIPT"]
  }
];