import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className='fixed top-0 left-0 right-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark'
    />
  );
};

export default ScrollProgress;
