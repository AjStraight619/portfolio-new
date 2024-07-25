'use client';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 scroll-mb-32">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="cyan" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Combining Creativity and Engineering Principles into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Alex, a Next.js Developer based in San Diego.
          </p>
          <div className="flex flex-col gap-y-2">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

function ResumeButton() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      asChild
    >
      <a href="/Alex_Straight_Resume.pdf" download>
        Resume
        <DownloadIcon className="ml-2" />
        {/* <AnimatePresence>
          {!isHovering && (
            <motion.span
              key="resume"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Resume
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovering && (
            <motion.span
              key="downloadIcon"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DownloadIcon />
            </motion.span>
          )}
        </AnimatePresence> */}
      </a>
    </Button>
  );
}
