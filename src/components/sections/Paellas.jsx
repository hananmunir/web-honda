import React from "react";
import { twMerge } from "tailwind-merge";

export default function Paellas({ count }) {
  return (
    <div
      className={twMerge(
        "h-full w-screen  flex flex-col   absolute pointer-events-none transition-all ease-in-out duration-500 opacity-0 top-0 left-0",
        count === 6 && "relative opacity-100 pointer-events-auto top-0"
      )}
    >
      <img src={"/images/banner.png"} className='w-full h-[100vh]' />
      {/* Main content section */}
      <div className='bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2'>
        <h1 className='text-purple-600 text-6xl'>
          Podemos hacer hasta una paella ;
        </h1>
        <p className='text-black text-xl mt-4'>
          si tu proyecto lo necesita. Nuestra experiencia nos demuestra que no
          hay dos proyectos iguales y que en cada ocasión debemos activar
          diferentes recursos y aportar soluciones a medida.
        </p>
        <img src='' alt='dummy img for now' className='bg-gray-200 h-[40vh]' />
      </div>
    </div>
  );
}
