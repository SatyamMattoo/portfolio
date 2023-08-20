import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Arrow } from "./Components/Arrow";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

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