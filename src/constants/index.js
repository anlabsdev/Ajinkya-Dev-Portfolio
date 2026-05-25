import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
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
        imageUrl: react,
        name: "React",
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
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        name: "Supabase",
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
        link: 'https://github.com/AjinkyaNarke',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ajinkya-narke',
    }
];

export const projects = [
    {
        category: 'Android Apps',
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Subreminder App',
        description: 'Android subscription reminder app for tracking recurring payments, renewal dates, and spending summaries.',
        link: 'https://subreminder-website.vercel.app/',
    },
    {
        category: 'Android Apps',
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Trip Tally App',
        description: 'Travel expense splitter for trips, groups, shared budgets, and quick settlement tracking.',
        link: 'https://triptally.vercel.app/',
    },
    {
        category: 'Android Apps',
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Woodify Icon App',
        description: 'Custom Android icon pack with a warm wood-inspired visual style for personalized home screens.',
        link: 'https://anlabs-dev.vercel.app/apps/woodfy-icon-pack',
    },
    {
        category: 'Android Apps',
        iconUrl: snapgram,
        theme: 'btn-back-orange',
        name: 'Luma Walls App',
        description: 'A curated premium wallpaper app for Android featuring sharp visual assets, custom theme collections, and seamless personalization options.',
        link: 'https://anlabs-dev.vercel.app/apps/luma-walls',
    },
    {
        category: 'Android Apps',
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Finder EV',
        description: 'An intelligent EV charging station locator app that helps users find available charging points by real-time location, connector type, and charging speeds.',
        link: '',
    },
    {
        category: 'Android Apps',
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Cute Counter App',
        description: 'An aesthetic event reminder and day counter app that tracks special days, anniversaries, and personal countdowns with cute widgets and themes.',
        link: '',
    },
    {
        category: 'Product Studio',
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'ANlabs',
        description: 'AI automation, SaaS, and Android product studio website showcasing launched apps, automation workflows, upcoming products, and Ajinkya\'s builder profile.',
        link: 'https://anlabs-dev.vercel.app/',
    },
    {
        category: 'Web Projects',
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'Toothsi Dental Clinic',
        description: 'Responsive dental clinic website focused on appointment discovery, treatment details, and clean patient navigation.',
        link: '',
    },
    {
        category: 'Web Projects',
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Subreminder Web App',
        description: 'Web experience for Subreminder with product pages, download routing, and app feature previews.',
        link: 'https://subreminder-website.vercel.app/',
    },
    {
        category: 'Web Projects',
        iconUrl: threads,
        theme: 'btn-back-purple',
        name: 'Best of Movies',
        description: 'A curated movie recommendation and discovery platform featuring advanced search, genre filters, and rating trends.',
        link: '',
    },
    {
        category: 'AI Automation',
        iconUrl: threads,
        theme: 'btn-back-purple',
        name: 'Personalised RAG',
        description: 'Retrieval-augmented AI assistant that answers from private knowledge bases with context-aware responses.',
        link: '',
    },
    {
        category: 'AI Automation',
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Voice Agent',
        description: 'Conversational AI voice workflow for calls, lead qualification, appointment handling, and customer support.',
        link: '',
    },
    {
        category: 'AI Automation',
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Social Media AI Manager',
        description: 'Automation system for content planning, post generation, scheduling support, and performance-focused social workflows.',
        link: '',
    },
    {
        category: 'Data Analytics',
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'Election 24 Data Analysis',
        description: 'Comprehensive data analytics project exploring voting patterns, demographic trends, and seat distributions for the 2024 elections using Python, SQL, and interactive dashboards.',
        link: '',
    }
];

export const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    organization: "Coursera",
    date: "2024",
    category: "Data Analytics",
    summary: "Hands-on analytics, spreadsheets, SQL, dashboards, and business decision workflows.",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics"
  },
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2025",
    category: "Cloud",
    summary: "Cloud architecture fundamentals for scalable, reliable, and secure application systems.",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    title: "Machine Learning Specialization",
    organization: "Coursera",
    date: "2025",
    category: "AI / ML",
    summary: "Core machine learning workflows, model training, evaluation, and applied AI concepts.",
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    organization: "Microsoft",
    date: "2023",
    category: "Cloud Development",
    summary: "Azure application development, integrations, deployment concepts, and cloud services.",
    link: "https://www.microsoft.com/en-us/learning/certification-azure-developer.aspx"
  },
  {
    title: "Python Django Development",
    organization: "Naresh Technologies, Hyderabad",
    date: "2018",
    category: "Backend",
    summary: "Python backend development, Django fundamentals, MVC patterns, and database-backed apps.",
    link: "https://nareshit.com/python-django-training/"
  },
  {
    title: "C, C++ Programming",
    organization: "Disha Computer Institute, Kolhapur",
    date: "2014",
    category: "Programming",
    summary: "Programming fundamentals, object-oriented thinking, data structures, and problem solving.",
    link: ""
  }
];
