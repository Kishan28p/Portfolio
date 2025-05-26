
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Skills />
      <section id="projects">
        <Projects />
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
