import React from "react";
import { twMerge } from "tailwind-merge";

export default function Contact({ count }) {
  return (
    <div className={twMerge("h-full  w-screen flex flex-")}>
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
