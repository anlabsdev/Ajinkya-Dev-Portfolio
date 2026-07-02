import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

/**
 * SectionHeading — consistent section intro: mono kicker with an
 * animated line, a word-revealed title, and optional description.
 */
const SectionHeading = ({ kicker, title, description, className = "" }) => {
  return (
    <div className={className}>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="kicker flex items-center gap-3"
        >
          <span className="inline-block h-px w-8 bg-primary dark:bg-primary-dark" />
          {kicker}
        </motion.p>
      )}

      <h2 className="subhead-text mt-4">
        <TextReveal text={title} />
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
