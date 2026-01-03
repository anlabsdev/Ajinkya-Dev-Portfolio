import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Certification, Chatbot, Connect, ThankYou } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20 dark:bg-background-dark transition-colors duration-300'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
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
      </Router>
    </main>
  );
};

export default App;
