import React from "react";
import { twMerge } from "tailwind-merge";
import useMenuStore from "../../store";

export default function Contact({ setFormOpen }) {
  return (
    <div className={twMerge("h-full    w-screen flex flex-col py-60")}>
      <div className=' w-[70%] md:w-2/4 contact p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Ya sabes un <br /> poquito más sobre nosotros
        </h1>
        <p className='description-text mt-2'>
          pero si quieres saber más, llámanos, mándamos un mail o una paloma
          mensajera.
        </p>
        <span onClick={() => setFormOpen(true)} className='cta-text'>
          Paloma mensajera{" "}
        </span>
        {/* <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" /> */}
      </div>
    </div>
  );
}
