import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMenu() {
  const changeMenuItemColor = (id) => {
    //turn all text black except reel
    const menuItems = document.querySelectorAll(".menu-container span");
    menuItems.forEach((item) => {
      if (item.id !== id) {
        item.style.color = "black";
      } else {
        item.style.color = "red";
      }
    });
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

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: ".anim-container",
      start: "top top",
      end: "bottom bottom",
      animation: tl,
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Determine the current section based on progress
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
    <div className='relative'>
      <div className='flex fixed top-[100vh] menu-container flex-col  text-black text-[5rem] font-semibold items-start'>
        <span id='reel'>Reel</span>
        <span id='video'>Video</span>
        <span id='foto'>Foto</span>
        <span id='diseno'>Diseno</span>
        <span id='portfolio'>Portfolio</span>
        <span id='equipo'>Equipo</span>
        <span id='paellas'>Paellas</span>
        <span id='contacto'>Contacto</span>
      </div>
      <div className='anim-container text-[5rem] '>
        <div className='h-[100vh]'>1</div>
        <div className='h-[100vh]'>2</div>
        <div className='h-[100vh]'>3</div>
        <div className='h-[100vh]'>4</div>
        <div className='h-[100vh]'>5</div>
        <div className='h-[100vh]'>6</div>
      </div>
    </div>
  );
}
