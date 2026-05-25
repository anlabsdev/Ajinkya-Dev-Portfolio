import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ProfileCard from "../components/profilecard/ProfileCard/ProfileCard";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/AjinkyaNarke",
    description: "Projects, experiments, and source code.",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ajinkya-narke",
    description: "Professional updates and opportunities.",
  },
  {
    name: "Medium",
    icon: FaMedium,
    url: "https://medium.com/@ajinkya.narke21",
    description: "Articles, notes, and technical writing.",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/AjinkyaNarke",
    description: "Problem solving and coding practice.",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://api.whatsapp.com/send?phone=917020404952",
    description: "Quick project or collaboration chat.",
  },
  {
    name: "Email",
    icon: MdEmail,
    url: "mailto:ajinkya.narke@gmail.com",
    description: "Best for detailed opportunities.",
  },
];

const Connect = () => {
  return (
    <section className='max-container bg-white dark:bg-slate-950'>
      <div className='grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start'>
        <div>
          <p className='font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-primary dark:text-primary-dark'>
            Connect
          </p>
          <h1 className='head-text mt-3'>Let's Connect</h1>
          <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300'>
            Reach out for full-time roles, freelance work, AI automation
            projects, or product ideas that need a practical builder.
          </p>

          <div className='mt-10 grid gap-4 sm:grid-cols-2'>
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group border border-slate-200 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20'
                  key={link.name}
                >
                  <div className='flex items-start gap-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-slate-100 text-slate-800 transition-colors group-hover:bg-blue-50 group-hover:text-primary dark:bg-slate-800 dark:text-slate-100 dark:group-hover:text-primary-dark'>
                      <Icon className='h-6 w-6' />
                    </div>
                    <div>
                      <h2 className='font-poppins text-lg font-semibold text-slate-900 dark:text-slate-100'>
                        {link.name}
                      </h2>
                      <p className='mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className='flex justify-center lg:sticky lg:top-28'>
          <div className='w-full max-w-[360px]'>
            <ProfileCard
              avatarUrl='/src/components/profilecard/ProfileCard/Ajinkya.jpg'
              name='Ajinkya A. Narke'
              title='Software Engineer and AI Software Builder'
              handle='ajinkya.narke'
              status='Available for Opportunities'
              contactText='Message'
              showUserInfo={true}
              showBehindGradient={true}
              enableTilt={true}
              onContactClick={() =>
                window.open("https://api.whatsapp.com/send?phone=917020404952", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
