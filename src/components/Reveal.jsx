import { motion } from "framer-motion";

/**
 * Reveal — sleek, professional scroll-reveal wrapper.
 *
 * Fades + slides content into view as it scrolls into the viewport.
 * Matches the motion language used across the Studio page so every
 * inner page feels consistent.
 *
 * Props:
 *  - direction: "up" | "down" | "left" | "right" (default "up")
 *  - delay:     stagger delay in seconds (default 0)
 *  - duration:  animation duration in seconds (default 0.5)
 *  - as:        element/tag to render as a motion component (default "div")
 *  - amount:    how much must be visible before triggering (default 0.2)
 */
const offsets = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  as = "div",
  amount = 0.2,
  className = "",
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  const offset = offsets[direction] || offsets.up;

  return (
    <MotionTag
      initial={{ opacity: 0, filter: "blur(6px)", ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
