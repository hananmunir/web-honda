import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./components/Footer";

import { PlusCircle, CircleX, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { useLocation, useNavigate } from "react-router-dom";
import useMenuStore from "./store";

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
  const [loading, setLoading] = useState(false);
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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);

    formData.append("access_key", "240c802d-555f-4757-b2c9-e962ead863a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
    console.log(res);
    if (res.success) {
      setLoading(false);
      toast("Message sent successfully!");
      event.target.reset();

      console.log("Success", res);
    }
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
        "h-screen relative hide-scrollbar w-screen overflow-x-hidden  overflow-y-scroll dm-sans ",
        selectedOption !== "home" && "h-full"
      )}
    >
      <div
        ref={menuRef}
        className={twMerge(
          "fixed z-30 top-0 menu-container transition-all duration-300 ease-in-out right-0 translate-x-[100vw] md:translate-x-[20vw]  h-[45vh] flex gap-8 md:gap-5  ",
          menuOpen && "-translate-x-[0vw] md:translate-x-0"
        )}
      >
        <div className='flex flex-col items-end h-full pb-4 justify-between '>
          {" "}
          <span
            onClick={() => handleRedirect("/")}
            className=' text-white flex items-center gap-3  z-[30] text-[3rem] cursor-pointer  '
          >
            <img src='/images/logo.png' alt='logo' className='h-10' />
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
        <div className='menu-container relative p-10 !z-50 h-screen md:h-[45vh] text-left py-6 w-[110vw] md:w-[20vw] flex flex-col  justify-around bg-[#1d1d1b] text-white text-2xl font-light'>
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
        className='text-start p-5 z-[60] relative  flex  justify-end text[1.2rem] md:text-[2rem] md:leading-[50px] md:flex-row flex-col-reverse '
      >
        <div className='text-[#6F00FF] pt-[12%]'>
          +34662122660 <br /> Carrer de l’Esglesia 4-6, Barcelona.
          <br />
          hola@hondostudio.com
        </div>
        <section className=' dark:bg-gray-900 md:w-3/5 '>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <form onSubmit={handleOnSubmit} action='#' className='space-y-2 '>
              <div>
                <input
                  type='name'
                  id='name'
                  name='name'
                  className='shadow-sm bg-gray-100  text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Jane Doe'
                  required
                />
              </div>
              <div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='shadow-sm bg-gray-100  text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@gmail.com'
                  required
                />
              </div>
              <div>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-100   shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Your Phone Number'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-100  shadow-sm  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <button
                type='submit'
                disabled={loading}
                className='py-3  text-sm font-medium text-center  text-[#FF3C00]  sm:w-fit hover:text-[#FF3C00]/80 ring-none outline-none disabled:opacity-70'
              >
                Send message {">"}
              </button>
            </form>
          </div>
        </section>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
