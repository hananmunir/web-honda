import React, { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./components/Footer";

import { PlusCircle, CircleX, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useLocation, useNavigate } from "react-router-dom";
import useMenuStore from "./store";
import ContactForm from "./components/shared/contactForm";

const MenuText = ({ text, pathname, handleRedirect, link }) => {
  return (
    <span
      className={twMerge(
        "cursor-pointer text-[1em] ",
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
  const { menuOpen, setMenuOpen } = useMenuStore();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const footerRef = useRef(null);
  const menuRef = useRef(null);
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

  const onClickOutsideMenu = (e) => {
    //check if clicked outside menuContainer
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  return (
    <div
      onClick={onClickOutsideMenu}
      className={twMerge(
        "h-full md:h-screen fixed hide-scrollbar w-screen overflow-x-hidden  overflow-y-scroll dm-sans ",
        selectedOption !== "home" && "h-full"
      )}
    >
      <div
        ref={menuRef}
        className={twMerge(
          "fixed z-30 top-0 menu-container transition-all duration-300 ease-in-out right-0 translate-x-[105vw] md:translate-x-[20vw]  h-[45vh] flex gap-8 md:gap-5  ",
          menuOpen && "-translate-x-[0vw] md:translate-x-0 z-[80]"
        )}
      >
        <div className='flex flex-col items-end h-full pb-4 justify-between '>
          {" "}
          <span
            onClick={() => handleRedirect("/")}
            className=' text-white flex items-center gap-3  z-[30] text-2xl md:text-[3rem] cursor-pointer  pt-4 md:pt-0'
          >
            <img src='/images/logo.png' alt='logo' className='h-6 md:h-10' />
            Hondo
          </span>
          {menuOpen ? (
            <CircleX
              onClick={() => setMenuOpen(false)}
              className='cursor-pointer -me-5  md:me-0'
              color={"#ffffff"}
              size={35}
              strokeWidth={1}
            />
          ) : (
            <PlusCircle
              onClick={() => setMenuOpen(true)}
              className='cursor-pointer -me-5  md:me-0'
              color={"#ffffff"}
              size={35}
              strokeWidth={1}
            />
          )}
        </div>
        <div className='menu-container relative p-10 !z-50 h-screen md:h-[45vh] text-left md:py-6 w-[110vw] md:w-[20vw] flex flex-col  justify-around bg-[#1d1d1b] text-white text-2xl font-light pb-40 overflow-y-scroll hide-scrollbar'>
          <CircleX
            className='absolute top-4 right-4 md:hidden'
            strokeWidth={1}
            onClick={() => setMenuOpen(false)}
          />
          <div className=' flex flex-col '>
            <div
              onClick={() => setSubMenuOpen(!subMenuOpen)}
              className='flex gap-2 items-center'
            >
              <span
                className={twMerge(
                  "cursor-pointer ",
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
                "flex flex-col text-xl h-0  opacity-0  ms-10 pointer-events-none transition-all duration-300 ease-in-out ",
                subMenuOpen &&
                  "h-full opacity-70 pointer-events-auto my-3 gap-2 "
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
        className='text-start bg-white p-5 z-[60] relative  flex  justify-end text[1.2rem] md:text-[2rem] md:leading-[50px] md:flex-row flex-col-reverse pt-20  gap-5'
      >
        <div className='text-[#6F00FF] pt-[12%]'>
          +34662122660 <br /> Carrer de l’Esglesia 4-6, Barcelona.
          <br />
          hola@hondostudio.com
        </div>
        <section className=' dark:bg-gray-900 md:w-3/5 px-4 '>
          <div className='w-full  flex items-end justify-end text-right '>
            <span className=' header-text   '>
              Ahora es tu turno <br /> ¡Cuéntanos algo!
            </span>
          </div>
          <ContactForm />
        </section>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
