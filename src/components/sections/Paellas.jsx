import React from "react";

export default function Paellas() {
  return (
    <div className="h-[170vh] w-screen  flex flex-col  p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Podemos hacer hasta una paella ;)
        </h1>
        <p className="text-black text-xl mt-4">
          si tu proyecto lo necesita. Nuestra experiencia nos demuestra que no
          hay dos proyectos iguales y que en cada ocasión debemos activar
          diferentes recursos y aportar soluciones a medida.
        </p>
        <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" />
      </div>
    </div>
  );
}
