import React from "react";
import { twMerge } from "tailwind-merge";

export default function Paellas({ setFormOpen }) {
  return (
    <div
      className={twMerge(
        "h-full justify-center items-center py-12   w-screen  flex flex-col   "
      )}
    >
      {/* Main content section */}
      <div className='h-full paellas w-[70%] md:w-2/4 p-4 text-right flex flex-col justify-center self-end gap-2'>
        <h1 className='header-text'>
          Por encargo, <br /> sábados y domingos
        </h1>
        <p className='description-text mt-2'>
          Ahora en serio. Nuestra experiencia nos demuestra que no hay dos
          proyectos iguales. Que en cada ocasión, debemos activar diferentes
          recursos y aportar soluciones a medida. Los que han trabajado con
          nosotros, lo saben: si tu proyecto lo necesita, podemos hacer hasta
          una paella
        </p>
        <span className='cta-text' onClick={() => setFormOpen(true)}>
          {" "}
          Haz tu reserva{" "}
        </span>
        {/* <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" /> */}
      </div>
    </div>
  );
}
