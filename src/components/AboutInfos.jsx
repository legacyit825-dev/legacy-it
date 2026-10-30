import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AboutInfos = ({ title, content, image, reverse = false }) => {
  const textAnim = useScrollAnimation();
  const imgAnim = useScrollAnimation();

  const textDir = reverse ? "anim-fade-right" : "anim-fade-left";
  const imgDir = reverse ? "anim-fade-left" : "anim-fade-right";

  return (
    <div
      className={`
        mx-6 md:mx-10
        flex flex-col
        overflow-hidden
        group
        mb-10    
        justify-center
        items-center
        gap-8
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      {/* Text */}
      <div
        ref={textAnim.ref}
        className={`w-full md:w-1/2 flex flex-col justify-center anim-hidden ${textDir} ${textAnim.inView ? "anim-visible" : ""}`}
      >
        <h1 className="text-2xl md:text-3xl text-center mb-3">{title}</h1>
        <p className="md:text-center text-justify">{content}</p>
      </div>

      {/* Image */}
      <div
        ref={imgAnim.ref}
        className={`w-full md:h-[400px] md:w-[400px] overflow-hidden rounded anim-hidden ${imgDir} anim-delay-200 ${imgAnim.inView ? "anim-visible" : ""}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-lg object-cover group-hover:scale-125"
        />
      </div>
    </div>
  );
};

export default AboutInfos;
