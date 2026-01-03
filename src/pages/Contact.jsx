import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { LowPolyManWorkingAtATableWithALaptop } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import SplashCursor from "../components/Splash_Cursor/SplashCursor/SplashCursor";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
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
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
            navigate('/thank-you');
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen p-4 sm:p-8 transition-colors duration-300'>
      {alert.show && <Alert {...alert} />}
      <SplashCursor />
      <div className='flex-1 min-w-[50%] flex flex-col relative z-10'>
        <div className='glassmorphism-card p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20'>
          <h1 className='head-text text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-black text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]'>
            Get in Touch
          </h1>
          <p className='text-base sm:text-xl text-gradient bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-400/80 dark:to-purple-400/80 bg-clip-text text-transparent mt-2 sm:mt-4'>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-5 sm:gap-7 mt-8 sm:mt-14'
          >
            <label className='text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base'>
              Name
              <input
                type='text'
                name='name'
                className='input bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-blue-100 dark:border-slate-600 focus:border-blue-400 dark:focus:border-blue-300 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400'
                placeholder='John'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base'>
              Email
              <input
                type='email'
                name='email'
                className='input bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-blue-100 dark:border-slate-600 focus:border-blue-400 dark:focus:border-blue-300 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400'
                placeholder='John@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-blue-100 dark:border-slate-600 focus:border-blue-400 dark:focus:border-blue-300 transition-all duration-300 rounded-lg sm:rounded-xl shadow-sm text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400'
                placeholder='Write your thoughts here...'
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='btn bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto h-[250px] sm:h-[350px] md:h-[450px] mt-6 sm:mt-8 lg:mt-0 lg:ml-8 relative z-10'>
        <div className='glassmorphism-card h-full rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-blue-100/20 dark:border-slate-700/20 overflow-hidden'>
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <LowPolyManWorkingAtATableWithALaptop
                currentAnimation={currentAnimation}
                position={[1, -3, 0]}
                rotation={[0, -1.2, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
