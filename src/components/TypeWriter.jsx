import { motion } from "framer-motion";

/**
 * TypeWriter — reveals text like it's being typed, with a blinking
 * caret. Uses a width animation (not transform) so it can safely be
 * combined with `gradient` (background-clip: text) without the
 * compositing issues that break gradients on transformed elements.
 *
 * Props:
 *  - text:      string to type out (required)
 *  - gradient:  paint the text with the brand gradient
 *  - delay:     seconds before typing starts
 *  - charDuration: seconds per character (controls typing speed)
 *  - once:      animate only the first time it enters the viewport
 */
const TypeWriter = ({
  text = "",
  gradient = false,
  delay = 0,
  charDuration = 0.06,
  once = true,
  className = "",
}) => {
  const duration = Math.max(text.length * charDuration, 0.3);

  return (
    <span className={`relative inline-flex items-baseline ${className}`}>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        viewport={{ once, amount: 0.6 }}
        transition={{ duration, delay, ease: "linear" }}
        className={`inline-block overflow-hidden whitespace-nowrap align-bottom ${
          gradient ? "blue-gradient_text" : ""
        }`}
        aria-label={text}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, delay, ease: "linear" }}
        className="ml-1 inline-block h-[0.85em] w-[3px] shrink-0 self-center bg-primary dark:bg-primary-dark"
      />
    </span>
  );
};

export default TypeWriter;
