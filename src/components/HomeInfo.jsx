import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import HandAnimation from "./HandAnimation";
import { CTA } from "../components";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>AJinkya</span>
        👋
        <br />
        A Software Developer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center text-text-light dark:text-text-dark'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center text-text-light dark:text-text-dark'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center text-text-light dark:text-text-dark'>
          Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box flex flex-col items-center justify-between min-h-[140px] py-4'>
        <div className='text-container mb-4'>
          <p className='font-medium text-center sm:text-xl'>
            Check out my professional certifications <br /> and continuous learning journey
          </p>
        </div>

        <Link to='/certification' className='neo-brutalism-white neo-btn w-full max-w-[200px]'>
          View Certifications
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 6) {
    return (
      <div className='info-box flex flex-col items-center justify-between min-h-[140px] py-4'>
        <div className='text-container mb-4'>
          <p className='font-medium text-center sm:text-xl'>
            Let's connect and build something amazing together! <br/> Join my professional network
          </p>
        </div>

        <Link to='/connect' className='neo-brutalism-white neo-btn w-full max-w-[200px]'>
          Connect with me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
