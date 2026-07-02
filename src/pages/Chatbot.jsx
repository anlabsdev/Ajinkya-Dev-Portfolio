import { useEffect, useRef, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowLeft, BsRobot } from "react-icons/bs";
import { FiMaximize2, FiMinimize2, FiSend, FiUser } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../components";
import { RobotHipHopDancing } from "../models/robot_hip_hop_dancing";
import { canCreateWebGLContext } from "../utils/webgl";

const ModelFallback = () => (
  <div className='flex h-full items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-[8px]' />
);

const knowledgeBase = {
  skills: {
    development: [
      "React, Next.js, JavaScript, TypeScript, Tailwind CSS",
      "Python, Django, FastAPI, SQL, MongoDB, Supabase",
      "Git, GitHub, APIs, responsive UI, and deployment workflows",
    ],
    ai: [
      "Personalised RAG systems",
      "Voice agents",
      "AI automation workflows",
      "Social media AI managers",
      "AI software builder workflows with LLMs, LangGraph, n8n, and Supabase",
    ],
    tools: [
      "VS Code / Cursor",
      "Git / GitHub",
      "Postman",
      "Figma",
      "Canva",
      "n8n",
      "LangGraph",
      "Hugging Face",
      "OpenAI / Claude / Mistral",
    ],
  },
  projects: [
    "Android Apps: Subreminder App, Trip Tally App, Woodify Icon App",
    "ANLABS: AI automation, SaaS, and Android product studio (https://anlabstudio.com/)",
    "Web Projects: Toothsi Dental Clinic, Subreminder Web App",
    "AI Automation: Personalised RAG, Voice Agent, Social Media AI Manager",
  ],
  certifications: [
    "Google Data Analytics Professional Certificate",
    "AWS Certified Solutions Architect",
    "Machine Learning Specialization",
    "Microsoft Certified: Azure Developer Associate",
    "Python Django Development",
    "C, C++ Programming",
  ],
  contact: {
    email: "ajinkya.narke@gmail.com",
    linkedin: "linkedin.com/in/ajinkya-narke",
    github: "github.com/AjinkyaNarke",
    phone: "+91 7020404952",
  },
};

const formatList = (items) => items.map((item) => `- ${item}`).join("\n");

const generateResponse = (userInput) => {
  const input = userInput.toLowerCase();

  if (input.includes("skill") || input.includes("expertise") || input.includes("tech")) {
    return `Ajinkya's core skills:\n\nDevelopment:\n${formatList(knowledgeBase.skills.development)}\n\nAI and automation:\n${formatList(knowledgeBase.skills.ai)}`;
  }

  if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
    return `Current featured projects:\n\n${formatList(knowledgeBase.projects)}`;
  }

  if (input.includes("certification") || input.includes("certificate") || input.includes("certified")) {
    return `Certifications and learning:\n\n${formatList(knowledgeBase.certifications)}`;
  }

  if (input.includes("contact") || input.includes("reach") || input.includes("email") || input.includes("phone")) {
    return `You can contact Ajinkya here:\n\nEmail: ${knowledgeBase.contact.email}\nLinkedIn: ${knowledgeBase.contact.linkedin}\nGitHub: ${knowledgeBase.contact.github}\nPhone: ${knowledgeBase.contact.phone}`;
  }

  if (input.includes("tool") || input.includes("software") || input.includes("stack")) {
    return `Tools Ajinkya uses:\n\n${formatList(knowledgeBase.skills.tools)}`;
  }

  return "I can help with Ajinkya's skills, projects, certifications, tools, and contact details. Try asking: what AI automation projects has Ajinkya built?";
};

const quickPrompts = ["Skills", "Projects", "AI Automation", "Contact"];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello. I'm Ajinkya's AI assistant. Ask me about skills, projects, AI automation, certifications, or contact details.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasWebGL] = useState(canCreateWebGLContext);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (messageText = input) => {
    const trimmed = messageText.trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      text: trimmed,
      isUser: true,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          text: generateResponse(trimmed),
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className='min-h-screen bg-white dark:bg-slate-950 px-4 pb-8 pt-[92px] text-slate-900 dark:text-slate-100 sm:px-6 lg:px-8'>
      <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]'>
        <div className='flex min-h-[calc(100vh-132px)] min-w-0 flex-col overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)]'>
          <header className='relative border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6'>
            <button
              type='button'
              onClick={() => window.history.back()}
              className='absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-300 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700'
              aria-label='Go back'
            >
              <BsArrowLeft />
            </button>

            <div className='mx-12 text-center'>
              <h1 className='font-poppins text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl'>
                Ajinkya's AI Assistant
              </h1>
              <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
                Portfolio answers, fast and focused.
              </p>
            </div>

            <button
              type='button'
              onClick={() => setIsMinimized((current) => !current)}
              className='absolute right-4 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-300 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700'
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
            </button>
          </header>

          {!isMinimized && (
            <>
              <div className='flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 px-4 py-3 sm:px-6'>
                {quickPrompts.map((prompt) => (
                  <button
                    type='button'
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className='rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300'
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div
                ref={messagesContainerRef}
                className='flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-6 sm:px-6'
              >
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className={`flex max-w-[92%] gap-3 rounded-[8px] p-4 shadow-lg sm:max-w-[78%] ${
                        message.isUser
                          ? "self-end bg-blue-600 text-white"
                          : "self-start border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      <div className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/10'>
                        {message.isUser ? <FiUser /> : <BsRobot />}
                      </div>
                      <p className='whitespace-pre-wrap break-words text-sm leading-6 sm:text-base'>
                        {message.text}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div className='self-start rounded-[8px] border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 px-4 py-3 text-sm text-slate-600 dark:text-slate-300'>
                    Typing...
                  </div>
                )}
              </div>

              <form
                className='border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5'
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage();
                }}
              >
                <div className='relative'>
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder='Ask about projects, AI, skills...'
                    className='h-12 w-full rounded-[8px] border border-slate-300 dark:border-slate-700 bg-white pr-14 pl-4 text-slate-900 outline-none transition-colors focus:border-blue-500'
                  />
                  <button
                    type='submit'
                    className='absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700'
                    aria-label='Send message'
                  >
                    <FiSend />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        <aside className='hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:sticky lg:top-24 lg:block'>
          <div className='relative mb-6 h-[250px] w-full overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/50 rounded-[8px]'>
            <ErrorBoundary fallback={<ModelFallback />}>
              {hasWebGL ? (
                <Canvas camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[0, 0, 1]} intensity={2.5} />
                  <pointLight position={[5, 10, 0]} intensity={2} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                  <Suspense fallback={<Loader />}>
                    <RobotHipHopDancing
                      position={[0, -1.6, 0]}
                      rotation={[0, 0, 0]}
                      scale={[1.8, 1.8, 1.8]}
                    />
                  </Suspense>
                </Canvas>
              ) : (
                <ModelFallback />
              )}
            </ErrorBoundary>
          </div>

          <h2 className='font-poppins text-2xl font-semibold text-slate-900 dark:text-slate-50'>
            Interactive 3D AI Assistant
          </h2>
          <p className='mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300'>
            Feel free to ask the assistant anything about my skills, projects, certifications, and experience. You can also interact with the 3D robot model above!
          </p>

          <div className='mt-8 space-y-4'>
            {["AI Automation", "Software Engineering", "Open to Full-Time"].map((item) => (
              <div
                key={item}
                className='border-l-2 border-blue-500 pl-4 text-sm font-semibold text-slate-700 dark:text-slate-200'
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Chatbot;
