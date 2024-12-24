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
      "https://i.imgur.com/1M1GULU.png",
      "https://i.imgur.com/bSS4MNn.png",
    ],
    github: "https://github.com/KosmoSama/Manga-Extension",
    demo: "https://chromewebstore.google.com/detail/manga-library/agdepjcnhljkjcnnmanbooinhoaieidc",
    year: "2024",
    tags: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "TEAM PROJECT"]
  },
  {
    id: "GRIN-UTN-TP",
    type: "featured",
    title: "GRIN GAME",
    description: "Game made in C++ for the subject of Programming II - Team Project",
    overview: "A game made in C++ for the subject of Programming II, the game is a simple platformer where the player has to reach the end of the level without dying. The game features multiple levels with increasing difficulty, and the player can collect gems to increase their score. The game is built using the SFML library and features custom graphics and sound effects.",
    challenges: [
      "Learning SFML from scratch",
      "Colaborating with a team fully of unknown people",
      "Use POO in C++",
      "Manage memory in C++",
      "Implement a collision system"
    ],
    solutions: [
      "Implemented SFML for the game engine",
      "Used Tiled for the levels",
      "Implement a collision system with AABB",
      "Use a singleton pattern for the game engine",
      "Use a factory pattern for the entities"
    ],
    technologies: [
      "C++",
      "SFML",
    ],
    videos:[
    "https://cdn-cf-east.streamable.com/video/mp4/am174d.mp4?Expires=1735314367541&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=XAwbKFqDDWYmfNIVX~CjWfLPakgVoMteUr8TMtxI6mLKEy~O1fRJ68hvmMdnBGy0eZ4DGiEuYmKnV4cC27jRG81JGGA2VLx~Ud79VbkxoTGP3TtIc98xd62vwOINcm-nR5nA0RWS9n39vOCR~HKXVhQ4SvcloxOHO8-kdlrCAUoRtY6tSZaIJvMbtgQk6XGpcpvwu-BBcTPPpfN-v3G3JS0pgxQSGOrDqcg0GVJVjNHNrMuqYTr6dft0Rup5zvi0bHRG4P0wza2xwOysUFPepxf-F8leZu6N~wsBg5LTnmSghhKEpfTkjkW1n~ZRob-8HSyT2rZ2rdYnx1qech~GKQ__"  
    ],
    github:"https://github.com/Alanjaqs/GRIN-UTN-TP",
    year:"2024",
    tags: ["C++", "SFML", "TEAM PROJECT"]
  },
  {
    id: "landing",
    type: "secondary",
    title: "Manga Library Landing page",
    description: "Simple landing page built in Astro to follow versions of the Manga Library",
    overview: "Landing page for the Manga Library project, built with Astro.JS and Tailwind CSS. The page is designed to showcase the features of the Manga Library application and provide a brief overview of the project. The landing page is fully responsive and optimized for performance. It uses MarkDown files to manage the version details.",
    technologies: ["TypeScript", "Astro.JS", "Tailwind CSS"],
    github: "https://github.com/Keys4Ever/Manga-Library-Landing",
    demo: "https://manga-library.vercel.app/",
    year: "2024",
    tags: ["TypeScript", "Astro.JS", "Tailwind CSS"]
  },
  {
    id: "urlShortener",
    type: "secondary",
    title: "URL Shortener",
    description: "First version of the URL Shortener, maded in a monolithic way",
    overview: "Maded to learn basics of Node.JS, Express.JS and SQLite, this project is a simple URL shortener that allows users to create shortened URLs from long links. The application is built using Node.JS and SQLite and features a simple user interface for creating and managing shortened URLs. The project is a monolithic application and is not optimized for high traffic loads.",
    technologies: ["SQLite", "Node.JS", "Tailwind CSS"],
    github: "https://github.com/Keys4Ever/URLShortener",
    year: "2023",
    tags: ["TypeScript", "Astro.JS", "Tailwind CSS"]
  },
];