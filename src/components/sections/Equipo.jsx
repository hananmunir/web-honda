import React from "react";
import { twMerge } from "tailwind-merge";

export default function Equipo({ count }) {
  return (
    <div className={twMerge("h-full w-screen  flex flex-col ")}>
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
