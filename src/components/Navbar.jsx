import React from "react";
import { navigation } from "../constants/data";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li className="text-white hover:text-purple-700 cursor-pointer" key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={70}
                className="transition-all duration-400"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
