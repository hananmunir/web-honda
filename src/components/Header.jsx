import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header({ headerRef }) {
  return (
    <div
      ref={headerRef}
      className="bg-[#1d1d1b] !z-20 relative text-white p-12 h-screen min-h-screen max-h-screen flex items-center justify-between w-full"
    >
      <div className="text-black text-[6rem] h-[50vh] w-full  text-start flex flex-col gap-0 leading-[130px] items-start">
        <span className="w-full  h-full">
          <Typewriter
            loop={false}
            words={["Exploramos", "Creamos", "Aportamos"]}
          />
        </span>
        <span className="w-full  h-full">
          <Typewriter
            loop={false}
            words={["Universos", "Historias", "Soluciones"]}
          />
        </span>
        <span className="w-full  h-full">
          <Typewriter
            loop={false}
            words={["Visuales", "Memorables", "Sorprendentes"]}
          />
        </span>
      </div>
      <img src="images/logo.png" alt="logo" className="h-1/2 object-contain" />
    </div>
  );
}
