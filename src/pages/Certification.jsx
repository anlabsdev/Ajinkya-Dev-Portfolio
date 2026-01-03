import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useState, useEffect } from "react";

const CertificationCard = ({ index, title, organization, date, image, link }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="group bg-gradient-to-br from-white/90 to-white/50 dark:from-slate-900/90 dark:to-slate-800/50 p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 hover:border-slate-300/30 dark:hover:border-slate-600/30 cursor-pointer"
      onClick={() => window.open(link, "_blank")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 animate-pulse rounded-2xl" />
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm font-medium">{organization}</span>
            <span className="text-white text-sm font-medium">{date}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-slate-900 dark:text-white font-bold text-[24px] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-slate-600 dark:text-slate-300 text-[14px]">{organization}</span>
          <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500"></span>
          <span className="text-slate-600 dark:text-slate-300 text-[14px]">{date}</span>
        </div>
        <div className="mt-4">
          <button 
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl dark:shadow-slate-900/50"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, "_blank");
            }}
          >
            <span>View Certificate</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3176/3176355.png"
              alt="external link"
              className="w-4 h-4 object-contain transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Certification = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for certificates
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='max-container bg-gradient-to-br from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen py-20'>
      <motion.div 
        variants={textVariant()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className='head-text'>
          Professional{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Certifications
          </span>
        </h1>

        <p className='text-slate-600 dark:text-slate-300 mt-2 leading-relaxed'>
          I've earned several professional certifications that demonstrate my expertise and commitment to continuous learning. These certifications validate my skills and knowledge in various technologies and methodologies.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            className="mt-20 flex flex-wrap gap-7 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="bg-gray-200 dark:bg-slate-800 animate-pulse rounded-2xl sm:w-[360px] w-full h-[400px]"
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="mt-20 flex flex-wrap gap-7 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map((certificate, index) => (
              <CertificationCard
                key={`certificate-${index}`}
                index={index}
                {...certificate}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionWrapper(Certification, "certification");




