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

    formData.append("access_key", "ed26393b-9012-475e-b528-37958b53016c");

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
          "fixed z-30 top-0 menu-container transition-all duration-300 ease-in-out right-0 translate-x-[20vw]  h-[45vh] flex gap-5",
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
        <div className='menu-container p-10 !z-50 h-screen text-left py-20 w-[20vw] flex flex-col  gap-10 bg-[#1d1d1b] text-white text-2xl font-light'>
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
        className='text-start p-5 z-20 relative bg-white  flex  justify-end text-[2rem] leading-[50px] '
      >
        <div className='text-[#6F00FF] pt-[12%]'>
          +34662122660 <br /> Carrer de l’Esglesia 4-6, Barcelona.
          <br />
          hola@hondostudio.com
        </div>
        <section className='bg-white dark:bg-gray-900 w-3/5 '>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <form onSubmit={handleOnSubmit} action='#' className='space-y-8 '>
              <div>
                <label
                  for='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your name
                </label>
                <input
                  type='name'
                  id='name'
                  name='name'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Jane Doe'
                  required
                />
              </div>
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@gmail.com'
                  required
                />
              </div>
              <div>
                <label
                  for='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Your Phone Number'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  for='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <button
                type='submit'
                disabled={loading}
                className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#6F00FF]  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-70'
              >
                Send message
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
