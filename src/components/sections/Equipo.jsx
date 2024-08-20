import React from "react";

export default function Equipo() {
  return (
    <div className="h-[170vh] w-screen  flex flex-col  p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Somos un equipo multidisciplinar
        </h1>
        <p className="text-black text-xl mt-4">
          en el que unimos diferentes perfiles profesionales para ofrecer
          soluciones creativas integradas. Compartimos un mismo punto de
          partida: la base artístico-creativa; y una misma visión: desarrollar
          proyectos que ilusionen y que destaquen entre la multitud para
          conectar de una forma relevante con las personas.
        </p>
        <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" />
      </div>
    </div>
  );
}
