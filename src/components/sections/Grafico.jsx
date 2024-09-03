import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Grafico() {
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className="bg-white h-full w-2/4 p-4  text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">Hablamos el mismo idioma</h1>
        <p className="text-black text-xl mt-4">
          Aunque hemos ido transitando hacia la producción audiovisual en los
          últimos años, en otra vida fuimos diseñadores gráficos y directores de
          arte de publicidad. Sí, como lo oyes. Por eso sabemos perfectamente
          cuales son las necesidades y requisitos de un proyecto de comunicación
          visual, RRSS o Branding.
          <br />
          <br />
          No lo dudes, mándanos un briefing:
        </p>
        <span className="text-orange-500 text-xl font-bold"> ASAP </span>
        <div className="flex gap-6 ">
          <span>
            / Branding / Publicidad / Ilustración / Diseño Editorial / Redes
            Sociales / Diseño Web / Visuales / Packaging
          </span>
          <img
            src="/images/grafico.jpg"
            alt="video 1"
            className="w-full object-contain"
          />
        </div>
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
