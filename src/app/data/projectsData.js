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
    title: 'HEBA.care',
    image: '/projects/heba-logo-formerly.png',
    shortDescription: 'NHS-approved React Native app for managing children s complex healthcare needs. Tracks symptoms, medications, and appointments with secure family and healthcare team collaboration',
    description: `Software Quality Assurance & Testing | React Native, JIRA, TestFlight\n\nLed comprehensive software testing for an NHS-approved React Native mobile application designed for families managing children with complex healthcare needs. Collaborated with Cambridge alumni development team to ensure platform quality, user experience, and regulatory compliance for sensitive pediatric healthcare data management.\n\nKey Technical Achievements:\n\n- Created extensive user flow documentation and flowcharts to optimize application navigation and feature accessibility for families under stress\n- Coordinated TestFlight beta testing programs, managing multiple release cycles and gathering critical user feedback from healthcare professionals and families\n- Developed systematic test reporting protocols covering functionality, usability, and accessibility across iOS platforms\n- Implemented structured bug tracking and resolution workflows using JIRA, ensuring efficient communication between QA and development teams\n- Established quality assurance standards for healthcare data privacy, medication tracking accuracy, and multi-user collaboration features\n- Conducted cross-platform compatibility testing for symptom tracking, appointment management, and secure document sharing functionalities\n\nImpact: Contributed to delivering a life-changing platform that consolidates multiple healthcare management tools into one secure application, earning overwhelming positive feedback from families managing complex pediatric care while meeting strict NHS approval standards for healthcare applications.`,ion: 'This e-commerce platform provides a complete shopping experience with product browsing, cart functionality, user authentication, and payment processing. The frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB. Features include product search and filtering, reviews, and an admin dashboard for managing products and orders.',
    technologies: ["React Native",  "Java Script", 'TestFlight (iOS)', 'JIRA (Bug Tracking)'],
    liveUrl: 'https://www.heba.care/',
    headerBg: '#428755',
    gallery: [
      '/projects/hibi_track.png',
      '/projects/hibi_trends.png',
      '/projects/hibi_collaboration.png',
      '/projects/hibi_expert.png',

    ]
  },
  {
    id: 1,
    title: 'Sopranos AI',
    image: '/projects/Sopranos.png',
    bannerColor: '#730194',
    headerBg: '#a416cd',
    headerTextColor: '#111827',
    shortDescription: 'Voice AI receptionist built with Next.js + React, Node.js, Supabase, and ElevenLabs.',
    description: `Full-Stack AI Voice Assistant Development | Node.js, React, Next.js\n\nDeveloped a comprehensive AI-powered receptionist platform specifically designed for healthcare providers, enabling 24/7 automated patient communication and appointment management. Built a multilingual voice AI system that handles appointment scheduling, call routing, and patient inquiries with HIPAA-compliant data handling.\n\nKey Technical Achievements:\n\n- Engineered serverless backend infrastructure using Node.js on Supabase with Google Calendar API integration for real-time appointment management (scheduling, modification, and availability checking)\n- Implemented advanced prompt engineering and integrated ElevenLabs TTS for natural voice interactions\n- Configured Netgsm SIP trunk integration for seamless telephony operations in the Turkish market\n- Developed responsive web platform using Next.js and React with multi-language support and interactive demo capabilities\n- Created automated call routing system with intelligent departmental forwarding based on patient needs\n- Built comprehensive analytics dashboard for call tracking and customer interaction reporting\n\nImpact: Revolutionized patient communication for healthcare providers by eliminating missed calls and providing continuous, professional-grade automated reception services, targeting emerging healthcare markets with scalable AI voice infrastructure.\n\nThis description highlights both the technical complexity and business impact of the project while being concise enough for a resume format.`,
    technologies: ['Next.js', 'React', 'Node.js', 'Supabase', 'ElevenLabs', 'Voice AI', 'TypeScript'],
    githubUrl: null,
    liveUrl: 'https://www.sopranos.ai',
    gallery: [
      '/projects/Sopranos4.png',
      '/projects/Sopranos2.png',
      '/projects/Sopranos3.png',
      
     
    ]
  },
  {
    id: 2,
    title: 'Boost AI',
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
    title: 'Email Enhancer Agent',
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
    title: 'ScoutBot_AI',
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
    title: 'aMazeing Dissertation',
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