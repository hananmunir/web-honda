import React from "react";
import { twMerge } from "tailwind-merge";

export default function Equipo({ count }) {
  return (
    <div className={twMerge("h-full w-screen  flex flex-col ")}>
      <div className="bg-white  w-2/4 p-4 h-full text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Somos un equipo <br /> multidisciplinar
        </h1>
        <p className="text-black text-xl mt-4">
          en el que unimos diferentes perfiles profesionales para ofrecer
          soluciones creativas integradas. Compartimos un mismo punto de
          partida: la base artístico-creativa; y una misma visión: desarrollar
          proyectos que ilusionen y que destaquen entre la multitud para
          conectar de una forma relevante con las personas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="relative">
            <img
              src="/images/img1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute text-sm bottom-0 left-2  text-orange-500 font-bold">
              Cristian Jiménez
            </span>
            <span className="block text-center">Dirección & DOP</span>
          </div>
          <div className="relative">
            <img
              src="/images/img-2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute text-sm bottom-2 left-2 text-orange-500 font-bold">
              Bego Alarcón
            </span>
            <span className="block text-center">
              Project Management & Animación
            </span>
          </div>
          <div className="relative">
            <img
              src="/images/img3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute text-sm bottom-2 left-2 text-orange-500 font-bold">
              Gus Arens
            </span>
            <span className="block text-center">Producción & Realización</span>
          </div>
          <div className="relative">
            <img
              src="/images/img4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <span className="absolute text-sm bottom-2 left-2 text-orange-500 font-bold">
              Anto Gentile
            </span>
            <span className="block text-center">Edición & Diseño</span>
          </div>
        </div>
      </div>
    </div>
  );
}
