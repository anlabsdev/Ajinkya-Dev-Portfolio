import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { certificates } from "../constants";

const Certification = () => {
  return (
    <section className='max-container bg-white dark:bg-slate-950'>
      <div className='max-w-3xl'>
        <p className='font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primary-dark'>
          Credentials
        </p>
        <h1 className='head-text mt-3'>
          Professional{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Certifications
          </span>
        </h1>

        <p className='mt-4 leading-relaxed text-slate-600 dark:text-slate-300'>
          A clearer view of my learning path across analytics, cloud, backend
          engineering, and AI. Each item links out where a public certificate or
          official program page is available.
        </p>
      </div>

      <div className='mt-14 grid gap-5 md:grid-cols-2'>
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className='group flex h-full flex-col justify-between border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20'
          >
            <div>
              <div className='mb-6 flex items-start justify-between gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-[8px] bg-blue-50 text-primary dark:bg-slate-800 dark:text-primary-dark'>
                  <FiAward className='h-6 w-6' />
                </div>
                <span className='rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:text-slate-400'>
                  {certificate.category}
                </span>
              </div>

              <h2 className='font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100'>
                {certificate.title}
              </h2>
              <div className='mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400'>
                <span>{certificate.organization}</span>
                <span className='h-1 w-1 rounded-full bg-slate-400' />
                <span>{certificate.date}</span>
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
                  className='inline-flex items-center gap-2 font-poppins text-sm font-semibold text-primary transition-opacity hover:opacity-80 dark:text-primary-dark'
                >
                  View credential
                  <FiArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </a>
              ) : (
                <span className='font-poppins text-sm font-semibold text-slate-400 dark:text-slate-500'>
                  Credential available on request
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certification;
