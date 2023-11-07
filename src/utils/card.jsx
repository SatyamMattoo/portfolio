import React from "react";

export const Card = ({
  index,
  title,
  icon,
  description,
  github,
  app,
  about,
}) => {
  return (
    <div className="lg:w-[45%] w-[100%] m-1 md:m-3 card-gradient p-2 rounded-[20px] hover:scale-105">
      <div className=" rounded-[20px] p-2 md:py-5 md:px-12 min-h-[220px] flex justify-evenly items-center flex-col gap-4">
        <div className="flex items-center justify-center">
          {icon ? (
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain mr-5"
            />
          ) : (
            <></>
          )}
          <h3 className="text-gray-100 text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
        <p className="text-start text-gray-50">{description}</p>
        <div className="flex w-full">
          {github ? (
            <button className="btn bg-gray-300 text-blue-600 hover:bg-white ">
              <a href={github} target="_blank" rel="noopener noreferrer">
                Git
              </a>
            </button>
          ) : (
            <></>
          )}
          {app ? (
            <button className="btn bg-fuchsia-600 text-gray-300 hover:text-white hover:bg-fuchsia-500">
              <a href={app} target="_blank" rel="noopener noreferrer">
                App
              </a>
            </button>
          ) : (
            <></>
          )}
          {about ? (
            <button className="btn hover:text-white hover:bg-blue-700 ">
              <a href={about} target="_blank" rel="noopener noreferrer">
                More...
              </a>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
