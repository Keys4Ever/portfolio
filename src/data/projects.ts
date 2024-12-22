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
    id: "Manga-Library",
    type: "featured",
    title: "Manga Library",
    description: "Chrome extension CRUD to manage your reading mangas and more! - Team Project",
    overview: "A modern and minimalistic CRUD application tailored for manga, manhua, and manhwa enthusiasts. Seamlessly organize your library by saving titles and links, tracking chapter progress, and managing your reading list with ease. Featuring smart filters for effortless sorting and searching, this app ensures that your collection is always just a click away. With a clean, intuitive interface crafted by manga lovers, for manga lovers, it’s the ultimate tool to elevate your reading experience.",
    challenges: [
      "Learning javascript from scratch",
      "Colaborating with a team",
      "Make a maintanable code",
      "Publish the extension on the Chrome Web Store"
    ],
    solutions: [
      "Implemented tailwind for styling",
      "Used browser API's as Local Storage for saving data",
      "Implement and manage bookmarks api's for import the mangas",
    ],
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
    ],
    images: [
      "https://lh3.googleusercontent.com/4LVp0ux7EsIhLVug6jPpwh5MBcG-zQ1ntEbjoSlSEBOMTbaY2iWfEyWDCZWcYMSnZSV861D1Nl58EnJnkQkbqrxA8Q=s1280-w1280-h800",
      "https://lh3.googleusercontent.com/rH5_uGMXIj0zAnKTpM7JKdgTeY6ZtuSnPtk77W2Z_ZvbaGmrMBesuRSF9EDAVaAXMvZtFvC-eXXuu-m3nSln-K8C_g=s1280-w1280-h800"
    ],
    github: "https://github.com/KosmoSama/Manga-Extension",
    demo: "https://chromewebstore.google.com/detail/manga-library/agdepjcnhljkjcnnmanbooinhoaieidc",
    year: "2024",
    tags: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "TEAM PROJECT"]
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