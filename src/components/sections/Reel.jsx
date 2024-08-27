import React from "react";
import { twMerge } from "tailwind-merge";

export default function Reel({ count }) {
  return (
    <div
      className={twMerge(
        "h-screen overflow-y-hidden hide-scrollbar top-0 left-0 absolute pointer-events-none transition-all ease-in-out duration-200 opacity-0 w-screen flex flex-col justify-end ",
        count === 0 &&
          "relative opacity-100 pointer-events-auto top-0 transition-none"
      )}
    >
      <img src={"/images/banner.png"} className='w-full h-[60vh] object-fill' />
      <div className='bg-white ms-auto w-2/4 p-10 overflow-auto text-right flex flex-col items-end gap-4'>
        <h1 className='text-purple-600 text-6xl'>
          Somos una <br />
          agencia creativa
        </h1>
        <p className='text-black text-lg mt-4'>
          en Barcelona especializada en servicios creativos y soluciones
          visuales innovadoras. Desde vídeo y fotografía hasta diseño gráfico y
          multimedia, ofrecemos proyectos creativos que conectan marcas con su
          audiencia. Combinamos lo digital y lo analógico para proyectar todo el
          potencial de grandes y pequeñas marcas. Como agencia de publicidad y
          estudio creativo, estamos aquí para impulsar tu marca al siguiente
          nivel.
        </p>
        <img
          src='/images/reel/giphy.webp'
          alt='reel'
          className='w-3/4 object-contain'
        />
      </div>
    </div>
  );
}
