import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Footer, Navbar } from "./components";

// Lazy load all page components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Studio = lazy(() => import("./pages/Studio"));
const Certification = lazy(() => import("./pages/Certification"));
const Chatbot = lazy(() => import("./pages/Chatbot"));
const Connect = lazy(() => import("./pages/Connect"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400 font-medium">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <main className='overflow-x-hidden bg-slate-300/20 dark:bg-background-dark transition-colors duration-300'>
      <Router>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/studio' element={<Studio />} />
                    <Route path='/certification' element={<Certification />} />
                    <Route path='/chatbot' element={<Chatbot />} />
                    <Route path='/connect' element={<Connect />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/thank-you' element={<ThankYou />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
