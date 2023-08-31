import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
