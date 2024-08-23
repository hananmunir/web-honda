import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollMenu from "./components/ScrollMenu";
import Hondo from "./components/shared/Hondo";
import Reel from "./components/sections/Reel";
import Video from "./components/sections/Video";
import Portfolio from "./components/sections/Portfolio";
import Equipo from "./components/sections/Equipo";
import Contact from "./components/sections/Contact";
import Diseno from "./components/sections/Diseno";
import Paellas from "./components/sections/Paellas";
import Foto from "./components/sections/Foto";
import { PlusCircle, CircleX } from "lucide-react";
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(count);
  return (
    <div className='h-full relative '>
      {/* <div className='relative w-screen'>
        <span className='fixed text-6xl top-10 right-10 text-white'>Honda</span>
        <ScrollMenu />
      </div> */}

      <div
        className={twMerge(
          "fixed z-30 top-0 transition-all duration-300 ease-in-out right-0 translate-x-[20vw]  h-screen flex gap-5",
          menuOpen && "translate-x-0"
        )}
      >
        <div className='flex flex-col items-end h-full py-5 justify-between '>
          {" "}
          <span className=' text-white  z-[30] text-[4rem]  '> Hondo</span>
          {menuOpen ? (
            <CircleX
              onClick={() => setMenuOpen(false)}
              className='cursor-pointer'
              color={"#ffffff"}
              size={60}
              strokeWidth={1}
            />
          ) : (
            <PlusCircle
              onClick={() => setMenuOpen(true)}
              className='cursor-pointer'
              color={"#ffffff"}
              size={60}
              strokeWidth={1}
            />
          )}
        </div>
        <div className=' p-10 text-left py-20 w-[20vw] flex flex-col  justify-around bg-[#1d1d1b] text-white text-[2rem] font-light'>
          <span className='text-[#ff0000] cursor-pointer'>
            Producción Audiovisual
          </span>
          <span className='cursor-pointer'>Educación y Cultura</span>
          <span className='cursor-pointer'>Agencia Creativa </span>
          <span className='cursor-pointer'>Eventos</span>
          <span className='cursor-pointer'>Estudio de Diseño</span>
        </div>
      </div>

      {/* <CircleX /> */}

      <Header />

      <div className='relative h-full !z-1'>
        <ScrollMenu count={count} setCount={setCount} />

        <Reel count={count} />
        <Video count={count} />
        <Foto count={count} />
        <Diseno count={count} />
        <Portfolio count={count} />
        <Equipo count={count} />
        <Paellas count={count} />
        <Contact count={count} />
        {/* 
        
        */}
      </div>

      {/* <Hondo /> */}
      <div className='text-violet-700 text-start p-5 z-20 relative bg-white  flex flex-col justify-end text-[2rem] leading-[50px] '>
        +34662122660 <br /> Carrer de l’Esglesia 4-6, Barcelona.
        <br />
        hola@hondostudio.com
      </div>
      <Footer />
    </div>
  );
}

export default App;
