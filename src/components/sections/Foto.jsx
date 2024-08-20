import React from "react";

export default function Foto() {
  return (
    <div className="h-[200vh] w-screen  flex flex-col  p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Nos encanta sumergirnos en el momento
        </h1>
        <p className="text-black text-xl mt-4">
          en que el mundo se observa a través de la lente para captar la
          realidad de una nueva manera. Disfrutamos tanto del dinamismo de los
          proyectos en vivo, con la urgencia de capturar el momento, como del
          trabajo de estudio, donde el cuidado por los detalles puede hacer
          magia.
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
