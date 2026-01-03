import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
        name: "HTML 5",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: "https://cdn.worldvectorlogo.com/logos/django.svg",
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
        name: "FastAPI",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Freelance Full Stack Developer",
        company_name: "Self-Employed",
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Freelancer icon
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Present",
        points: [
            "Developed and maintained web applications for various clients using React.js, Node.js, and modern web technologies.",
            "Implemented responsive designs and ensured cross-browser compatibility for client projects.",
            "Collaborated with clients to understand requirements and deliver customized solutions.",
            "Managed multiple projects simultaneously while maintaining high-quality standards.",
            "Integrated various APIs and third-party services to enhance application functionality.",
            "Provided technical consultation and guidance to clients on best practices and technology choices."
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "GitHub",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png", // GitHub icon
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Contributed to various open-source projects on GitHub, focusing on React.js and web development.",
            "Collaborated with developers worldwide to improve code quality and add new features.",
            "Fixed bugs and implemented enhancements in popular open-source repositories.",
            "Participated in code reviews and provided constructive feedback to other contributors.",
            "Documented code changes and maintained project documentation.",
            "Helped new contributors understand project structure and contribution guidelines."
        ],
    },
    {
        title: "Junior Software Engineer",
        company_name: "Jurassic Software Services",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", // Computer icon
        iconBg: "#b7e4c7",
        date: "2018 - 2020",
        points: [
            "Developed and maintained web applications using React.js, Node.js, and modern web technologies.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions.",
            "Implemented responsive designs and ensured cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback to other developers.",
            "Worked on bug fixes and feature implementations for existing applications.",
            "Assisted in the development of new features and improvements to existing systems."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/ajinkyanarke/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/ajinkyanarke/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/ajinkyanarke/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/ajinkyanarke/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/ajinkyanarke/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/ajinkyanarke/project_ai_summarizer',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-purple',
        name: 'Real-time Object Detection System',
        description: 'High-performance computer vision system using YOLOv8 for real-time object detection and tracking, with applications in surveillance, retail analytics, and autonomous systems.',
        link: 'https://github.com/ajinkyanarke/real-time-object-detection',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Facial Recognition & Emotion Analysis',
        description: 'Advanced facial recognition system with emotion detection capabilities using deep learning models, featuring real-time analysis and multi-face tracking in complex environments.',
        link: 'https://github.com/ajinkyanarke/facial-emotion-analyzer',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Medical Image Analysis Platform',
        description: 'AI-powered medical imaging platform using computer vision for disease detection, tumor segmentation, and medical image classification with high accuracy and explainability.',
        link: 'https://github.com/ajinkyanarke/medical-image-analyzer',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'AR-Based Product Visualization',
        description: 'Augmented reality application using computer vision for real-time product visualization, allowing users to see products in their space with accurate lighting and shadows.',
        link: 'https://github.com/ajinkyanarke/ar-product-visualizer',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Gesture Control Interface',
        description: 'Innovative gesture recognition system using computer vision and deep learning, enabling touchless interaction with applications through hand gestures and body movements.',
        link: 'https://github.com/ajinkyanarke/gesture-control-interface',
    }
];

export const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    organization: "Coursera",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics"
  },
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2025",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    title: "Machine Learning Specialization",
    organization: "Coursera",
    date: "2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    organization: "Microsoft",
    date: "2023",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://www.microsoft.com/en-us/learning/certification-azure-developer.aspx"
  },
  {
    title: "Python Django Dev.",
    organization: "Naresh Technologies,Hyderabad",
    date: "2018",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://nareshit.com/python-django-training/"
  },
  {
    title: "C, C++ Programming",
    organization: "Disha Computer Institute,Kolhapur     ",
    date: "2014",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  }
];