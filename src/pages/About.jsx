import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
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
    title: "ANlabs Product Studio",
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
  borderRadius: "8px",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
};

const About = () => {
  return (
    <section className='max-container bg-white dark:bg-slate-950'>
      <div className='max-w-3xl'>
        <p className='font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primary-dark'>
          About
        </p>
        <h1 className='head-text mt-3'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Ajinkya Narke
          </span>
        </h1>

        <p className='mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300'>
          Software Engineer and AI Software Builder based in India, specializing
          in technical education through hands-on learning and building
          applications. I also build ANlabs, an AI automation, SaaS, and Android
          product studio where I turn practical ideas into launched digital
          products. Currently open for full-time opportunities and exciting
          projects that challenge my skills and allow me to create impactful
          solutions.
        </p>
      </div>

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <div className='grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center'>
          <div>
            <p className='font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primary-dark'>
              Product studio
            </p>
            <h2 className='subhead-text mt-3'>ANlabs</h2>
            <p className='mt-4 text-slate-600 dark:text-slate-300'>
              ANlabs is my main product studio for AI automation, SaaS, and
              Android app experiments. It brings together app launches,
              automation workflows, product landing pages, and upcoming
              software ideas under one focused brand.
            </p>
          </div>

          <a
            href='https://anlabs-dev.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='group border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-slate-800 dark:bg-slate-900'
          >
            <span className='font-poppins text-sm font-semibold text-slate-400 dark:text-slate-500'>
              Website
            </span>
            <span className='mt-2 block break-words font-poppins text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary-dark'>
              anlabs-dev.vercel.app
            </span>
            <span className='mt-3 block text-sm leading-6 text-slate-600 dark:text-slate-300'>
              Explore the studio, featured apps, AI automation work, and product
              roadmap.
            </span>
          </a>
        </div>
      </section>

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <h2 className='subhead-text'>My Skills</h2>
          <span className='font-poppins text-sm font-semibold text-slate-400 dark:text-slate-500'>
            Practical stack
          </span>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {skills.map((skill) => (
            <div
              className='group border border-slate-200 bg-white p-4 text-center shadow-[0_14px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20'
              key={skill.name}
            >
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-[8px] bg-slate-50 dark:bg-slate-800'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='h-8 w-8 object-contain'
                />
              </div>
              <p className='mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200'>
                {skill.name}
              </p>
              <p className='mt-1 text-xs text-slate-500 dark:text-slate-400'>
                {skill.type}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <h2 className='subhead-text'>Tools & Software</h2>
        <p className='mt-4 max-w-3xl text-slate-600 dark:text-slate-300'>
          I use a focused set of development, AI, design, and planning tools to
          move from idea to working product quickly.
        </p>

        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className='border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900'
            >
              <h3 className='font-poppins text-lg font-semibold text-slate-800 dark:text-slate-100'>
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
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <h2 className='subhead-text'>AI & Automation Expertise</h2>
        <p className='mt-4 max-w-3xl text-slate-600 dark:text-slate-300'>
          I build AI systems around real workflows: retrieval, voice,
          automation, and app-building support for faster delivery.
        </p>

        <div className='mt-8 grid gap-5 md:grid-cols-2'>
          {aiFocus.map((item) => (
            <div
              key={item.title}
              className='border-l-4 border-primary bg-slate-50 p-6 dark:border-primary-dark dark:bg-slate-900'
            >
              <h3 className='font-poppins text-lg font-semibold text-slate-800 dark:text-slate-100'>
                {item.title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <h2 className='subhead-text'>Work Experience</h2>
        <p className='mt-4 max-w-3xl text-slate-600 dark:text-slate-300'>
          I've worked in IT companies and as a freelancer, building practical
          software and collaborating with teams to ship reliable solutions.
        </p>

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
                <h3 className='font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100'>
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

      <section className='mt-16 border-t border-slate-200 pt-10 dark:border-slate-800'>
        <h2 className='subhead-text'>Education</h2>

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
                <h3 className='font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100'>
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

      <div className='mt-12'>
        <CTA />
      </div>
    </section>
  );
};

export default About;
