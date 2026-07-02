import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi";
import { soundoff, soundon } from "../assets/icons";

// Import audio tracks
import sakura from "../assets/sakura.mp3";
import panchayat from "../assets/panchayat-title-anurag-saikia-60314.mp3";

const tracks = [
  { id: 1, name: "Sakura", file: sakura },
  { id: 2, name: "Panchayat", file: panchayat },
];

const MusicSwitch = ({ isPlaying, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [audio] = useState(() => {
    const audioInstance = new Audio();
    audioInstance.preload = 'metadata'; // Only load metadata initially
    return audioInstance;
  });
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.4;

    // Add error handling
    const handleError = (e) => {
      console.error('Audio loading error:', e);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    if (isPlaying) {
      // Only fetch the audio file once the user actually presses play,
      // instead of preloading ~5MB on every Home page visit.
      if (!audio.src) {
        audio.src = tracks[0].file;
      }
      setIsLoading(true);
      audio.play().catch(err => {
        console.error('Playback failed:', err);
        setIsLoading(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.pause();
    };
  }, [isPlaying, audio]);

  // Add auto-close functionality
  useEffect(() => {
    if (showTrackList) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout to close menu after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setShowTrackList(false);
      }, 3000);
    }

    // Cleanup timeout on unmount or when showTrackList changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showTrackList]);

  const handleTrackChange = (index) => {
    audio.pause();
    audio.src = tracks[index].file;
    setCurrentTrack(index);
    if (isPlaying) {
      audio.play();
    }
    // Close menu after track change
    setShowTrackList(false);
  };

  // Add mouse enter/leave handlers for the track list
  const handleTrackListMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleTrackListMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowTrackList(false);
    }, 3000);
  };

  return (
    <motion.div
      className="absolute bottom-6 left-6 z-30 sm:bottom-8 sm:left-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 dark:from-purple-600 dark:to-pink-600"
          animate={{
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => setShowTrackList(!showTrackList)}
            className="relative p-2 bg-white/10 dark:bg-black/20 backdrop-blur-[2px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            aria-label={showTrackList ? "Hide track list" : "Show track list"}
            aria-expanded={showTrackList}
          >
            <motion.div
              className="w-6 h-6 text-white flex items-center justify-center"
              animate={{ rotate: showTrackList ? 180 : 0 }}
            >
              <FiChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
          <motion.button
            onClick={onToggle}
            className="relative p-4 bg-white/10 dark:bg-black/20 backdrop-blur-[2px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
          >
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <motion.img
                src={isPlaying ? soundon : soundoff}
                alt="music control"
                className="w-8 h-8"
                animate={{
                  rotate: isPlaying ? [0, 360] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "linear",
                }}
              />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {showTrackList && (
            <motion.div
              className="absolute bottom-full left-0 mb-2 bg-white/10 dark:bg-black/20 backdrop-blur-[2px] rounded-lg p-2 min-w-[200px] border border-white/10 dark:border-white/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={handleTrackListMouseEnter}
              onMouseLeave={handleTrackListMouseLeave}
            >
              {tracks.map((track, index) => (
                <motion.button
                  key={track.id}
                  onClick={() => handleTrackChange(index)}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm text-white hover:bg-white/10 dark:hover:bg-white/5 transition-colors ${currentTrack === index ? "bg-white/20 dark:bg-white/10" : ""
                    }`}
                  whileHover={{ x: 5 }}
                >
                  {track.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 dark:bg-black/20 backdrop-blur-[2px] text-white px-3 py-1 rounded-md text-sm whitespace-nowrap border border-white/10 dark:border-white/5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? tracks[currentTrack].name : "Music Off"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

MusicSwitch.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MusicSwitch; 