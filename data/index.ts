import { FaAws } from 'react-icons/fa6';
import {
  SiFramer,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

export const gridData = [
  {
    id: 1,
    title: 'Skills',
    description:
      'List of skills I have developed through school and personal indevors',
  },
  { id: 2, title: 'Title2', description: 'Description2' },
  {
    id: 3,
    title: 'Location',
    description: 'Willing to work remote or relocate',
  },
  {
    id: 4,
    title: 'Achievements',
    description: 'Professional and Education Achievements',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Pathfinding Visualizer',
    des: 'Explore the brilliance of pathfinding algorithms and how they work.',
    img: '/algo-visualizer.png',
    techList: [
      { icon: SiTypescript, color: '#3178c6' },
      {
        icon: SiReact,
        color: '#61dafb',
      },
      { icon: SiTailwindcss, color: '#38b2ac' },
      { icon: SiFramer, color: '#e91e63' },
    ],
    link: 'https://algo-visualizer-nine.vercel.app/',
  },
  {
    id: 2,
    title: 'Pictionary With Friends',
    des: 'An extension of Skribbl.io with better drawing and shape creation.',
    img: '/pictionary.png',
    techList: [
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiGo, color: '#00add8' },
      { icon: SiNextdotjs, color: '#FFFFFF' },
      { icon: SiPrisma, color: '#2d3748' },
      { icon: SiZod, color: '#ff5a5f' },
      { icon: SiTailwindcss, color: '#38b2ac' },
      { icon: SiFramer, color: '#e91e63' },
    ],
    link: 'https://pictionary-tan.vercel.app/',
  },
  // {
  //   id: 3,
  //   title: 'AI Image SaaS - Canva Application',
  //   des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
  //   img: '/p3.svg',
  //   iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
  //   link: '/ui.aiimg.com',
  // },
  // {
  //   id: 4,
  //   title: 'Animated Apple Iphone 3D Website',
  //   des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
  //   img: '/p4.svg',
  //   iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
  //   link: '/ui.apple.com',
  // },
];

export const skills = [
  { icon: SiTypescript, color: '#3178c6' },
  { icon: SiGo, color: '#00add8' },
  {
    icon: SiReact,
    color: '#61dafb',
  },
  { icon: SiNextdotjs, color: '#FFFFFF' },
  { icon: FaAws, color: '#FF9900' },
  { icon: SiPrisma, color: '#2d3748' },
  { icon: SiZod, color: '#ff5a5f' },
  { icon: SiTailwindcss, color: '#38b2ac' },
  { icon: SiFramer, color: '#e91e63' },
];
