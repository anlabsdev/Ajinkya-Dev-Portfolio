import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const CTA = () => {
  return (
    <section className='relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px]'>
      <div className='relative flex flex-col items-center gap-6 rounded-3xl bg-white/95 px-6 py-12 text-center dark:bg-slate-950/95 sm:flex-row sm:justify-between sm:px-12 sm:text-left'>
        <div className='bg-grid absolute inset-0 opacity-60' aria-hidden />
        <div className='relative'>
          <h2 className='font-display text-2xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-3xl'>
            <TextReveal text='Have a project in mind?' />
          </h2>
          <p className='mt-2 text-slate-600 dark:text-slate-300'>
            Let's build something people actually use.
          </p>
        </div>
        <MagneticButton className='relative shrink-0'>
          <Link to='/contact' className='btn inline-flex w-auto items-center gap-2'>
            Contact me
            <FiArrowRight className='h-4 w-4' />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default CTA;
