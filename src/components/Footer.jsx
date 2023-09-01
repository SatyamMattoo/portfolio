import React from "react";
import { smLogo } from "../assets";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="nav-gradient md:h-[140px]">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src={smLogo} alt="" className="hidden lg:block" />
          <div className="address self-start md:self-center">
            <p>Kangra, Himachal Pradesh</p>
            <p>India</p>
          </div>
          <div className="contact  self-start md:self-center">
            <span className="text-gray-50">Phone:</span>{" "}
            <b className="text-gray-50">+91 7876740985</b>
            <p>
              Email: <strong>satyammattoo2003@gmail.com</strong>
            </p>
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
