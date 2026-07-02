import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { CTA, Reveal, TextReveal, TiltCard } from "../components";
import { projects } from "../constants";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className='max-container'>
      <div className='max-w-3xl'>
        <Reveal>
          <p className='kicker flex items-center gap-3'>
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
            Selected work
          </p>
        </Reveal>
        <h1 className='head-text mt-4'>
          <TextReveal text='My' />{" "}
          <TextReveal text='Projects' delay={0.15} gradient className='font-bold' />
        </h1>

        <Reveal delay={0.25}>
          <p className='mt-5 leading-relaxed text-slate-600 dark:text-slate-300'>
            A focused mix of Android apps, web projects, and AI automation builds.
            Filter by category to see the kind of problems each project solves.
          </p>
        </Reveal>
      </div>

      {/* category filter pills */}
      <Reveal delay={0.3} className='mt-10 flex flex-wrap gap-2.5'>
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-4 py-2 font-display text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary dark:border-slate-800 dark:text-slate-300 dark:hover:border-primary-dark/50 dark:hover:text-primary-dark"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId='filter-pill'
                  className='absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary'
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className='relative'>
                {category}
                <span className={`ml-2 font-mono text-[11px] ${isActive ? "text-white/80" : "text-slate-400 dark:text-slate-500"}`}>
                  {String(count).padStart(2, "0")}
                </span>
              </span>
            </button>
          );
        })}
      </Reveal>

      {/* animated project grid */}
      <motion.div layout className='my-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        <AnimatePresence mode='popLayout'>
          {visibleProjects.map((project) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className='h-full'>
                <article className='card-surface card-hover group flex h-full flex-col justify-between p-6'>
                  <div>
                    <div className='flex items-start justify-between gap-4'>
                      <div className='block-container h-12 w-12 shrink-0'>
                        <div className={`btn-back rounded-[10px] ${project.theme}`} />
                        <div className='btn-front flex items-center justify-center rounded-[10px] bg-white dark:bg-slate-800'>
                          <img
                            src={project.iconUrl}
                            alt=''
                            className='h-1/2 w-1/2 object-contain'
                          />
                        </div>
                      </div>
                      <span className='rounded-full border border-slate-200 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:text-slate-400'>
                        {project.category}
                      </span>
                    </div>

                    <h3 className='mt-6 font-display text-xl font-semibold text-text-light dark:text-text-dark'>
                      {project.name}
                    </h3>
                    <p className='mt-3 break-words text-sm leading-6 text-slate-500 dark:text-slate-400'>
                      {project.description}
                    </p>
                  </div>

                  <div className='mt-6 flex items-center gap-2 font-display text-sm'>
                    {!project.link ? (
                      <span className='font-semibold text-slate-400 dark:text-slate-500'>
                        Case study soon
                      </span>
                    ) : (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1.5 font-semibold text-primary transition-opacity hover:opacity-80 dark:text-primary-dark'
                      >
                        Open project
                        <FiArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <CTA />
    </section>
  );
};

export default Projects;
