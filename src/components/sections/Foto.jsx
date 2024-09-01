import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Foto({ count }) {
  return (
    <div className={twMerge("h-full   w-screen flex flex-col   ")}>
      <div className="bg-white h-full w-2/4 p-4  text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">Foto también</h1>
        <p className="text-black text-xl mt-4">
          Por supuesto, no es lo mismo. Hacemos producciones de todo tipo.
          <br />
          *Bueno, sí hay un límite. Descubre hasta donde podemos llegar con
        </p>
        <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" />
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
