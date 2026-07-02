import { motion } from "framer-motion";

/**
 * TextReveal — word-by-word masked reveal for headlines.
 *
 * Splits text into words; each word slides up from behind an overflow
 * mask with a stagger, the signature effect of modern portfolio sites.
 *
 * Props:
 *  - text:      string to animate (required)
 *  - as:        wrapper tag (default "span")
 *  - delay:     initial delay before the stagger starts
 *  - stagger:   delay between words (default 0.045)
 *  - once:      animate only the first time it enters the viewport
 *  - className: applied to the wrapper
 *  - gradient:  paint the words with the brand gradient (blue-gradient_text)
 *
 * Note: the gradient class must be applied to the same element that gets
 * transformed (the per-word span below), not an ancestor — background-clip:
 * text on an ancestor doesn't clip correctly through a transformed
 * (compositor-layered) descendant and renders as invisible text.
 */
const TextReveal = ({
  text = "",
  as = "span",
  delay = 0,
  stagger = 0.045,
  once = true,
  className = "",
  gradient = false,
}) => {
  const MotionTag = motion[as] || motion.span;
  const words = text.split(" ");

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block will-change-transform ${gradient ? "blue-gradient_text" : ""}`}
            variants={{
              hidden: { y: "110%", rotate: 4, opacity: 0 },
              visible: {
                y: "0%",
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
};

export default TextReveal;
