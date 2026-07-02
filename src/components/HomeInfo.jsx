import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

/**
 * HomeInfo — glassmorphic stage cards shown over the 3D island.
 * Each island stage swaps the card with a springy pop transition.
 */
const stageContent = {
  1: {
    text: (
      <>
        Hi, I'm <span className='font-display font-bold text-gradient'>Ajinkya</span> 👋
        <br />
        Software Engineer & AI Software Builder from India
      </>
    ),
  },
  2: {
    text: (
      <>
        Worked with many companies and
        <br className='hidden sm:block' /> picked up many skills along the way
      </>
    ),
    link: { to: "/about", label: "Learn more" },
  },
  3: {
    text: (
      <>
        Led multiple projects to success over the years.
        <br className='hidden sm:block' /> Curious about the impact?
      </>
    ),
    link: { to: "/projects", label: "Visit my portfolio" },
  },
  4: {
    text: (
      <>
        Need a project done or looking for a dev?
        <br className='hidden sm:block' /> I'm just a few keystrokes away
      </>
    ),
    link: { to: "/contact", label: "Let's talk" },
  },
  5: {
    text: (
      <>
        Check out my professional certifications
        <br className='hidden sm:block' /> and continuous learning journey
      </>
    ),
    link: { to: "/certification", label: "View certifications" },
  },
  6: {
    text: (
      <>
        Let's connect and build something amazing together!
        <br className='hidden sm:block' /> Join my professional network
      </>
    ),
    link: { to: "/connect", label: "Connect with me" },
  },
};

const HomeInfo = ({ currentStage }) => {
  const content = stageContent[currentStage];
  if (!content) return null;

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={currentStage}
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className='mx-4 max-w-xl rounded-2xl border border-white/30 bg-slate-900/45 px-6 py-5 text-center shadow-[0_18px_45px_rgba(2,6,23,0.35)] backdrop-blur-md sm:px-8 sm:py-6'
      >
        <p className='font-medium leading-relaxed text-white drop-shadow-sm sm:text-lg'>
          {content.text}
        </p>

        {content.link && (
          <Link
            to={content.link.to}
            className='group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-semibold text-slate-900 shadow-lg transition-all hover:shadow-glow'
          >
            {content.link.label}
            <FiArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default HomeInfo;
