import React from "react";
import { PlusCircle } from "lucide-react"; // Importing an icon

export default function Video() {
  return (
    <div className="h-[200vh] w-screen  flex flex-col  p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Llevamos las ideas de nuestros clientes al formato audiovisual
          adecuado
        </h1>
        <p className="text-black text-xl mt-4">
          con visión creativa y capacidad técnica para producir spots, vídeos
          corporativos, brand & product content, eventos, redes sociales, y
          mucho más. Las agencias publicitarias fueron nuestra escuela y la
          puerta de entrada a un abanico de industrias y sectores en el que
          hemos crecido y nos hemos diversificado. De la gastronomía a la
          educación, de la cultura al retail. Y seguimos explorando.
        </p>
        <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" />
      </div>
      {/* "Ver Todos" section */}
      <div className="w-full py-20 relative">
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
