import { Link } from "react-router-dom";
import { FiArrowRight, FiHome } from "react-icons/fi";
import { Reveal, TextReveal, MagneticButton } from "../components";

const NotFound = () => {
  return (
    <section className='max-container'>
      <div className='mx-auto max-w-xl py-20 text-center'>
        <Reveal>
          <p className='kicker flex items-center justify-center gap-3'>
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
            404
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
          </p>
        </Reveal>

        <h1 className='head-text mt-4'>
          <TextReveal text='Page not' />{" "}
          <TextReveal text='found.' delay={0.15} gradient />
        </h1>

        <Reveal delay={0.25}>
          <p className='mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300'>
            The page you're looking for doesn't exist or may have moved.
            Let's get you back on track.
          </p>
        </Reveal>

        <Reveal delay={0.4} className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          <MagneticButton>
            <Link to='/' className='btn inline-flex w-auto items-center gap-2'>
              <FiHome className='h-4 w-4' />
              Back to home
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              to='/projects'
              className='inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-primary-dark dark:hover:text-primary-dark'
            >
              View projects
              <FiArrowRight className='h-4 w-4' />
            </Link>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
