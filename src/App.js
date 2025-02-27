import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
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
    </div>
  );
}

export default App;
