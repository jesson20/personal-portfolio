import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from'./components/About';
import Technologies from './components/Technologies';;
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-black overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      <div className="container mx-auto px-8">
        
      <Navbar />

      <div id="Intro">
      <Hero />
      </div>

      <div id="About">
      <About />
      </div>

      <div id="Experiences">
      <Experiences />
      </div>

      <div id="Projects">
      <Projects />
      </div>

      <div id="TSkills">
      <Technologies />
      </div>

      <div id="Contact">
      <Contact />
      </div>

      </div>
      
    </div>
  );
};

export default App
