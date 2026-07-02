import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { Reveal, TextReveal, TiltCard } from "../components";
import { certificates } from "../constants";

const Certification = () => {
  return (
    <section className='max-container'>
      <div className='max-w-3xl'>
        <Reveal>
          <p className='kicker flex items-center gap-3'>
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
            Credentials
          </p>
        </Reveal>
        <h1 className='head-text mt-4'>
          <TextReveal text='Professional' />{" "}
          <TextReveal text='Certifications' delay={0.15} gradient className='font-bold' />
        </h1>

        <Reveal delay={0.25}>
          <p className='mt-5 leading-relaxed text-slate-600 dark:text-slate-300'>
            A clearer view of my learning path across analytics, cloud, backend
            engineering, and AI. Each item links out where a public certificate or
            official program page is available.
          </p>
        </Reveal>
      </div>

      <div className='mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {certificates.map((certificate, index) => (
          <Reveal delay={(index % 3) * 0.08} key={certificate.title}>
            <TiltCard className='h-full'>
              <article className='card-surface card-hover group flex h-full flex-col justify-between p-7'>
                <div>
                  <div className='mb-6 flex items-start justify-between gap-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:from-primary-dark/15 dark:to-secondary-dark/15 dark:text-primary-dark'>
                      <FiAward className='h-6 w-6' />
                    </div>
                    <span className='rounded-full border border-slate-200 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:text-slate-400'>
                      {certificate.category}
                    </span>
                  </div>

                  <h2 className='font-display text-xl font-semibold text-slate-900 dark:text-slate-100'>
                    {certificate.title}
                  </h2>
                  <div className='mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400'>
                    <span>{certificate.organization}</span>
                    <span className='h-1 w-1 rounded-full bg-slate-400' />
                    <span className='font-mono text-xs'>{certificate.date}</span>
                  </div>
                  <p className='mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                    {certificate.summary}
                  </p>
                </div>

                <div className='mt-6'>
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 font-display text-sm font-semibold text-primary transition-opacity hover:opacity-80 dark:text-primary-dark'
                    >
                      View credential
                      <FiArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </a>
                  ) : (
                    <span className='font-display text-sm font-semibold text-slate-400 dark:text-slate-500'>
                      Credential available on request
                    </span>
                  )}
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certification;
