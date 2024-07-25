import Contact from '@/components/contact';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Badge from '@/components/ui/3d-badge';
import { FloatingNav } from '@/components/ui/floating-nav';
import {
  CodeIcon,
  HouseIcon,
  MessageCircleIcon,
  PersonStandingIcon,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const DynamicProjects = dynamic(() => import('@/components/projects'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="absolute top-0 right-0 z-50 h-[20vh] w-[34vw] sm:h-[50vh] sm:w-[34vw]">
        <Badge />
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <DynamicProjects />
        <Contact />
      </div>
    </main>
  );
}

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: React.createElement(HouseIcon),
  },
  {
    name: 'About',
    link: '#about',
    icon: React.createElement(PersonStandingIcon),
  },
  {
    name: 'About',
    link: '#projects',
    icon: React.createElement(CodeIcon),
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: React.createElement(MessageCircleIcon),
  },
];
