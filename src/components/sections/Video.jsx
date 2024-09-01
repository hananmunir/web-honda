import React from "react";
import { PlusCircle } from "lucide-react"; // Importing an icon
import { twMerge } from "tailwind-merge";

export default function Video({ count }) {
  return (
    <div className={twMerge("h-full w-screen  flex flex-col  ")}>
      <div className="bg-white h-full  w-3/5 p-10  text-right flex flex-col items-end self-end gap-2">
        <h1 className="text-purple-600 text-6xl w-full">
          Producciones <br /> sin límte*
        </h1>
        <p className="text-black text-xl mt-4">
          Esto es así. Con la tecnología que tenemos a día de hoy, podemos hacer
          prácticamente cualqueir cosa que se te ocurra. Tenemos el conocimiento
          y los recursos para afrontar cualquier tipo de producción. Contamos
          con una amplia cartera de realizadores y equipo técnico, un equipo
          modular se adapta a cada proyecto. <br /> *Bueno, sí hay un límite.
          Descubre hasta donde podemos llegar con
        </p>
        <span className="text-orange-500">Tu presupuesto </span>
        <img
          src="/images/video/1.webp"
          alt="video 1"
          className="w-2/5 object-contain"
        />
      </div>
      {/* "Ver Todos" section */}
      <div className="w-full h-full py-20 relative">
        <div className="h-[70vh]  object-cover w-[95vw] border bg-slate-200"></div>
        <div className="absolute right-6 top-[45%]">
          <PlusCircle size={50} color="black " />
        </div>
        <div className="text-black text-lg flex justify-end px-14 font-semibold ">
          ver todos
        </div>
      </div>
    </div>
  );
}
