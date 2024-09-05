import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import Footer from "./components/Footer";

import Production from "./pages/Production";
import { PlusCircle, CircleX, ChevronDown, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Events from "./pages/Events";
import Culture from "./pages/Culture";
import Studio from "./pages/Studio";
import Project from "./pages/Portfolio";

const MenuText = ({ text, selectedOption, setSelectedOption }) => {
  return (
    <span
      className={twMerge(
        "cursor-pointer",
        selectedOption === text && "text-[#ff0000]"
      )}
      onClick={() => setSelectedOption(text)}
    >
      {text}
    </span>
  );
};

function App() {
  const [selectedOption, setSelectedOption] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);

  const handleFocusContainer = (name) => {
    setSelectedOption("home");
    const element = document.querySelector(`.${name}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={twMerge(
        "h-screen relative hide-scrollbar  overflow-y-scroll dm-sans ",
        selectedOption !== "home" && "h-full"
      )}
    >
      <div
        className={twMerge(
          "fixed z-30 top-0 transition-all duration-300 ease-in-out right-0 translate-x-[20vw]  h-[45vh] flex gap-5",
          menuOpen && "translate-x-0"
        )}
      >
        <div className='flex flex-col items-end h-full pb-4 justify-between '>
          {" "}
          <span className=' text-white flex items-center gap-3  z-[30] text-[4rem]   '>
            <img src='/images/logo.png' alt='logo' className='h-16' />
            Hondo
          </span>
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
        <div className=' p-10 z-20 h-screen text-left py-20 w-[20vw] flex flex-col  gap-10 bg-[#1d1d1b] text-white text-2xl font-light'>
          <div className=' flex flex-col gap-2'>
            <div
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className='flex gap-2 items-center'
            >
              <span
                className={twMerge(
                  "cursor-pointer",
                  selectedOption === "home" && "text-[#ff0000]"
                )}
              >
                Home
              </span>

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
                onClick={() => handleFocusContainer("grafico")}
              >
                Grafico
              </span>
              {/* <span
                className='cursor-pointer'
                onClick={() => handleFocusContainer("diseno")}
              >
                Diseño
              </span> */}
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
          <MenuText
            text={"Producción Audiovisual"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuText
            text={"Educación y Cultura"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuText
            text={"Agencia Creativa"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuText
            text={"Eventos"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuText
            text={"Estudio de Diseño"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>

      {selectedOption === "home" && (
        <Home setSelectedOption={setSelectedOption} />
      )}
      {selectedOption === "Producción Audiovisual" && <Production />}
      {selectedOption === "Educación y Cultura" && <Culture />}
      {selectedOption === "Agencia Creativa" && <Agency />}
      {selectedOption === "Eventos" && <Events />}
      {selectedOption === "Estudio de Diseño" && <Studio />}
      {selectedOption === "portfolio" && <Project />}
      {/* <Home

      {/* <CircleX /> */}

      {/* <Header headerRef={headerRef} /> */}

      {/* <Wrapper count={8} setCount={setCount} className={"production"}>
        <Production />
      </Wrapper> */}
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
