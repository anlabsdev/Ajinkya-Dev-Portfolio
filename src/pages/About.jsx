import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FiArrowUpRight } from "react-icons/fi";

import { CTA, Reveal, AboutScene, SectionHeading, TextReveal, TypeWriter } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const toolGroups = [
  {
    title: "Development",
    items: ["VS Code / Cursor", "Git / GitHub", "Postman", "Supabase"],
    accent: "bg-blue-500",
  },
  {
    title: "AI Builder Stack",
    items: ["n8n", "LangGraph", "Hugging Face", "OpenAI / Claude / Mistral"],
    accent: "bg-emerald-500",
  },
  {
    title: "Design & Planning",
    items: ["Figma", "Adobe Photoshop", "Canva", "Notion / Trello"],
    accent: "bg-indigo-500",
  },
];

const aiFocus = [
  {
    title: "Personalised RAG",
    description: "Knowledge-grounded assistants using private data, embeddings, and context-aware retrieval.",
  },
  {
    title: "Voice Agents",
    description: "Conversational workflows for calls, lead capture, appointment flows, and customer support.",
  },
  {
    title: "AI Software Builder",
    description: "Fast prototypes and production-ready apps that combine software engineering with modern AI tools.",
  },
  {
    title: "ANLABS",
    description: "A focused studio for AI automation, SaaS, Android apps, product pages, and launch-ready experiments.",
  },
  {
    title: "Social Media AI Systems",
    description: "Content planning, generation, scheduling support, and repeatable automation pipelines.",
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Computer Science",
    school: "KIT College of Engineering, Kolhapur",
    date: "2012 - 2017",
    accent: "#3B82F6",
    points: [
      "Focused on software development, databases, and web technologies.",
      "Graduated with First Class Distinction.",
      "Built a strong foundation in practical engineering and problem solving.",
    ],
  },
  {
    title: "Higher Secondary Education (HSC)",
    school: "Maharashtra State Board",
    date: "2011 - 2012",
    accent: "#8B5CF6",
    points: [
      "Specialized in Physics, Chemistry, and Mathematics.",
      "Strengthened core analytical and computing fundamentals.",
    ],
  },
];

const timelineContentStyle = {
  background: "rgba(255, 255, 255, 0.94)",
  border: "1px solid rgba(148, 163, 184, 0.24)",
  borderBottom: "6px solid",
  borderRadius: "16px",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
};

