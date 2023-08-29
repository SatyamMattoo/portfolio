import React from "react";
import { Navbar } from "./Navbar";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header className="h-20 bg-black fixed top-0 items-center w-full text-white z-10">
      <div className="container flex mx-auto h-full items-center justify-between">
        <Navbar/>
        <Socials/>  
      </div>
    </header>
  );
};
