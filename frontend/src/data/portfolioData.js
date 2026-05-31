import {
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaReact,
  FaTools,
} from 'react-icons/fa';
import { SiPostman, SiSpringboot, SiTailwindcss, SiVite } from 'react-icons/si';
import bankingImage from '../assets/Secure-Digital-Banking-Management.webp';
import greenCartImage from '../assets/Greencart-Platform.webp';
import pingMeImage from '../assets/PingMe-Platform.webp';

export const profile = {
  name: 'Soubhagya Kumar Behera',
  role: 'Java Full Stack Developer',
  email: 'soubhagyabehera074@gmail.com',
  location: 'Bhubaneswar, Odisha, India',
  resume: '/resume.pdf',
  github: 'https://github.com/soubhagya-behera/',
  linkedin: 'https://www.linkedin.com/in/soubhagyakumar-java/',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FaReact,
    accent: 'from-cyan-400 to-blue-500',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: FaJava,
    accent: 'from-fuchsia-400 to-violet-500',
    skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'Spring Security', 'JWT', 'REST APIs', 'Microservices', 'JDBC', 'Servlets', 'JSP'],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    accent: 'from-emerald-300 to-cyan-500',
    skills: ['MySQL', 'PostgreSQL', 'Database Design'],
  },
  {
    title: 'DevOps & Tools',
    icon: FaTools,
    accent: 'from-amber-300 to-fuchsia-500',
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'JUnit', 'Mockito', 'Docker',' AWS (EC2, S3)', 'CI/CD' ],
  },
];

export const skillLevels = [
  { name: 'Java', level: 85, icon: FaJava },

  { name: 'Spring Boot', level: 82, icon: SiSpringboot },

  { name: 'REST APIs', level: 80, icon: FaCode },

  { name: 'MySQL', level: 78, icon: FaDatabase },

  { name: 'React', level: 76, icon: FaReact },

  { name: 'Spring Security', level: 74, icon: SiSpringboot },

  { name: 'JWT Authentication', level: 73, icon: FaCode },

  { name: 'MicroServices', level: 72, icon: FaDatabase },
];

export const projects = [
  {
    title: 'Secure Digital Banking Management System',
    description:
      'Scalable banking application with JWT authentication, OTP verification, transactions, wallet isolation, chatbot support, and instant loan system.',
    stack: ['Java', 'Spring Boot', 'JSP', 'MySQL', 'REST APIs', 'HTML', 'CSS', 'JavaScript'],
    metrics: ['100+ Users', '30+ REST APIs', '25% Faster Response'],
    gradient: 'from-violet-500/50 via-fuchsia-500/30 to-cyan-400/30',
    image: bankingImage,
    imageAlt: 'Secure Digital Banking Management System dashboard preview',
    github: 'https://github.com/soubhagya-behera/secure-digital-banking-management-system',
    demo: 'https://online-banking-system-epjg.onrender.com',
  },
  {
    title: 'GreenCart - Full Stack E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with modular backend architecture, role-based workflows, product customization, and optimized Hibernate queries.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React.js'],
    metrics: ['Multi-Role System', '30% Faster APIs', 'Responsive UI'],
    gradient: 'from-cyan-400/45 via-blue-500/25 to-violet-500/35',
    image: greenCartImage,
    imageAlt: 'GreenCart e-commerce platform preview',
    github: profile.github,
    demo: '',
  },
  {
    title: 'PingMe - Real Time Chat System',
    description:
      'Real-time chat application focused on fast messaging, active conversations, clean chat UI, and responsive communication flows.',
    stack: ['React.js', 'Spring Boot', 'WebSocket', 'REST APIs', 'MySQL', 'JWT', 'Responsive UI'],
    metrics: ['Real-Time Chat', 'WebSocket Messaging', 'Concurrent Users'],
    gradient: 'from-fuchsia-400/45 via-violet-500/30 to-sky-400/30',
    image: pingMeImage,
    imageAlt: 'PingMe real-time chat system preview',
    github: profile.github,
    demo: '',
  },
];
