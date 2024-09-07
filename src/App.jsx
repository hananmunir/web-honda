import React, { useState, useRef } from "react";

import "./App.css";
import Footer from "./components/Footer";

import { PlusCircle, CircleX, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useLocation, useNavigate } from "react-router-dom";

const MenuText = ({ text, pathname, handleRedirect, link }) => {
  return (
    <span
      className={twMerge(
        "cursor-pointer",
        pathname.includes(link) && "text-[#FF3C00]"
      )}
      onClick={() => handleRedirect(link)}
    >
      {text}
    </span>
  );
};

function App({ children }) {
  const [selectedOption, setSelectedOption] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const footerRef = useRef(null);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const handleFocusContainer = (name) => {
    if (pathname !== "/") {
      handleRedirect("/");

      setTimeout(() => {
        const element = document.querySelector(`.${name}`);
        element.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    } else {
      const element = document.querySelector(`.${name}`);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRedirect = (name) => {
    navigate(name);
  };

  return (
    <div
      className={twMerge(
        "h-screen relative hide-scrollbar w-screen overflow-x-hidden  overflow-y-scroll dm-sans ",
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
          <span className=' text-white flex items-center gap-3  z-[30] text-[3rem]   '>
            <img src='/images/logo.png' alt='logo' className='h-10' />
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
        <div className=' p-10 !z-50 h-screen text-left py-20 w-[20vw] flex flex-col  gap-10 bg-[#1d1d1b] text-white text-2xl font-light'>
          <div className=' flex flex-col gap-2'>
            <div
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className='flex gap-2 items-center'
            >
              <span
                className={twMerge(
                  "cursor-pointer",
                  pathname === "/" && "text-[#FF3C00] "
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
            link={"/production"}
            text={"Producción Audiovisual"}
            pathname={pathname}
            handleRedirect={handleRedirect}
          />
          <MenuText
            link={"/culture"}
            text={"Educación y Cultura"}
            pathname={pathname}
            handleRedirect={handleRedirect}
          />
          <MenuText
            link={"/agency"}
            text={"Agencia Creativa"}
            pathname={pathname}
            handleRedirect={handleRedirect}
          />
          <MenuText
            link={"/events"}
            text={"Eventos"}
            pathname={pathname}
            handleRedirect={handleRedirect}
          />
          <MenuText
            link={"/studio"}
            text={"Estudio de Diseño"}
            pathname={pathname}
            handleRedirect={handleRedirect}
          />
        </div>
      </div>
      {children}

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
