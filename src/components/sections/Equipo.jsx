import React from "react";
import { twMerge } from "tailwind-merge";

export default function Equipo({ count }) {
  return (
    <div className={twMerge("h-full py-12  w-screen  flex flex-col ")}>
      <div className="bg-white  w-2/4 p-4 h-full text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Multidisciplinar & Responsive
        </h1>
        <p className="text-black text-xl mt-4">
          ¿Y eso que quiere decir? Muy sencillo. Que cada uno de nosotros domina
          varios territorios creativos y que, en conjunto, podemos afrontar
          proyectos muy diversos. Que somos un equipo pequeño de base, pero que
          contamos con una amplia red de profesionales que nos permiten
          adaptarnos a cualqueir tipo de producción.
        </p>
        <span className="text-orange-500 font-bold text-xl">
          {" "}
          Pide por esa boquita
        </span>
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
