import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

const footerNav = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/studio", label: "Studio" },
  { to: "/certification", label: "Certifications" },
  { to: "/connect", label: "Connect" },
  { to: "/contact", label: "Contact" },
];

const footerSocials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/AjinkyaNarke" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/ajinkya-narke" },
  { name: "Medium", icon: FaMedium, url: "https://medium.com/@ajinkya.narke21" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://api.whatsapp.com/send?phone=917020404952" },
  { name: "Email", icon: MdEmail, url: "mailto:ajinkya.narke@gmail.com" },
];

const Footer = () => {
  return (
    <footer className='border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'>
      <Reveal className='mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 md:px-12 lg:px-16'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-sm'>
            <p className='font-display text-2xl font-bold tracking-tight text-text-light dark:text-text-dark'>
              Ajinkya<span className='text-gradient'> Narke</span>
            </p>
            <p className='mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400'>
              Software Engineer & AI Software Builder. Building Android apps,
              web products, and AI automation systems at ANLABS.
            </p>
            <div className='mt-5 flex items-center gap-2'>
              {footerSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}
                    className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-800 dark:text-slate-300 dark:hover:border-primary-dark dark:hover:text-primary-dark'
                  >
                    <Icon className='text-[17px]' />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className='grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3'>
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className='text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary-dark'
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row'>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            © 2026 <strong className='text-slate-700 dark:text-slate-200'>Ajinkya Narke</strong>. All rights reserved.
          </p>
          <p className='font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'>
            React · Three.js · Motion
          </p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
