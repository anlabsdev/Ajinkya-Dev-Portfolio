import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='relative flex flex-col max-container bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen p-8 transition-colors duration-300'>
      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20'>
        <h1 className='head-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Ajinkya Narke
          </span>{" "}
          👋
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-slate-300'>
          <p className='text-lg'>
            Software Engineer based in India, specializing in technical education through hands-on learning and building applications. Currently open for full-time opportunities and exciting projects that challenge my skills and allow me to create impactful solutions.
          </p>
        </div>
      </div>

      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 mt-8'>
        <h3 className='subhead-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='flex flex-col items-center w-24' key={skill.name}>
              <div className='block-container w-20 h-20 transform hover:scale-110 transition-transform duration-300'>
                <div className='btn-back rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50' />
                <div className='btn-front rounded-xl flex justify-center items-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div className='mt-3 text-center'>
                <p className='text-sm font-semibold text-slate-800 dark:text-slate-200'>{skill.name}</p>
                <p className='text-xs text-slate-600 dark:text-slate-400'>{skill.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 mt-8'>
        <h3 className='subhead-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>Tools & Software</h3>
        
        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-slate-300'>
          <p className='text-lg'>
            I leverage a variety of professional tools and software to deliver high-quality solutions and streamline my development workflow.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Development Tools */}
          <div className='group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1'>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4'>Development Tools</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                VS Code / Cursor
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                Git / GitHub
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                Postman
              </li>
            </ul>
          </div>

          {/* Design Tools */}
          <div className='group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1'>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4'>Design Tools</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-purple-500'></span>
                Figma
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-purple-500'></span>
                Adobe Photoshop
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-purple-500'></span>
                Canva
              </li>
            </ul>
          </div>

          {/* Project Management */}
          <div className='group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1'>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4'>Project Management</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-indigo-500'></span>
                Jira / Trello
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-indigo-500'></span>
                Notion / Confluence
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-indigo-500'></span>
                Slack / Discord
              </li>
            </ul>
          </div>

          {/* AI Tools */}
          <div className='group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 transform hover:-translate-y-1'>
            <h4 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4'>AI Tools</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                n8n (Workflow Automation)
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                LangGraph (LLM Orchestration)
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                Hugging Face
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                Supabase
              </li>
              <li className='flex items-center gap-3 text-slate-700 dark:text-slate-300'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                LLMs (OpenAI, Claude, Mistral)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 mt-8'>
        <h3 className='subhead-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>AI & Machine Learning Expertise</h3>
        
        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-slate-300'>
          <p className='text-lg'>
            Specialized in cutting-edge AI technologies and machine learning solutions, focusing on practical applications and innovative implementations.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* AI Development */}
          <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 hover:shadow-xl transition-all duration-300'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl'></div>
            <h4 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 relative z-10'>AI Development</h4>
            <ul className='space-y-4 relative z-10'>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Natural Language Processing</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Building advanced NLP models and chatbots</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Computer Vision</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Image recognition and object detection systems</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Deep Learning</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Neural networks and model architecture design</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Database Management</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>SQL databases and Vector databases for AI applications</p>
                </div>
              </li>
            </ul>
          </div>

          {/* AI Tools & Frameworks */}
          <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 hover:shadow-xl transition-all duration-300'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-2xl'></div>
            <h4 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 relative z-10'>AI Tools & Frameworks</h4>
            <ul className='space-y-4 relative z-10'>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>TensorFlow & PyTorch</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Advanced model development and deployment</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>OpenAI & Hugging Face</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Integration with state-of-the-art AI models</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Cloud AI Services</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>AWS SageMaker, Google AI Platform</p>
                </div>
              </li>
            </ul>
          </div>

          {/* AI Applications */}
          <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 hover:shadow-xl transition-all duration-300'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full blur-2xl'></div>
            <h4 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 relative z-10'>AI Applications</h4>
            <ul className='space-y-4 relative z-10'>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Generative AI</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Text, image, and code generation systems</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>AI Automation</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Workflow optimization and process automation</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>AI Integration</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Seamless AI integration into existing systems</p>
                </div>
              </li>
            </ul>
          </div>

          {/* AI Research & Innovation */}
          <div className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 hover:shadow-xl transition-all duration-300'>
            <div className='absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-2xl'></div>
            <h4 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 relative z-10'>AI Research & Innovation</h4>
            <ul className='space-y-4 relative z-10'>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Model Optimization</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Performance tuning and efficiency improvements</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>AI Ethics</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Responsible AI development and implementation</p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0'></span>
                <div>
                  <p className='font-medium text-slate-800 dark:text-slate-200'>Emerging Technologies</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>Staying current with latest AI advancements</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 mt-8'>
        <h3 className='subhead-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-slate-300'>
          <p className='text-lg'>
            I've worked in IT companies and as a Freelancer, continuously leveling up my skills and
            teaming up with smart people. Here's my professional journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ 
                  background: experience.iconBg,
                  boxShadow: '0 0 0 4px #fff, 0 0 0 8px rgba(59, 130, 246, 0.1)'
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transform: index === 0 ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgba(255, 255, 255, 0.9)',
                }}
                className="dark:content-dark"
              >
                <div>
                  <h3 className='text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-slate-600 dark:text-slate-300 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='glassmorphism-card p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 mt-8'>
        <h3 className='subhead-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600 dark:text-slate-300'>
          <p className='text-lg'>
            My academic journey has equipped me with a strong foundation in technology and software development. Here's my educational background:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2012 - 2017"
              iconStyle={{ 
                background: '#3B82F6',
                boxShadow: '0 0 0 4px #fff, 0 0 0 8px rgba(59, 130, 246, 0.1)'
              }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                    alt="university"
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: '#3B82F6',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(255, 255, 255, 0.9)',
              }}
              className="dark:content-dark"
            >
              <div>
                <h3 className='text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-xl font-poppins font-semibold'>
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className='text-slate-600 dark:text-slate-300 font-medium text-base' style={{ margin: 0 }}>
                  KIT College of Engineering, Kolhapur
                </p>
                <p className='text-slate-500 dark:text-slate-400 text-sm mt-1' style={{ margin: 0 }}>
                  Affiliated to Shivaji University, Kolhapur
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Specialized in Computer Science and Engineering with focus on Software Development
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Graduated with First Class Distinction
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Active member of the Computer Science Department's Technical Club
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Participated in various technical symposiums and coding competitions
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Completed major project on "Web Development and Database Management"
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Attended workshops on emerging technologies and programming languages
                </li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="2011 - 2012"
              iconStyle={{ 
                background: '#8B5CF6',
                boxShadow: '0 0 0 4px #fff, 0 0 0 8px rgba(139, 92, 246, 0.1)'
              }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                    alt="college"
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: '#8B5CF6',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgba(255, 255, 255, 0.9)',
              }}
              className="dark:content-dark"
            >
              <div>
                <h3 className='text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-xl font-poppins font-semibold'>
                  Higher Secondary Education (HSC)
                </h3>
                <p className='text-slate-600 dark:text-slate-300 font-medium text-base' style={{ margin: 0 }}>
                  Maharashtra State Board
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Specialized in Physics, Chemistry, and Mathematics
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Achieved excellence in Computer Science and Mathematics
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Led the Science Club and organized technical workshops
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Participated in National Science Exhibition and secured first position
                </li>
                <li className='text-slate-600 dark:text-slate-300 font-normal pl-1 text-sm'>
                  Active member of the Mathematics Olympiad team
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <div className='mt-8'>
        <CTA />
      </div>
    </section>
  );
};

export default About;
