import React from "react";
import { Header } from "./components/Header";
import { Arrow } from "./components/Arrow";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Arrow />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
