import { useState, useRef, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMinimize2, FiMaximize2 } from 'react-icons/fi';
import { BsRobot, BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { SmallRobotCrowdAnimated } from '../models';
import { Loader } from '../components';

const ChatbotContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-top: 80px;
  background: transparent;
  color: #e2e8f0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
  }
`;

const ChatSection = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(203, 213, 225, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 140px);
    margin: 0.5rem;
    border-radius: 0.75rem;
  }
`;

const ModelSection = styled.div`
  width: 50%;
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background: url('/bot.png') center center/cover no-repeat;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin: 0.5rem;
    border-radius: 0.75rem;
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const ChatHeader = styled.div`
  text-align: center;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(203, 213, 225, 0.2);
  border-radius: 1rem 1rem 0 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #64748b;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

const BackButton = styled(motion.button)`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #3b82f6;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f8fafc;
    transform: translateY(-50%) scale(1.1);
    border-color: #3b82f6;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-behavior: smooth;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(203, 213, 225, 0.3);
    border-radius: 3px;
  }
`;

const MessageBubble = styled(motion.div)`
  max-width: 70%;
  padding: 1.2rem;
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 85%;
    padding: 1rem;
    gap: 0.75rem;
  }

  ${props => props.isUser ? `
    align-self: flex-end;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border-bottom-right-radius: 0.25rem;
  ` : `
    align-self: flex-start;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    border-bottom-left-radius: 0.25rem;
  `}
`;

const MessageContent = styled.div`
  flex: 1;
  line-height: 1.6;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const MessageIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isUser ? 'rgba(255, 255, 255, 0.2)' : 'rgba(30, 41, 59, 0.8)'};
  flex-shrink: 0;
  font-size: 1.2rem;
  color: ${props => props.isUser ? 'white' : '#60a5fa'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(203, 213, 225, 0.2);
  border-radius: 0 0 1rem 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 1.2rem 4rem 1.2rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid #e2e8f0;
  background: white;
  color: #1e293b;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 3.5rem 1rem 1.25rem;
    font-size: 1rem;
    border-radius: 0.75rem;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SendButton = styled(motion.button)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);

  @media (max-width: 768px) {
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 8px -1px rgba(59, 130, 246, 0.3);
  }
`;

const TypingIndicator = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  width: fit-content;
  margin-top: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  span {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    border-radius: 50%;
  }
