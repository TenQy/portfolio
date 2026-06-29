export default {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Software Developer',
    description: 'I enjoy turning ideas into applications by focusing on both the user experience and the way they’re built, always aiming for the most suitable approach for each project.',
    downloadCV: 'Download CV',
    viewProjects: 'View projects'
  },
  about: {
    title: 'About me',
    p1: 'I am a Computer Systems Engineering student, mainly focused on software development.',
    p2: 'I enjoy turning ideas into well-thought-out applications, taking the time to plan, design, and refine each project until I achieve a result I can feel proud of.',
    p3: 'Currently, I am looking to grow professionally by pursuing internship opportunities as a software developer while starting to work freelance with my first clients.',
    p4: 'In my free time, I continue learning independently through courses and personal projects, with the goal of further expanding my knowledge.',
    highlights: [ 
      { title: 'Think before building', description: 'I focus on understanding what needs to be solved before starting to build a solution.' },
      { title: 'Design and continuous improvement', description: 'I care about how applications look and work, refining them continuously until they feel right.' },
      { title: 'Build from start to finish', description: 'I enjoy being involved in the full development process, from the initial concept to the finished application.' }
  ]
  },
  skills: {
    title: 'Technology stack',
    languages: 'Languages',
    frameworks: 'Frameworks',
    database: 'Databases',
    tools: 'Herramientas',
  },
  projects: {
    // Home section
    title: 'Featured projects',
    viewAll: 'View all projects',

    // Project card
    viewRepo: 'Repository',
    liveDemo: 'Live demo',
    viewDetails: 'More details',
    status: {
      prototype: 'Prototype',
      inProgress: 'In progress',
      completed: 'Completed'
    },

    // All projects page
    allTitle: 'Projects',
    goBack: 'Go back',
    filters: {
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      ai: 'AI',
    },
    noResults: 'No projects match this filter.',
    
    // Project details page
    notFound: 'Project not found.',
    detail: {
      overview: 'Overview',
      features: 'Features',
      futureImprovements: 'Future improvements',
      learnings: 'What I learned',
    },
  },
  contact: {
    title: 'Let’s work together',
    description: 'I’m looking for opportunities as a developer, including internships, freelance projects, or collaborations. If you have an idea or need help building software, I can join your project.',
    copy: 'Copy email',
    copied: 'Copied!',
  }
}