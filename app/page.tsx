import Contact from '@/components/contact';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import { FloatingNav } from '@/components/ui/floating-nav';
import { HouseIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
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
];
