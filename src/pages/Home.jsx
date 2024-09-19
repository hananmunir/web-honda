import React, { useState } from "react";
import ScrollMenu from "../components/ScrollMenu";
import Reel from "../components/sections/Reel";
import Video from "../components/sections/Video";
import Portfolio from "../components/sections/Portfolio";
import Equipo from "../components/sections/Equipo";
import Contact from "../components/sections/Contact";
import Diseno from "../components/sections/Diseno";
import Paellas from "../components/sections/Paellas";
import Grafico from "../components/sections/Grafico";
import Foto from "../components/sections/Foto";
import Wrapper from "../components/sections/Wrapper";
import First from "../components/sections/FirstSection";

const images = [
  "/images/banner.png",
  "/images/banner.png",
  "/images/banner.png",
  "/images/graficobanner.jpg",
  "/images/portfoliobanner.jpg",
  "/images/Header_Equipo.webp",
  "/images/Header_Paella.webp",
  "/images/banner.png",
];

export default function Home({ setSelectedOption }) {
  const [count, setCount] = useState(0);
  return (
    <>
      {count <= 3 ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-[45vh] sticky top-0 z-[-1] object-fill'
        >
          <source src='/video/header.mp4' type='video/mp4' />
        </video>
      ) : (
        <img
          src={images[count]} // Dynamically set the banner image based on the section
          className='w-full h-[45vh] sticky top-0 z-[-1] object-fill'
          alt='Section Banner'
        />
      )}

      <ScrollMenu count={count} setCount={setCount} />
      <Wrapper className={"home"} count={0} setCount={setCount}>
        <First />
      </Wrapper>
      <Wrapper count={1} setCount={setCount} className={"video"}>
        <Video setSelectedOption={setSelectedOption} />
      </Wrapper>
      <Wrapper count={2} setCount={setCount} className={"foto"}>
        <Foto setSelectedOption={setSelectedOption} />
      </Wrapper>
      <Wrapper count={3} setCount={setCount} className={"grafico"}>
        <Grafico />
      </Wrapper>

      <Wrapper count={4} setCount={setCount} className={"portfolio"}>
        <Portfolio setSelectedOption={setSelectedOption} />
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
    </>
  );
}
