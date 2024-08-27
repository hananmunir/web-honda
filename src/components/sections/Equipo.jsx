import React from "react";
import { twMerge } from "tailwind-merge";

export default function Equipo({ count }) {
  return (
    <div
      className={twMerge(
        "h-screen overflow-y-hidden hide-scrollbar  w-screen top-0 left-0 flex flex-col   absolute pointer-events-none transition-all ease-in-out duration-200 opacity-0",
        count === 5 &&
          "relative opacity-100 pointer-events-auto top-0 transition-none"
      )}
    >
      <img src={"/images/banner.png"} className='w-full h-[60vh]' />
      {/* Main content section */}
      <div className='bg-white  w-2/4 p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='text-purple-600 text-6xl'>
          Somos un equipo multidisciplinar
        </h1>
        <p className='text-black text-xl mt-4'>
          en el que unimos diferentes perfiles profesionales para ofrecer
          soluciones creativas integradas. Compartimos un mismo punto de
          partida: la base artístico-creativa; y una misma visión: desarrollar
          proyectos que ilusionen y que destaquen entre la multitud para
          conectar de una forma relevante con las personas.
        </p>
        <img src='' alt='dummy img for now' className='bg-gray-200 h-[40vh]' />
      </div>
    </div>
  );
}
