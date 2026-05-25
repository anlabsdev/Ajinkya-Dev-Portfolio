import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const projectGroups = projects.reduce((groups, project) => {
    if (!groups[project.category]) {
      groups[project.category] = [];
    }

    groups[project.category].push(project);
    return groups;
  }, {});

  return (
    <section className='max-container bg-white dark:bg-slate-950'>
      <div className='max-w-3xl'>
        <p className='font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primary-dark'>
          Selected work
        </p>
        <h1 className='head-text mt-3'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>

        <p className='text-slate-600 dark:text-slate-300 mt-4 leading-relaxed'>
          A focused mix of Android apps, web projects, and AI automation builds.
          Each project is organized by the kind of problem it solves so the page
          feels easier to scan.
        </p>
      </div>

      <div className='my-16 space-y-16'>
        {Object.entries(projectGroups).map(([category, categoryProjects]) => (
          <section
            key={category}
            className='border-t border-slate-200 pt-8 dark:border-slate-800'
          >
            <div className='mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
              <h2 className='subhead-text'>{category}</h2>
              <span className='font-poppins text-sm font-semibold text-slate-400 dark:text-slate-500'>
                {String(categoryProjects.length).padStart(2, "0")} builds
              </span>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              {categoryProjects.map((project) => (
                <article
                  className='group w-full max-w-full border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-6'
                  key={project.name}
                >
                  <div className='flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start'>
                    <div className='block-container h-12 w-12 shrink-0'>
                      <div className={`btn-back rounded-[8px] ${project.theme}`} />
                      <div className='btn-front flex items-center justify-center rounded-[8px] bg-white dark:bg-slate-800'>
                        <img
                          src={project.iconUrl}
                          alt=''
                          className='h-1/2 w-1/2 object-contain'
                        />
                      </div>
                    </div>

                    <div className='min-w-0 max-w-full'>
                      <h3 className='font-poppins text-xl font-semibold text-text-light dark:text-text-dark'>
                        {project.name}
                      </h3>
                      <p className='mt-3 break-words text-sm leading-6 text-slate-500 dark:text-slate-400'>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className='mt-6 flex items-center gap-2 font-poppins text-sm'>
                    {!project.link ? (
                      <span className='font-semibold text-slate-400 dark:text-slate-500'>
                        Case study soon
                      </span>
                    ) : (
                      <>
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold text-primary transition-opacity hover:opacity-80 dark:text-primary-dark'
                        >
                          Open project
                        </a>
                        <img
                          src={arrow}
                          alt=''
                          className='h-4 w-4 object-contain transition-transform group-hover:translate-x-1'
                        />
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section>
  );
};

export default Projects;
