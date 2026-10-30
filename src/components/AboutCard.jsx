import React from 'react'
import { IoIosLaptop } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutCard = ({ title, desc }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <>
      <div
        ref={ref}
        className={`border p-3 border-gray-200 rounded-lg w-2xs shadow-lg flex flex-col items-center group anim-hidden anim-fade-up ${inView ? "anim-visible" : ""}`}
      >
        <div className='w-full flex flex-col items-center text-center'>

          <div className='border-4 group-hover:rotate-y-360 duration-800 w-28 h-28 border-[#00c2ff] rounded-full flex justify-center items-center mb-3'>
            <FaLaptopCode size={75} color='#00c2ff' />
          </div>

          <h1 className='text-2xl'>{title}</h1>
          <p className='mt-3'>{desc}</p>

        </div>
      </div>

    </>
  )
}

export default AboutCard