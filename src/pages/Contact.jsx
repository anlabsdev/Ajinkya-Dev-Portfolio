import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Loader, TextReveal } from "../components";
import SplashCursor from "../components/Splash_Cursor/SplashCursor/SplashCursor";
import useAlert from "../hooks/useAlert";
import { LowPolyManWorkingAtATableWithALaptop } from "../models";
import { canCreateWebGLContext } from "../utils/webgl";

const ModelFallback = () => (
  <div className='flex h-full items-center justify-center bg-slate-100 dark:bg-slate-900' />
);

const Contact = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [hasWebGL] = useState(canCreateWebGLContext);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ajinkya Narke",
          from_email: form.email,
          to_email: "ajinkya.narke@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message. I will get back to you soon.",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
            navigate("/thank-you");
          }, 2000);
        },
        () => {
          setLoading(false);
          setCurrentAnimation("idle");
          showAlert({
            show: true,
            text: "I did not receive your message. Please try again or email me directly.",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex min-h-screen flex-col p-4 transition-colors duration-300 lg:flex-row max-container sm:p-8'>
      {alert.show && <Alert {...alert} />}
      {hasWebGL && <SplashCursor />}

      <div className='relative z-10 flex min-w-[50%] flex-1 flex-col'>
        <div className='card-surface p-4 sm:p-8'>
          <p className='kicker flex items-center gap-3'>
            <span className='inline-block h-px w-8 bg-primary dark:bg-primary-dark' />
            Contact
          </p>
          <h1 className='head-text mt-4'>
            <TextReveal text='Get in' />{" "}
            <TextReveal text='Touch' delay={0.15} gradient className='font-bold' />
          </h1>
          <p className='mt-2 text-base text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg'>
            Have a question or want to work together? Feel free to reach out.
          </p>
          <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
            Prefer social or messaging apps?{" "}
            <Link to='/connect' className='font-semibold text-primary hover:underline dark:text-primary-dark'>
              See all my channels on Connect.
            </Link>
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex w-full flex-col gap-5 sm:mt-12 sm:gap-7'
          >
            <label className='text-sm font-semibold text-slate-600 dark:text-slate-300 sm:text-base'>
              Name
              <input
                type='text'
                name='name'
                className='input border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-500 shadow-sm transition-all duration-300 focus:border-blue-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 sm:text-base'
                placeholder='Your name'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className='text-sm font-semibold text-slate-600 dark:text-slate-300 sm:text-base'>
              Email
              <input
                type='email'
                name='email'
                className='input border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-500 shadow-sm transition-all duration-300 focus:border-blue-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 sm:text-base'
                placeholder='you@example.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className='text-sm font-semibold text-slate-600 dark:text-slate-300 sm:text-base'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-500 shadow-sm transition-all duration-300 focus:border-blue-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 sm:text-base'
                placeholder='Write your thoughts here...'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='btn bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:py-3 sm:text-base'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className='relative z-10 mt-6 h-[260px] w-full sm:mt-8 sm:h-[360px] md:h-[460px] lg:ml-8 lg:mt-0 lg:h-[520px] lg:w-1/2 lg:self-start'>
        <div className='card-surface h-full overflow-hidden bg-slate-50 dark:bg-slate-900'>
          <ErrorBoundary fallback={<ModelFallback />}>
            {hasWebGL ? (
              <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
                <directionalLight position={[0, 0, 1]} intensity={2.5} />
                <ambientLight intensity={1} />
                <pointLight position={[5, 10, 0]} intensity={2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                <Suspense fallback={<Loader />}>
                  <LowPolyManWorkingAtATableWithALaptop
                    currentAnimation={currentAnimation}
                    position={[0.65, -2.9, 0]}
                    rotation={[0, -1.2, 0]}
                    scale={[0.42, 0.42, 0.42]}
                  />
                </Suspense>
              </Canvas>
            ) : (
              <ModelFallback />
            )}
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default Contact;
