import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (<>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster/>
  </>

  );
};

export default App;
