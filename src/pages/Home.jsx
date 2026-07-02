import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { canCreateWebGLContext } from "../utils/webgl";

import {
  Counter,
  HomeInfo,
  Loader,
  Marquee,
  MusicSwitch,
  Reveal,
  SectionHeading,
  TextReveal,
  TiltCard,
  MagneticButton,
} from "../components";
import { projects, skills } from "../constants";
import { Bird, Island, Plane, Sky } from "../models";

const SceneFallback = () => (
  <div className='w-full h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-800' />
);

const stats = [
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 6, suffix: "+", label: "Android apps" },
  { value: 4, suffix: "+", label: "Years building" },
  { value: 5, suffix: "+", label: "AI systems" },
];

const featured = projects.filter((p) => p.link).slice(0, 3);

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [hasWebGL] = useState(canCreateWebGLContext);
  const { isDarkMode } = useTheme();

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
      {/* ── 3D hero ─────────────────────────────────── */}
      <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <ErrorBoundary fallback={<SceneFallback />}>
          {hasWebGL ? (
            <Canvas
              className={`w-full h-screen bg-transparent ${
                isRotating ? "cursor-grabbing" : "cursor-grab"
              }`}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                  position={[0, 50, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                />
                <hemisphereLight
                  skyColor={isDarkMode ? '#1a2b6b' : '#b1e1ff'}
                  groundColor={isDarkMode ? '#0f172a' : '#000000'}
                  intensity={1}
                />

                <Bird />
                <Sky isRotating={isRotating} />
                <Island
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                  position={islandPosition}
                  rotation={[0.1, 4.7077, 0]}
                  scale={islandScale}
                />
                <Plane
                  position={biplanePosition}
                  rotation={[0, 20.1, 0]}
                  scale={biplaneScale}
                />
              </Suspense>
            </Canvas>
          ) : (
            <SceneFallback />
          )}
        </ErrorBoundary>

        {/* drag hint + scroll indicator */}
        <div className='pointer-events-none absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-3'>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className='font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]'
          >
            Drag to explore · Scroll for more
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className='flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/70 p-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
          >
            <div className='h-2 w-1 rounded-full bg-white/90' />
          </motion.div>
        </div>

        <MusicSwitch
          isPlaying={isPlayingMusic}
          onToggle={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </section>

      {/* ── intro statement + stats ─────────────────── */}
      <section className='bg-grid relative overflow-hidden'>
        <div className='mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-28 md:px-12 lg:px-16'>
          <p className='kicker flex items-center gap-3'>
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
            Ajinkya Narke — Software Engineer & AI Builder
          </p>

          <h1 className='head-text mt-6 max-w-4xl'>
            <TextReveal text='I design, build, and ship' />
            <br />
            <TextReveal text='apps, AI systems & products.' delay={0.25} gradient />
          </h1>

          <Reveal delay={0.3} className='mt-8 max-w-2xl'>
            <p className='text-lg leading-8 text-slate-600 dark:text-slate-300'>
              From Android apps on the Play Store to RAG assistants, voice
              agents, and full product launches under my studio{" "}
              <a
                href='https://anlabstudio.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-primary underline-offset-4 hover:underline dark:text-primary-dark'
              >
                ANLABS
              </a>
              . I turn practical ideas into working software, fast.
            </p>
          </Reveal>

          <Reveal delay={0.4} className='mt-10 flex flex-wrap items-center gap-4'>
            <MagneticButton>
              <Link
                to='/projects'
                className='btn inline-flex w-auto items-center gap-2'
              >
                Explore my work
                <FiArrowRight className='h-4 w-4' />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-primary-dark dark:hover:text-primary-dark'
              >
                Let's talk
              </Link>
            </MagneticButton>
          </Reveal>

          {/* stats */}
          <div className='mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4'>
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className='card-surface p-6 text-center sm:p-8'
              >
                <p className='font-display text-4xl font-bold text-text-light dark:text-text-dark sm:text-5xl'>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className='mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400'>
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── skills marquee ──────────────────────────── */}
      <section className='border-y border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950/60'>
        <Marquee speed={32}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 dark:border-slate-800 dark:bg-card-dark'
            >
              <img
                src={skill.imageUrl}
                alt=''
                className='h-5 w-5 object-contain'
                loading='lazy'
              />
              <span className='whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-200'>
                {skill.name}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ── featured work ───────────────────────────── */}
      <section className='mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-16'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <SectionHeading kicker='Featured work' title='Recent launches' />
          <Reveal delay={0.2}>
            <Link
              to='/projects'
              className='group inline-flex items-center gap-2 font-display text-sm font-semibold text-primary dark:text-primary-dark'
            >
              All projects
              <FiArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Reveal>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          {featured.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.1}>
              <TiltCard className='h-full'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-surface card-hover group flex h-full flex-col justify-between p-6'
                >
                  <div>
                    <div className='flex items-start justify-between'>
                      <div className='block-container h-12 w-12'>
                        <div className={`btn-back rounded-[10px] ${project.theme}`} />
                        <div className='btn-front flex items-center justify-center rounded-[10px] bg-white dark:bg-slate-800'>
                          <img
                            src={project.iconUrl}
                            alt=''
                            className='h-1/2 w-1/2 object-contain'
                          />
                        </div>
                      </div>
                      <FiArrowUpRight className='h-5 w-5 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary dark:group-hover:text-primary-dark' />
                    </div>
                    <h3 className='mt-6 font-display text-xl font-semibold text-text-light dark:text-text-dark'>
                      {project.name}
                    </h3>
                    <p className='mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400'>
                      {project.description}
                    </p>
                  </div>
                  <p className='mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'>
                    {project.category}
                  </p>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── bottom CTA banner ───────────────────────── */}
      <section className='mx-auto w-full max-w-7xl px-4 pb-24 sm:px-8 md:px-12 lg:px-16'>
        <Reveal className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px]'>
          <div className='relative rounded-3xl bg-white/95 px-6 py-14 text-center dark:bg-slate-950/95 sm:px-12 sm:py-20'>
            <div className='bg-grid absolute inset-0 opacity-60' aria-hidden />
            <div className='relative'>
              <h2 className='subhead-text'>
                <TextReveal text='Have an idea worth building?' />
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300'>
                I'm open to full-time roles, freelance projects, and AI
                automation work. Let's make something people actually use.
              </p>
              <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
                <MagneticButton>
                  <Link to='/contact' className='btn inline-flex w-auto items-center gap-2'>
                    Start a conversation
                    <FiArrowRight className='h-4 w-4' />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
