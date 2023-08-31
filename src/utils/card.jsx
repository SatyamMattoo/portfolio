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
    <div
      className="md:w-[45%] w-full m-1 md:m-3 card-gradient p-[1px] rounded-[20px]"
    >
      <div
        className=" rounded-[20px] p-2 md:py-5 md:px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
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
          {github ? <button className="btn"><a href={github} target="_blank" rel="noopener noreferrer">Git</a></button> : <></>}
          {app ? <button className="btn"><a href={app} target="_blank" rel="noopener noreferrer">App</a></button> : <></>}
          {about ? <button className="btn"><a href={about} target="_blank" rel="noopener noreferrer">More...</a></button> : <></>}
        </div>
      </div>
    </div>
  );
};
