import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Foto({ count }) {
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className="bg-white h-full w-2/4 p-4  text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">Donde no llega Midjourney</h1>
        <p className="text-black text-xl mt-4">
          Tu y yo sabemos que para conseguir una buena producción fotográfica,
          aún es necesario contar con seres humanos, creativos, con talento y
          experiencia en tu sector. Ya sea una gran producción de publi, un
          pequeño evento o unas fotos de tu producto, tenemos el equipo humano y
          no humano que necesitas.
          <br />
          <br />
          Sí no estás satisfecho con lo que te ha dado Midjourney:
        </p>
        <span className="text-orange-500 text-xl font-bold">
          {" "}
          Habla con nosotros{" "}
        </span>
        <div className="flex gap-6">
          <span>
            {" "}
            / Dirección / Guionizaje / Producción / Dirección de fotografía /
            Edición / Color Grading / VXF / SXF / Motion Graphics / Dirección de
            Arte / Estilsimo / Home Economist / Scouting
          </span>
          <img
            src="dummy img"
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
