import React, { useState, useEffect } from "react";
import ScrollMenu from "../components/ScrollMenu";
import Video from "../components/sections/Video";
import Portfolio from "../components/sections/Portfolio";
import Equipo from "../components/sections/Equipo";
import Contact from "../components/sections/Contact";
import Paellas from "../components/sections/Paellas";
import Grafico from "../components/sections/Grafico";
import Foto from "../components/sections/Foto";
import Wrapper from "../components/sections/Wrapper";
import First from "../components/sections/FirstSection";
import Popup from "../components/shared/Popup";
import useMenuStore from "../store";

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
  const { setFormOpen } = useMenuStore();

  useEffect(() => {
    const container = document.querySelector(".home-page");
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      {count <= 4 ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-[45vh] sticky top-0 z-[-1] object-cover home-page'
        >
          <source src='/video/header.mp4' type='video/mp4' />
        </video>
      ) : (
        <img
          src={images[count]} // Dynamically set the banner image based on the section
          className='w-full h-[45vh] sticky top-0 z-[-1] object-fill home-page'
          alt='Section Banner'
        />
      )}
      <Popup />

      <ScrollMenu count={count} setCount={setCount} />
      <Wrapper className={"home"} count={0} setCount={setCount}>
        <First setFormOpen={setFormOpen} />
      </Wrapper>
      <Wrapper count={1} setCount={setCount} className={"video"}>
        <Video
          setFormOpen={setFormOpen}
          setSelectedOption={setSelectedOption}
        />
      </Wrapper>
      <Wrapper count={2} setCount={setCount} className={"foto"}>
        <Foto setFormOpen={setFormOpen} setSelectedOption={setSelectedOption} />
      </Wrapper>
      <Wrapper count={3} setCount={setCount} className={"grafico"}>
        <Grafico setFormOpen={setFormOpen} />
      </Wrapper>

      <Wrapper count={4} setCount={setCount} className={"portfolio"}>
        <Portfolio
          setFormOpen={setFormOpen}
          setSelectedOption={setSelectedOption}
        />
      </Wrapper>
      <Wrapper count={5} setCount={setCount} className={"equipo"}>
        <Equipo setFormOpen={setFormOpen} />
      </Wrapper>
      <Wrapper count={6} setCount={setCount} className={"paellas"}>
        <Paellas setFormOpen={setFormOpen} />
      </Wrapper>
      <Wrapper count={7} setCount={setCount} className={"contact"}>
        <Contact setFormOpen={setFormOpen} />
      </Wrapper>
    </>
  );
}
