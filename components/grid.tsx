import React from 'react';
import { BentoGrid, BentoGridCard } from './ui/bento-grid';
import { gridData } from '@/data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridData.map((item, idx) => (
          <BentoGridCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={idx === 3 || idx === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
