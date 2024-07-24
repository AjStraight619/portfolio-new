import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import React, { ReactNode, useState } from 'react';

const MouseTrackAnimation = ({ children }: { children: ReactNode }) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
  radial-gradient(
    ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
    var(--blue-500),
    transparent 80%
  )
`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      {children}
    </motion.div>
  );
};

export default MouseTrackAnimation;
