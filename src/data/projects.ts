import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    type: "featured",
    title: "E-COMMERCE PLATFORM",
    description: "Full-stack application built with Next.js and GraphQL",
    overview: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, dynamic product filtering, and seamless checkout experience. The platform integrates with multiple payment providers and includes an advanced admin dashboard for inventory and order management.",
    challenges: [
      "Implementing real-time inventory updates across multiple warehouses",
      "Optimizing performance for large product catalogs",
      "Building a secure and scalable payment processing system",
      "Managing complex state across multiple user sessions"
    ],
    solutions: [
      "Utilized GraphQL subscriptions for real-time data synchronization",
      "Implemented efficient caching strategies and pagination",
      "Integrated with Stripe and PayPal using microservices architecture",
      "Leveraged Redux Toolkit for state management with optimized performance"
    ],
    technologies: [
      "Next.js",
      "GraphQL",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=80"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024",
    tags: ["NEXT.JS", "GRAPHQL", "TYPESCRIPT"]
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