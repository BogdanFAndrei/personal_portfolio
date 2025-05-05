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
    id: 1,
    title: 'E-Commerce Platform',
    image: 'https://via.placeholder.com/800x600/4dabf7/ffffff?text=E-Commerce+Platform',
    shortDescription: 'A full-stack e-commerce platform with React and Node.js.',
    description: 'This e-commerce platform provides a complete shopping experience with product browsing, cart functionality, user authentication, and payment processing. The frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB. Features include product search and filtering, reviews, and an admin dashboard for managing products and orders.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'AWS S3'],
    githubUrl: 'https://github.com/BogdanFAndrei/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/4dabf7/ffffff?text=E-Commerce+Screenshot+1',
      'https://via.placeholder.com/800x600/4dabf7/ffffff?text=E-Commerce+Screenshot+2',
      'https://via.placeholder.com/800x600/4dabf7/ffffff?text=E-Commerce+Screenshot+3',
    ]
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    image: 'https://via.placeholder.com/800x600/20c997/ffffff?text=Weather+Dashboard',
    shortDescription: 'A weather app featuring current conditions and forecasts.',
    description: 'This weather dashboard application displays current weather conditions and forecasts for any location worldwide. It uses the OpenWeatherMap API for weather data and the Mapbox API for location search. The app includes features like saving favorite locations, viewing historical weather data, and receiving weather alerts. The interface is responsive and adapts to different screen sizes for a seamless experience on any device.',
    technologies: ['JavaScript', 'React', 'OpenWeatherMap API', 'Mapbox API', 'Chart.js', 'CSS3'],
    githubUrl: 'https://github.com/BogdanFAndrei/weather-dashboard',
    liveUrl: 'https://weather.bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/20c997/ffffff?text=Weather+Screenshot+1',
      'https://via.placeholder.com/800x600/20c997/ffffff?text=Weather+Screenshot+2',
    ]
  },
  {
    id: 3,
    title: 'Task Management App',
    image: 'https://via.placeholder.com/800x600/ffc107/ffffff?text=Task+Management',
    shortDescription: 'A Kanban-style task management application.',
    description: 'This task management application helps users organize their work with a Kanban-style board. Users can create tasks, assign them to team members, set due dates, and track progress through different stages. The app includes features like task filtering, search, priority levels, and notifications for approaching deadlines. It synchronizes data across devices and allows for offline use with background syncing when reconnected.',
    technologies: ['TypeScript', 'React', 'Firebase', 'Material UI', 'PWA', 'Offline-first'],
    githubUrl: 'https://github.com/BogdanFAndrei/task-manager',
    liveUrl: 'https://tasks.bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/ffc107/ffffff?text=Task+App+Screenshot+1',
      'https://via.placeholder.com/800x600/ffc107/ffffff?text=Task+App+Screenshot+2',
      'https://via.placeholder.com/800x600/ffc107/ffffff?text=Task+App+Screenshot+3',
    ]
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    image: 'https://via.placeholder.com/800x600/fa5252/ffffff?text=Fitness+Tracker',
    shortDescription: 'A mobile-first fitness tracking application.',
    description: 'This fitness tracking application helps users monitor their workouts, nutrition, and progress toward health goals. It includes features for creating custom workout routines, logging exercises, tracking calories and macronutrients, and visualizing progress over time with interactive charts. The app integrates with health devices via Bluetooth for automatic data collection and provides AI-powered recommendations for workout and diet optimization.',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Chart.js', 'TensorFlow.js'],
    githubUrl: 'https://github.com/BogdanFAndrei/fitness-tracker',
    liveUrl: 'https://fitness.bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/fa5252/ffffff?text=Fitness+Screenshot+1',
      'https://via.placeholder.com/800x600/fa5252/ffffff?text=Fitness+Screenshot+2',
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/800x600/7950f2/ffffff?text=Portfolio+Website',
    shortDescription: 'Personal portfolio website showcasing my projects and skills.',
    description: 'This portfolio website showcases my projects, skills, and experience as a developer. Built with Next.js and styled-components, it features a responsive design, interactive UI elements, and optimized performance. The site includes project showcases with detailed information, a skills section, contact form, and blog. It\'s designed to highlight my work and provide an easy way for potential clients or employers to get in touch.',
    technologies: ['Next.js', 'React', 'Styled Components', 'Vercel', 'SEO Optimization'],
    githubUrl: 'https://github.com/BogdanFAndrei/personal_portfolio',
    liveUrl: 'https://bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/7950f2/ffffff?text=Portfolio+Screenshot+1',
      'https://via.placeholder.com/800x600/7950f2/ffffff?text=Portfolio+Screenshot+2',
    ]
  },
  {
    id: 6,
    title: 'Chat Application',
    image: 'https://via.placeholder.com/800x600/12b886/ffffff?text=Chat+Application',
    shortDescription: 'Real-time chat application with group and private messaging.',
    description: 'This real-time chat application allows users to communicate through private and group messages. It features instant message delivery, read receipts, typing indicators, and file sharing capabilities. The app supports rich text formatting, emoji reactions, and message threading for organized conversations. User presence is indicated in real-time, and the interface adapts to different devices for a consistent experience across platforms.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com/BogdanFAndrei/chat-app',
    liveUrl: 'https://chat.bogdanfandrei.com',
    gallery: [
      'https://via.placeholder.com/800x600/12b886/ffffff?text=Chat+Screenshot+1',
      'https://via.placeholder.com/800x600/12b886/ffffff?text=Chat+Screenshot+2',
      'https://via.placeholder.com/800x600/12b886/ffffff?text=Chat+Screenshot+3',
    ]
  }
]; 