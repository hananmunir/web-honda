import React from "react";
import { twMerge } from "tailwind-merge";
import { PlusCircle } from "lucide-react";
export default function Diseno({ count }) {
  return (
    <div
      className={twMerge(
        "h-screen overflow-y-hidden hide-scrollbar  w-screen  top-0 left-0 flex flex-col   absolute pointer-events-none transition-all ease-in-out duration-200 opacity-0",
        count === 3 &&
          "relative opacity-100 pointer-events-auto top-0 transition-none"
      )}
    >
      <img src={"/images/banner.png"} className='w-full h-[60vh]' />
      {/* Main content section */}
      <div className='bg-white  w-2/4 p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='text-purple-600 text-6xl'>
          Entendemos el diseño gráfico
        </h1>
        <p className='text-black text-xl mt-4'>
          omo una herramienta de narración visual versátil y flexible, que
          combina lo artesanal y lo tecnológico como pocas otras disciplinas.
          Desde la creación de una nueva identidad gráfica hasta su adaptación a
          nuevos formatos, desde la ilustración a mano alzada hasta la animación
          3D
        </p>
        <img src='' alt='dummy img for now' className='bg-gray-200 h-[40vh]' />
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full h-full py-20 relative'>
        <div className='h-[70vh]  object-cover w-[95vw] border bg-slate-200'></div>
        <div className='absolute right-6 top-[45%]'>
          <PlusCircle size={50} color='black ' />
        </div>
        <div className='text-black text-lg flex justify-end px-14 font-semibold '>
          ver todos
        </div>
      </div>
    </div>
  );
}
