import React from "react";
import { PlusCircle } from "lucide-react"; // Importing an icon
import { twMerge } from "tailwind-merge";

export default function Video({ count }) {
  return (
    <div className={twMerge("h-full w-screen  flex flex-col  ")}>
      <div className='bg-white h-full  w-3/5 p-10  text-right flex flex-col items-end self-end gap-2'>
        <h1 className='text-purple-600 text-6xl w-full'>
          Llevamos las ideas de <br /> nuestros clientes al formato <br />
          audiovisual adecuado
        </h1>
        <p className='text-black text-xl mt-4'>
          con visión creativa y capacidad técnica para producir spots, vídeos
          corporativos, brand & product content, eventos, redes sociales, y
          mucho más. Las agencias publicitarias fueron nuestra escuela y la
          puerta de entrada a un abanico de industrias y sectores en el que
          hemos crecido y nos hemos diversificado. De la gastronomía a la
          educación, de la cultura al retail. Y seguimos explorando.
        </p>
        <img
          src='/images/video/1.webp'
          alt='video 1'
          className='w-2/5 object-contain'
        />
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
