import React from "react";
import { twMerge } from "tailwind-merge";

export default function Contact({ count }) {
  return (
    <div
      className={twMerge(
        "h-screen overflow-y-hidden hide-scrollbar  w-screen top-0 left-0 flex flex-col   absolute pointer-events-none transition-all ease-in-out duration-200 opacity-0",
        count === 7 && "relative opacity-100 pointer-events-auto top-0"
      )}
    >
      <img src={"/images/banner.png"} className='w-full h-[60vh]' />
      {/* Main content section */}
      <div className='bg-white w-2/4 p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='text-purple-600 text-6xl'>
          Ya sabes un poquito más sobre nosotros
        </h1>
        <p className='text-black text-xl mt-4'>
          pero si quieres saber más, llámanos, mándamos un mail o una paloma
          mensajera.
        </p>
        <img src='' alt='dummy img for now' className='bg-gray-200 h-[40vh]' />
      </div>
    </div>
  );
}