const About = () => {
  return (
    <section className='max-container'>
      <div className='grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center'>
        <div>
          <Reveal>
            <p className='kicker flex items-center gap-3'>
              <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
              About
            </p>
          </Reveal>
          <h1 className='head-text mt-4'>
            <TextReveal text="Hello, I'm" />{" "}
            <TypeWriter text='Ajinkya Narke' gradient delay={0.5} className='font-bold' />
          </h1>

          <Reveal delay={0.25}>
            <p className='mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300'>
              Software Engineer and AI Software Builder based in India, specializing
              in technical education through hands-on learning and building
              applications. I also build ANlabs, an AI automation, SaaS, and Android
              product studio where I turn practical ideas into launched digital
              products. Currently open for full-time opportunities and exciting
              projects that challenge my skills and allow me to create impactful
              solutions.
            </p>
          </Reveal>
        </div>

        <Reveal direction='left' delay={0.15}>
          <AboutScene />
        </Reveal>
      </div>

      <section className='mt-20'>
        <div className='grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center'>
          <SectionHeading
            kicker='Product studio'
            title='ANLABS'
            description='ANlabs is my main product studio for AI automation, SaaS, and Android app experiments. It brings together app launches, automation workflows, product landing pages, and upcoming software ideas under one focused brand.'
          />

          <Reveal delay={0.15}>
            <a
              href='https://anlabstudio.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='card-surface card-hover group block p-7'
            >
              <div className='flex items-start justify-between'>
                <span className='font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'>
                  Website
                </span>
                <FiArrowUpRight className='h-5 w-5 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary dark:group-hover:text-primary-dark' />
              </div>
              <span className='mt-2 block break-words font-display text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary-dark'>
                anlabstudio.com
              </span>
              <span className='mt-3 block text-sm leading-6 text-slate-600 dark:text-slate-300'>
                Explore the studio, featured apps, AI automation work, and product
                roadmap.
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className='mt-20'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <SectionHeading kicker='Capabilities' title='My Skills' />
          <Reveal delay={0.2}>
            <span className='font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'>
              {skills.length} tools & counting
            </span>
          </Reveal>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {skills.map((skill, index) => (
            <Reveal
              delay={(index % 5) * 0.06}
              className='card-surface card-hover group p-4 text-center'
              key={skill.name}
            >
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='h-8 w-8 object-contain'
                />
              </div>
              <p className='mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200'>
                {skill.name}
              </p>
              <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500'>
                {skill.type}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='mt-20'>
        <SectionHeading
          kicker='Workflow'
          title='Tools & Software'
          description='I use a focused set of development, AI, design, and planning tools to move from idea to working product quickly.'
        />

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {toolGroups.map((group, index) => (
            <Reveal
              delay={index * 0.08}
              key={group.title}
              className='card-surface card-hover p-7'
            >
              <h3 className='font-display text-lg font-semibold text-slate-800 dark:text-slate-100'>
                {group.title}
              </h3>
              <ul className='mt-5 space-y-3'>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300'
                  >
                    <span className={`h-2 w-2 rounded-full ${group.accent}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='mt-20'>
        <SectionHeading
          kicker='AI systems'
          title='AI & Automation Expertise'
          description='I build AI systems around real workflows: retrieval, voice, automation, and app-building support for faster delivery.'
        />

        <div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {aiFocus.map((item, index) => (
            <Reveal
              delay={(index % 2) * 0.08}
              key={item.title}
              className='card-surface card-hover border-l-4 !border-l-primary p-7 dark:!border-l-primary-dark'
            >
              <h3 className='font-display text-lg font-semibold text-slate-800 dark:text-slate-100'>
                {item.title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='mt-20'>
        <SectionHeading
          kicker='Journey'
          title='Work Experience'
          description="I've worked in IT companies and as a freelancer, building practical software and collaborating with teams to ship reliable solutions."
        />

        <div className='mt-12'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                  boxShadow: "0 0 0 4px #fff, 0 0 0 8px rgba(59, 130, 246, 0.1)",
                }}
                icon={
                  <div className='flex h-full w-full items-center justify-center'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='h-[60%] w-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  ...timelineContentStyle,
                  borderBottomColor: experience.iconBg,
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.94)",
                }}
                className='dark:content-dark'
              >
                <h3 className='font-display text-xl font-semibold text-slate-900 dark:text-slate-100'>
                  {experience.title}
                </h3>
                <p className='text-base font-medium text-slate-600 dark:text-slate-300'>
                  {experience.company_name}
                </p>

                <ul className='my-5 ml-5 list-disc space-y-2'>
                  {experience.points.slice(0, 4).map((point) => (
                    <li
                      key={point}
                      className='pl-1 text-sm font-normal text-slate-600 dark:text-slate-300'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      <section className='mt-20'>
        <SectionHeading kicker='Foundation' title='Education' />

        <div className='mt-12'>
          <VerticalTimeline>
            {education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                date={item.date}
                iconStyle={{
                  background: item.accent,
                  boxShadow: "0 0 0 4px #fff, 0 0 0 8px rgba(59, 130, 246, 0.1)",
                }}
                icon={
                  <div className='flex h-full w-full items-center justify-center'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/2103/2103633.png'
                      alt=''
                      className='h-[60%] w-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  ...timelineContentStyle,
                  borderBottomColor: item.accent,
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.94)",
                }}
                className='dark:content-dark'
              >
                <h3 className='font-display text-xl font-semibold text-slate-900 dark:text-slate-100'>
                  {item.title}
                </h3>
                <p className='text-base font-medium text-slate-600 dark:text-slate-300'>
                  {item.school}
                </p>

                <ul className='my-5 ml-5 list-disc space-y-2'>
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className='pl-1 text-sm font-normal text-slate-600 dark:text-slate-300'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      <CTA />
    </section>
  );
};

export default About;
