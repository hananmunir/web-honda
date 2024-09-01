import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Reel({ count }) {
  return (
    <div
      className={twMerge("h-full  pb-12 w-screen flex flex-col justify-end ")}
    >
      <div className='bg-white ms-auto w-2/4 p-10 text-right flex flex-col items-end gap-4'>
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
