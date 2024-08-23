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
import { PlusCircle, CircleX } from "lucide-react";
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const footerRef = useRef(null);
  const headerRef = useRef(null);
  console.log(count);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("intersecting");
            window.scrollTo(0, window.screen.height);
            setCount((prev) => {
              if (prev === 7) {
                return 7;
              } else {
                return prev + 1;
              }
            });

            // Section is in view, update the count
            //  setCount(index);
          }
        });
      },
      {
        root: null, // Uses the viewport as the root
        rootMargin: "0px",
        threshold: 0.5, // 50% of the section must be visible to trigger
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("intersecting");
            if (count === 0) return;
            window.scrollTo(0, window.screen.height);
            setCount((prev) => {
              if (prev === 0) {
                return 0;
              } else {
                return prev - 1;
              }
            });

            // Section is in view, update the count
            //  setCount(index);
          }
        });
      },
      {
        root: null, // Uses the viewport as the root
        rootMargin: "0px",
        threshold: 0.5, // 50% of the section must be visible to trigger
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [count]);
  // console.log(count);

  return (
    <div className='h-full relative '>
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

      <Header headerRef={headerRef} />

      <div
        ref={containerRef}
        className='relative h-full !z-1 section-container'
      >
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
