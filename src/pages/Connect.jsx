import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import { Reveal, TextReveal } from "../components";
import ProfileCard from "../components/profilecard/ProfileCard/ProfileCard";
import ajinkyaAvatar from "../components/profilecard/ProfileCard/Ajinkya.jpg";

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
    <section className='max-container'>
      <div className='grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start'>
        <div>
          <Reveal>
            <p className='kicker flex items-center gap-3'>
              <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
              Connect
            </p>
          </Reveal>
          <h1 className='head-text mt-4'>
            <TextReveal text="Let's" />{" "}
            <TextReveal text='Connect' delay={0.15} gradient className='font-bold' />
          </h1>
          <Reveal delay={0.25}>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300'>
              Browse my channels below and pick whichever one you already use —
              GitHub for code, LinkedIn for professional updates, or WhatsApp
              and Email for a quick message.
            </p>
            <p className='mt-3 max-w-2xl text-sm text-slate-500 dark:text-slate-400'>
              Prefer a direct message about a role or project?{" "}
              <Link to='/contact' className='font-semibold text-primary hover:underline dark:text-primary-dark'>
                Use the contact form instead.
              </Link>
            </p>
          </Reveal>

          <div className='mt-10 grid gap-4 sm:grid-cols-2'>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <Reveal delay={(index % 2) * 0.08 + 0.1} key={link.name}>
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card-surface card-hover group block p-5'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-primary dark:bg-slate-800 dark:text-slate-100 dark:group-hover:text-primary-dark'>
                        <Icon className='h-6 w-6' />
                      </div>
                      <div>
                        <h2 className='font-display text-lg font-semibold text-slate-900 dark:text-slate-100'>
                          {link.name}
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className='flex justify-center lg:sticky lg:top-28'>
          <div className='w-full max-w-[360px]'>
            <ProfileCard
              avatarUrl={ajinkyaAvatar}
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
