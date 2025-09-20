/**
 * Sample project data for the portfolio website.
 * Each project contains:
 * - id: Unique identifier
 * - title: Project name
 * - image: Main image URL
 * - shortDescription: Brief overview for the card
 * - description: Detailed description for the modal
 * - technologies: Array of technologies used
 * - githubUrl: Link to GitHub repository
 * - liveUrl: Link to live demo
 * - gallery: Array of additional images
 */

export const projectsData = [
  {
    id: 0,
    title: 'AI Receptionist (Sopranos AI Placeholder)',
    image: 'https://via.placeholder.com/800x600/111827/ffffff?text=AI+Receptionist',
    shortDescription: 'Voice AI receptionist placeholder built with Next.js + React, Node.js tools, Supabase, and ElevenLabs.',
    description: 'A placeholder website showcasing an AI receptionist concept inspired by Sopranos AI. It provides 24/7 voice assistant capabilities including smart call handling, appointment scheduling, call routing, analytics, and HIPAA-aware workflows. I integrated tool execution with Node.js services backed by Supabase, and connected ElevenLabs for natural voice. The frontend is implemented with React and Next.js, focusing on clean UI and responsive UX.',
    technologies: ['Next.js', 'React', 'Node.js', 'Supabase', 'ElevenLabs', 'Voice AI', 'TypeScript'],
    githubUrl: null,
    liveUrl: 'https://www.sopranos.ai',
    gallery: [
      'https://via.placeholder.com/800x600/111827/ffffff?text=Call+Handling',
      'https://via.placeholder.com/800x600/1f2937/ffffff?text=Appointment+Scheduling',
      'https://via.placeholder.com/800x600/374151/ffffff?text=Analytics',
    ]
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: '/projects/ecommerce.jpg',
    shortDescription: 'A full-stack e-commerce platform with React and Node.js.',
    description: 'This e-commerce platform provides a complete shopping experience with product browsing, cart functionality, user authentication, and payment processing. The frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB. Features include product search and filtering, reviews, and an admin dashboard for managing products and orders.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'AWS S3'],
    githubUrl: 'https://github.com/BogdanFAndrei/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.bogdanfandrei.com',
    gallery: [
      '/projects/ecommerce-1.jpg',
      '/projects/ecommerce-2.jpg',
      '/projects/ecommerce-3.jpg',
    ]
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    image: '/projects/weather.jpg',
    shortDescription: 'A weather app featuring current conditions and forecasts.',
    description: 'This weather dashboard application displays current weather conditions and forecasts for any location worldwide. It uses the OpenWeatherMap API for weather data and the Mapbox API for location search. The app includes features like saving favorite locations, viewing historical weather data, and receiving weather alerts. The interface is responsive and adapts to different screen sizes for a seamless experience on any device.',
    technologies: ['JavaScript', 'React', 'OpenWeatherMap API', 'Mapbox API', 'Chart.js', 'CSS3'],
    githubUrl: 'https://github.com/BogdanFAndrei/weather-dashboard',
    liveUrl: 'https://weather.bogdanfandrei.com',
    gallery: [
      '/projects/weather-1.jpg',
      '/projects/weather-2.jpg',
    ]
  },
  {
    id: 3,
    title: 'Task Management App',
    image: '/projects/taskapp.jpg',
    shortDescription: 'A Kanban-style task management application.',
    description: 'This task management application helps users organize their work with a Kanban-style board. Users can create tasks, assign them to team members, set due dates, and track progress through different stages. The app includes features like task filtering, search, priority levels, and notifications for approaching deadlines. It synchronizes data across devices and allows for offline use with background syncing when reconnected.',
    technologies: ['TypeScript', 'React', 'Firebase', 'Material UI', 'PWA', 'Offline-first'],
    githubUrl: 'https://github.com/BogdanFAndrei/task-manager',
    liveUrl: 'https://tasks.bogdanfandrei.com',
    gallery: [
      '/projects/taskapp-1.jpg',
      '/projects/taskapp-2.jpg',
      '/projects/taskapp-3.jpg',
    ]
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    image: '/projects/fitness.jpg',
    shortDescription: 'A mobile-first fitness tracking application.',
    description: 'This fitness tracking application helps users monitor their workouts, nutrition, and progress toward health goals. It includes features for creating custom workout routines, logging exercises, tracking calories and macronutrients, and visualizing progress over time with interactive charts. The app integrates with health devices via Bluetooth for automatic data collection and provides AI-powered recommendations for workout and diet optimization.',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Chart.js', 'TensorFlow.js'],
    githubUrl: 'https://github.com/BogdanFAndrei/fitness-tracker',
    liveUrl: 'https://fitness.bogdanfandrei.com',
    gallery: [
      '/projects/fitness-1.jpg',
      '/projects/fitness-2.jpg',
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website',
    image: '/projects/portfolio.jpg',
    shortDescription: 'Personal portfolio website showcasing my projects and skills.',
    description: 'This portfolio website showcases my projects, skills, and experience as a developer. Built with Next.js and styled-components, it features a responsive design, interactive UI elements, and optimized performance. The site includes project showcases with detailed information, a skills section, contact form, and blog. It\'s designed to highlight my work and provide an easy way for potential clients or employers to get in touch.',
    technologies: ['Next.js', 'React', 'Styled Components', 'Vercel', 'SEO Optimization'],
    githubUrl: 'https://github.com/BogdanFAndrei/personal_portfolio',
    liveUrl: 'https://bogdanfandrei.com',
    gallery: [
      '/projects/portfolio-1.jpg',
      '/projects/portfolio-2.jpg',
    ]
  },
  {
    id: 6,
    title: 'Chat Application',
    image: '/projects/chat.jpg',
    shortDescription: 'Real-time chat application with group and private messaging.',
    description: 'This real-time chat application allows users to communicate through private and group messages. It features instant message delivery, read receipts, typing indicators, and file sharing capabilities. The app supports rich text formatting, emoji reactions, and message threading for organized conversations. User presence is indicated in real-time, and the interface adapts to different devices for a consistent experience across platforms.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com/BogdanFAndrei/chat-app',
    liveUrl: 'https://chat.bogdanfandrei.com',
    gallery: [
      '/projects/chat-1.jpg',
      '/projects/chat-2.jpg',
      '/projects/chat-3.jpg',
    ]
  }
]; 