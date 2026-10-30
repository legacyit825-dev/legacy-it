import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Cards = ({ heading, description, url, button, path }) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <>
      <div
        ref={ref}
        className={`rounded-lg p-6 shadow-md w-2xs hover:scale-[1.05] ease-in-out duration-500 overflow-hidden group anim-hidden anim-fade-up ${inView ? "anim-visible" : ""}`}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full md:h-[200px] cursor-pointer transition duration-500 ease-in-out transform group-hover:scale-110 rounded-lg h-auto"
            src={url}
            alt={heading}
          />
        </div>
        <h3 className="pt-5 text-2xl text-center font-normal text-gray-600 block duration-500 ease-in-out group-hover:text-sky-400">
          {heading}
        </h3>
        <p className="font-normal text-center text-gray-500 cursor-pointer duration-300 transition mt-2">
          {description}
        </p>
        <Link to={path}>
          <div className="flex justify-center mt-2">
            <button className="border-none p-3 rounded-lg shadow bg-[#00c2ff] text-white hover:bg-gray-800 duration-500 ease-in-out">
              {button}
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
