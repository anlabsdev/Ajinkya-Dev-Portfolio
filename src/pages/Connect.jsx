import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import ProfileCard from '../components/profilecard/ProfileCard/ProfileCard';

const Connect = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-12 h-12" />,
      url: 'https://github.com/AjinkyaNarke',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bgColor: 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 dark:hover:from-slate-700 dark:hover:via-slate-600 dark:hover:to-slate-500',
      description: 'Check out my projects and contributions',
      gradient: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-12 h-12" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 hover:from-blue-100 hover:via-blue-200 hover:to-blue-300 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 dark:hover:from-blue-800 dark:hover:via-blue-700 dark:hover:to-blue-600',
      description: 'Connect with me professionally on LinkedIn',
      gradient: 'from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600'
    },
    {
      name: 'Medium',
      icon: <FaMedium className="w-12 h-12" />,
      url: 'https://medium.com/@ajinkya.narke21',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      bgColor: 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 dark:hover:from-slate-700 dark:hover:via-slate-600 dark:hover:to-slate-500',
      description: 'Read my latest articles and thoughts',
      gradient: 'from-green-600 to-green-800 dark:from-green-400 dark:to-green-600'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="w-12 h-12" />,
      url: 'https://leetcode.com/AjinkyaNarke',
      color: 'hover:text-yellow-600 dark:hover:text-yellow-400',
      bgColor: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 hover:from-yellow-100 hover:via-yellow-200 hover:to-yellow-300 dark:from-yellow-900 dark:via-yellow-800 dark:to-yellow-700 dark:hover:from-yellow-800 dark:hover:via-yellow-700 dark:hover:to-yellow-600',
      description: 'View my coding solutions and progress',
      gradient: 'from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-12 h-12" />,
      url: 'https://api.whatsapp.com/send?phone=917020404952',
      color: 'hover:text-green-600 dark:hover:text-green-400',
      bgColor: 'bg-gradient-to-br from-green-50 via-green-100 to-green-200 hover:from-green-100 hover:via-green-200 hover:to-green-300 dark:from-green-900 dark:via-green-800 dark:to-green-700 dark:hover:from-green-800 dark:hover:via-green-700 dark:hover:to-green-600',
      description: 'Chat with me directly on WhatsApp',
      gradient: 'from-green-600 to-green-800 dark:from-green-400 dark:to-green-600'
    },
    {
      name: 'Email',
      icon: <MdEmail className="w-12 h-12" />,
      url: 'mailto:ajinkya.narke@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      bgColor: 'bg-gradient-to-br from-red-50 via-red-100 to-red-200 hover:from-red-100 hover:via-red-200 hover:to-red-300 dark:from-red-900 dark:via-red-800 dark:to-red-700 dark:hover:from-red-800 dark:hover:via-red-700 dark:hover:to-red-600',
      description: 'Get in touch directly via email',
      gradient: 'from-red-600 to-red-800 dark:from-red-400 dark:to-red-600'
    }
  ];

  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen p-4 sm:p-8 transition-colors duration-300'>
      {/* Left side - Social Links */}
      <div className='flex-1 min-w-[50%] flex flex-col relative z-10'>
        <div className='glassmorphism-card p-4 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20'>
          <h1 className='head-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-black text-[30px] sm:text-[40px] whitespace-nowrap'>
            Let's Connect
          </h1>
          <p className='text-base sm:text-xl text-gradient bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-400/80 dark:to-purple-400/80 bg-clip-text text-transparent mt-2 sm:mt-4'>
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8'>
            {socialLinks.map((link, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='flex flex-col items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 border-2 border-blue-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1' 
                key={link.name}
              >
                <div className='flex flex-col items-center gap-1 w-full'>
                  <div className='block-container w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mb-1'>
                    <div className={`btn-back rounded-lg sm:rounded-xl ${link.bgColor}`} />
                    <div className='btn-front rounded-lg sm:rounded-xl flex justify-center items-center'>
                      <div className={`${link.color} transition-colors duration-300 text-2xl sm:text-3xl`}>{link.icon}</div>
                    </div>
                  </div>
                  <h4 className='text-base sm:text-lg font-poppins font-semibold text-center text-slate-700 dark:text-slate-200'>{link.name}</h4>
                  <p className='text-slate-500 dark:text-slate-400 text-center text-xs sm:text-sm'>{link.description}</p>
                </div>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`mt-3 sm:mt-4 w-full inline-flex items-center justify-center px-0 py-2 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-r ${link.gradient} text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 relative group`}
                >
                  <span className='relative z-10'>Connect</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500'></div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Profile Card */}
      <div className='lg:w-1/2 w-full flex justify-center items-center mt-6 sm:mt-8 lg:mt-0 lg:ml-8 relative z-10'>
        <div className='w-full max-w-[280px] sm:max-w-md'>
          <ProfileCard
            avatarUrl="/src/components/profilecard/ProfileCard/Ajinkya.jpg"
            name="Ajinkya A. Narke"
            title="Software Engineer"
            handle="ajinkya.narke"
            status="Available for Opportunities"
            contactText="Let's Connect"
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            onContactClick={() => window.open('https://api.whatsapp.com/send?phone=917020404952', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Connect; 