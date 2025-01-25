import { Cloud, Database, Github, Layout, Palette, Server, Wrench, Java, Js, TypeScript, css, cpp, Python, NodeJS, Express, React, Astro, Sfml, Postgres, MySql, supabase, Aws, Figma, Photoshop, Inkscape, git, Postman, vsCode, nginx, vercel, nestJs } from 'icons';
export const skillCategories = {
    frontend: {
      title: 'LANGUAGES',
      icon: Layout,
      skills: [
        { name: 'Java', icon: Java },
        { name: 'TypeScript', icon: TypeScript },
        { name: 'CSS', icon: css },
        { name: 'C++', icon: cpp },
        { name: 'JavaScript', icon: Js },
        { name: 'Python', icon: Python },
      ]
    },
    backend: {
      title: 'FRAMEWORKS & LIBRARIES',
      icon: Server,
      skills: [
        { name: 'Node.Js', icon: NodeJS },
        { name: 'Express', icon: Express },
        { name: 'NestJS', icon: nestJs},
        { name: 'React', icon: React },
        { name: 'Astro', icon: Astro },
        { name: 'SFML', icon: Sfml }
      ]
    },
    databases: {
      title: 'DATABASES',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', icon: Postgres },
        { name: 'MySQL', icon: MySql },
        { name: 'Supabase', icon: supabase },
      ]
    },
    cloud: {
      title: 'CLOUD & DEVOPS',
      icon: Cloud,
      skills: [
        { name: 'AWS', icon: Aws },
        { name: 'Vercel', icon: vercel },
        { name: 'NGINX', icon: nginx }
      ]
    },
    design: {
      title: 'DESIGN',
      icon: Palette,
      skills: [
        { name: 'FIGMA', icon: Figma },
        { name: 'PHOTOSHOP', icon: Photoshop },
        { name: 'Inkscape', icon: Inkscape }
    ]
    },
    tools: {
      title: 'TOOLS',
      icon: Wrench,
      skills: [
        { name: 'git', icon: git },
        { name: 'Github', icon: Github },
        { name: 'POSTMAN', icon: Postman },
        { name: 'VS Code', icon: vsCode },
      ]
    }
  };