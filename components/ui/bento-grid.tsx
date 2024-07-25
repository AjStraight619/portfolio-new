'use client';
import { cn } from '@/lib/utils';
import GridGlobe from './grid-globe';
import React, { useState } from 'react';
import { skills } from '@/data';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

const hoverAnimation = {
  scale: 1.05,
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
  border:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',
  transition: {
    duration: 0.1,
  },
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridCard = ({
  className,
  title,
  description,
  header,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
        className,
        // isHovering &&
        //   ' bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] -z-10',
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={isHovering ? hoverAnimation : {}}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {id === 1 && <SkillsConent isHovering={isHovering} />}
        {id === 3 && <GridGlobe />}
      </CardContent>
    </motion.div>
  );
};

const SkillsConent = ({ isHovering }: { isHovering: boolean }) => {
  const skillsVariants = {
    initial: {
      opacity: 0.5,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    initial: {
      opacity: 0.5,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.ul
      className="flex flex-row flex-wrap gap-3"
      initial="initial"
      animate={isHovering ? 'animate' : 'initial'}
      variants={skillsVariants}
    >
      {skills.map(({ icon, color }, idx) => (
        <motion.li key={idx} variants={skillItemVariants}>
          {React.createElement(icon, {
            color,
            size: 30,
          })}
        </motion.li>
      ))}
    </motion.ul>
  );
};
