import React from "react";
import { social } from "../constants/data";

export const Socials = () => {
  return (
    <div className="hidden lg:block md:block">
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          return (
            <li
              className={`flex justify-center items-center ${
                item.color ? item.color : "text-white"
              } ${item.colorHover ? item.colorHover : "hover:text-red-600"}`}
              key={index}
            >
              <a href={item.href} target="blank">{item.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
