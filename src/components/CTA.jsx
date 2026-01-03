import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta bg-white/10 dark:bg-black/20 backdrop-blur-sm'>
      <p className='cta-text text-text-light dark:text-text-dark'>
        Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link to='/contact' className='btn bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary text-white'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
