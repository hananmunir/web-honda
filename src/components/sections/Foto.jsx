import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Foto({ count }) {
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className=' foto h-full w-2/4 p-4  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>Donde no llega Midjourney</h1>
        <p className='description-text mt-2'>
          Tu y yo sabemos que para conseguir una buena producción fotográfica,
          aún es necesario contar con seres humanos, creativos, con talento y
          experiencia en tu sector. Ya sea una gran producción de publi, un
          pequeño evento o unas fotos de tu producto, tenemos el equipo humano y
          no humano que necesitas.
          <br />
          <br />
          Sí no estás satisfecho con lo que te ha dado Midjourney:
        </p>
        <span className='cta-text'> Habla con nosotros </span>
      </div>
      <div className='flex gap-6 w-full justify-end'>
        <div className='w-1/5 showcase-text'>
          <span className='text-purple-600'>/</span> Dirección{" "}
          <span className='text-purple-600'>/</span> Guionizaje{" "}
          <span className='text-purple-600'>/</span> Producción{" "}
          <span className='text-purple-600'>/</span> Dirección de fotografía{" "}
          <span className='text-purple-600'>/</span> Edición{" "}
          <span className='text-purple-600'>/</span> Color Grading{" "}
          <span className='text-purple-600'>/</span> VXF{" "}
          <span className='text-purple-600'>/</span> SXF{" "}
          <span className='text-purple-600'>/</span> Motion Graphics{" "}
          <span className='text-purple-600'>/</span>
          Dirección de Arte <span className='text-purple-600'>
            /
          </span> Estilsimo <span className='text-purple-600'>/</span> Home
          Economist <span className='text-purple-600'>/</span> Scouting
        </div>
        <img
          src=''
          alt='video 1'
          className='w-[50vw]  bg-gray-200 h-[50vh] object-cover'
        />
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative '>
        <div className='  w-[95vw] z-[30] grid grid-cols-2'>
          <div className='col-span-1 h-full w-full relative'>
            <span className='absolute w-3/4 top-5 right-10 text-[9rem] font-bold text-[#ff0000] text-right mix-blend-color-burn leading-[180px]'>
              Ray Motor
            </span>
            <img src='/images/beach.png' className='h-full w-full' />
          </div>
          <div className='col-span-1 h-full w-full relative '>
            <span className='absolute top-5 right-10 text-[9rem] w-3/4 font-bold text-[#ff0000] text-right mix-blend-color-burn leading-[180px]'>
              Sangre de Toro
            </span>
            <img src='/images/wine.png' className='h-full w-full' />
          </div>
        </div>
        <div className='absolute right-6 top-[45%]'>
          <PlusCircle size={50} color='black ' />
        </div>
        <div className='text-[#ff0000] text-lg flex justify-end px-14  '>
          ver todos
        </div>
      </div>
    </div>
  );
}