`;

const MinimizeButton = styled(motion.button)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #3b82f6;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f8fafc;
    transform: translateY(-50%) scale(1.1);
    border-color: #3b82f6;
  }
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Ajinkya's  AI assistant. I can tell you about my skills, projects, tools, certifications, and how to contact me. What would you like to know?",
      isUser: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base for the AI assistant
  const knowledgeBase = {
    skills: {
      development: [
        "Full Stack Development",
        "React.js & Next.js",
        "Node.js & Express",
        "Python & Django",
        "Database Management (SQL & NoSQL)",
        "SQL Databases",
        "Vector Databases"
      ],
      ai: [
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "TensorFlow & PyTorch",
        "AI Model Development"
      ],
      tools: [
        "VS Code / Cursor",
        "Git / GitHub",
        "Docker & Kubernetes",
        "AWS & Google Cloud",
        "Postman",
        "Figma",
        "Adobe Photoshop",
        "Canva",
        "n8n (Workflow Automation)",
        "LangGraph (LLM Orchestration)",
        "Hugging Face",
        "Supabase",
        "LLMs (OpenAI, Claude, Mistral)"
      ]
    },
    projects: [
      {
        name: "3D Portfolio",
        description: "An interactive 3D portfolio built with React Three Fiber, showcasing my work and skills in an immersive environment.",
        tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"]
      },
      {
        name: "AI-Powered Chatbot",
        description: "An intelligent chatbot system that can understand and respond to user queries using advanced NLP techniques.",
        tech: ["Python", "TensorFlow", "NLP", "React"]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023"
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google",
        year: "2023"
      },
      {
        name: "TensorFlow Developer Certificate",
        issuer: "Google",
        year: "2023"
      }
    ],
    contact: {
      email: "ajinkya.narke@example.com",
      linkedin: "linkedin.com/in/ajinkya-narke",
      github: "github.com/ajinkya-narke",
      phone: "+917020404952"
    }
  };

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Skills related queries
    if (input.includes("skill") || input.includes("expertise") || input.includes("proficient")) {
      return `I have expertise in several areas:\n\nDevelopment Skills:\n${knowledgeBase.skills.development.join(", ")}\n\nAI & ML Skills:\n${knowledgeBase.skills.ai.join(", ")}\n\nTools & Technologies:\n${knowledgeBase.skills.tools.join(", ")}`;
    }
    
    // Projects related queries
    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      return `Here are some of my notable projects:\n\n${knowledgeBase.projects.map(project => 
        `${project.name}:\n${project.description}\nTechnologies: ${project.tech.join(", ")}`
      ).join("\n\n")}`;
    }
    
    // Certifications related queries
    if (input.includes("certification") || input.includes("certificate") || input.includes("certified")) {
      return `I hold the following certifications:\n\n${knowledgeBase.certifications.map(cert => 
        `${cert.name} (${cert.issuer}, ${cert.year})`
      ).join("\n")}`;
    }
    
    // Contact related queries
    if (input.includes("contact") || input.includes("reach") || input.includes("email") || input.includes("phone")) {
      return `You can reach me through:\n\nEmail: ${knowledgeBase.contact.email}\nLinkedIn: ${knowledgeBase.contact.linkedin}\nGitHub: ${knowledgeBase.contact.github}\nPhone: ${knowledgeBase.contact.phone}`;
    }
    
    // Tools related queries
    if (input.includes("tool") || input.includes("software") || input.includes("technology")) {
      return `I work with various tools and technologies:\n\nDevelopment Tools:\n${knowledgeBase.skills.tools.join(", ")}\n\nAI Tools:\n${knowledgeBase.skills.ai.join(", ")}`;
    }
    
    // Default response for unrecognized queries
    return "I can tell you about my skills, projects, tools, certifications, and contact information. What specific aspect would you like to know more about?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Generate AI response based on user input
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateResponse(input),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatbotContainer>
      <ChatSection>
        <ChatHeader>
          <BackButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.history.back()}
          >
            <BsArrowLeft />
          </BackButton>
          <h1>Ajinkya Narke's AI Assistant</h1>
          <p>Ask me anything about Ajinkya Narke</p>
          <MinimizeButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
          </MinimizeButton>
        </ChatHeader>

        <MessagesContainer>
          <AnimatePresence>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                isUser={message.isUser}
              >
                <MessageIcon isUser={message.isUser}>
                  {message.isUser ? <FiUser /> : <BsRobot />}
                </MessageIcon>
                <MessageContent>{message.text}</MessageContent>
              </MessageBubble>
            ))}
          </AnimatePresence>

          {isTyping && (
            <TypingIndicator
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              />
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }}
              />
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
              />
            </TypingIndicator>
          )}
          <div ref={messagesEndRef} />
        </MessagesContainer>

        <InputContainer>
          <MessageInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <SendButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
          >
            <FiSend />
          </SendButton>
        </InputContainer>
      </ChatSection>

      <ModelSection>
        <CanvasContainer>
          <Canvas
            camera={{
              position: [0, 0.2, 7],
              fov: 38,
              near: 0.1,
              far: 1000,
            }}
            shadows
            gl={{ preserveDrawingBuffer: true }}
          >
            <directionalLight position={[0, 5, 5]} intensity={3.5} color={'#e6f0ff'} castShadow />
            <ambientLight intensity={1.5} color={'#e6f0ff'} />
            <pointLight position={[0, 2, 3]} intensity={1.8} color={'#fffbe6'} castShadow />
            <pointLight position={[0, 0, 7]} intensity={1.2} color={'#ffffff'} />
            <spotLight
              position={[0, 6, 6]}
              angle={0.22}
              penumbra={0.9}
              intensity={2.8}
              color={'#e6f0ff'}
              castShadow
            />
            <Suspense fallback={<Loader />}>
              <SmallRobotCrowdAnimated
                currentAnimation="idle"
                position={[2, -1.5, 0]}
                angle={0.15}
                rotation={[0, -3.14, 0]}
                scale={[0.55, 0.55, 0.55]}
                onClick={(e) => {"Hello"}}
                onPointerOver={(e) => {"Ask Me Anything"}}
                onPointerOut={(e) => {}}
                onPointerMove={(e) => {}}
              />
            </Suspense>
          </Canvas>
        </CanvasContainer>
      </ModelSection>
    </ChatbotContainer>
  );
};

export default Chatbot;
