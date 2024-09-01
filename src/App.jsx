import React, { useState, useEffect, useRef } from "react";
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
import { PlusCircle, CircleX, ChevronDown, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Wrapper from "./components/sections/Wrapper";

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);
  console.log(count);

  const handleFocusContainer = (name) => {
    const element = document.querySelector(`.${name}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='h-screen relative hide-scrollbar  overflow-y-scroll'>
      <div
        className={twMerge(
          "fixed z-30 top-0 transition-all duration-300 ease-in-out right-0 translate-x-[20vw]  h-[30vh] flex gap-5",
          menuOpen && "translate-x-0"
        )}
      >
        <div className='flex flex-col items-end h-full pb-4 justify-between '>
          {" "}
          <span className=' text-white  z-[30] text-[4rem]   '> Hondo</span>
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
        <div className=' p-10 z-20 h-screen text-left py-20 w-[20vw] flex flex-col  justify-around bg-[#1d1d1b] text-white text-2xl font-light'>
          <div className=' flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <span className='text-[#ff0000] cursor-pointer'>Home</span>

              <ChevronDown
                className={twMerge(
                  "cursor-pointer mt-[6px] -rotate-90",
                  subMenuOpen && "rotate-0"
                )}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                size={20}
              />
            </div>
            <div
              className={twMerge(
                "flex flex-col gap-2 text-xl h-0 opacity-0  ms-10 pointer-events-none transition-all duration-300 ease-in-out",
                subMenuOpen && "h-full opacity-70 pointer-events-auto"
              )}
            >
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("reel")}
              >
                Reel
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("video")}
              >
                Video
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("foto")}
              >
                Foto
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("diseno")}
              >
                Diseño
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("portfolio")}
              >
                Portfolio
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("equipo")}
              >
                Equipo
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("paellas")}
              >
                Paellas
              </span>
              <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("contact")}
              >
                Contact
              </span>
            </div>
          </div>
          <span className='cursor-pointer'>Producción Audiovisual</span>
          <span className='cursor-pointer'>Educación y Cultura</span>
          <span className='cursor-pointer'>Agencia Creativa </span>
          <span className='cursor-pointer'>Eventos</span>
          <span className='cursor-pointer'>Estudio de Diseño</span>
        </div>
      </div>

      {/* <CircleX /> */}

      {/* <Header headerRef={headerRef} /> */}

      <img
        src={"/images/banner.png"}
        className='w-full h-[30vh] sticky top-0 z-[10] object-fill'
      />
      <ScrollMenu count={count} setCount={setCount} />
      <Wrapper className={"reel"} count={0} setCount={setCount}>
        <Reel />
      </Wrapper>
      <Wrapper count={1} setCount={setCount} className={"video"}>
        <Video />
      </Wrapper>
      <Wrapper count={2} setCount={setCount} className={"foto"}>
        <Foto />
      </Wrapper>
      <Wrapper count={3} setCount={setCount} className={"diseno"}>
        <Diseno />
      </Wrapper>
      <Wrapper count={4} setCount={setCount} className={"portfolio"}>
        <Portfolio />
      </Wrapper>
      <Wrapper count={5} setCount={setCount} className={"equipo"}>
        <Equipo />
      </Wrapper>
      <Wrapper count={6} setCount={setCount} className={"paellas"}>
        <Paellas />
      </Wrapper>
      <Wrapper count={7} setCount={setCount} className={"contact"}>
        <Contact />
      </Wrapper>
      {/* 
        
        */}

      {/* <Hondo /> */}
      <div
        ref={footerRef}
        className='text-violet-700 text-start p-5 z-20 relative bg-white  flex flex-col justify-end text-[2rem] leading-[50px] '
      >
        +34662122660 <br /> Carrer de l’Esglesia 4-6, Barcelona.
        <br />
        hola@hondostudio.com
      </div>
      <Footer />
    </div>
  );
}

export default App;
