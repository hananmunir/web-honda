import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMenu() {
  const [currentSection, setCurrentSection] = useState("header");
  const changeMenuItemColor = (id) => {
    // Turn all text black except the active item
    const menuItems = document.querySelectorAll(".menu-container span");
    menuItems.forEach((item) => {
      item.style.color = item.id === id ? "red" : "black";
    });
    setCurrentSection(id);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" })
      .to(".menu-container", { y: "-=200px" });

    ScrollTrigger.create({
      trigger: ".anim-container",
      start: "top top",
      end: "bottom bottom",
      animation: tl,
      scrub: 1,
      // markers: true,
      onLeaveBack: () => {
        setCurrentSection("header");
      },

      onUpdate: (self) => {
        const progress = self.progress;

        // Update the current section based on progress
        if (progress < 0.125) {
          changeMenuItemColor("reel");
        } else if (progress < 0.25) {
          changeMenuItemColor("video");
        } else if (progress < 0.375) {
          changeMenuItemColor("foto");
        } else if (progress < 0.5) {
          changeMenuItemColor("diseno");
        } else if (progress < 0.625) {
          changeMenuItemColor("portfolio");
        } else if (progress < 0.75) {
          changeMenuItemColor("equipo");
        } else if (progress < 0.875) {
          changeMenuItemColor("paellas");
        } else {
          changeMenuItemColor("contacto");
        }
      },
    });
  }, []);

  return (
    <div className='h-full  relative'>
      <div className='fixed h-full top-0 w-full transition-all'>
        {currentSection === "header" ? (
          <Header />
        ) : (
          <div className='h-screen bg-white text-black pt-40 text-5xl '>
            {currentSection}
          </div>
        )}
      </div>
      <div className='menu-container fixed top-[100vh] flex  flex-col text-black text-[5rem] font-semibold'>
        <span id='reel'>Reel</span>
        <span id='video'>Video</span>
        <span id='foto'>Foto</span>
        <span id='diseno'>Diseno</span>
        <span id='portfolio'>Portfolio</span>
        <span id='equipo'>Equipo</span>
        <span id='paellas'>Paellas</span>
        <span id='contacto'>Contacto</span>
      </div>
      <div className='h-[50vh]'></div>

      <div className='anim-container text-[5rem] '>
        <div className='h-[100vh] bg-gray-200'>1</div>
        <div className='h-[100vh] bg-gray-300'>2</div>
        <div className='h-[100vh] bg-gray-400'>3</div>
        <div className='h-[100vh] bg-gray-500'>4</div>
        <div className='h-[100vh] bg-gray-600'>5</div>
        <div className='h-[100vh] bg-gray-700'>6</div>
        <div className='h-[100vh] bg-gray-800'>7</div>
        <div className='h-[100vh] bg-gray-900'>8</div>
      </div>
      <div className='h-screen relative bg-white flex items-end justify-end'>
        <Footer />
      </div>
    </div>
  );
}
