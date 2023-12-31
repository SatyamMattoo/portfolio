import React from "react";
import { Navbar } from "./Navbar";
import { Socials } from "./Socials";
import { logo, smLogo } from "../assets";

export const Header = () => {
  return (
    <header className="h-20 nav-gradient fixed top-0 flex justify-center w-full text-white z-40">
      <div className="container flex mx-auto h-full items-center justify-center md:justify-between overflow-hidden">
        <img
          src={logo}
          alt=""
          className="inset-0 h-[4rem] w-[12rem] object-cover hidden lg:block"
        />
        <img
          src={smLogo}
          alt=""
          className="h-20 object-cover hidden md:block lg:hidden"
        />
        <Navbar />
        <Socials />
      </div>
    </header>
  );
};
