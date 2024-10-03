import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import Carousel from "../shared/Carousel";
import { portfolios } from "../../assets/portfolios";

export default function Grafico({ setFormOpen }) {
  const match = Object.keys(portfolios).map((key) => {
    if (portfolios[key].sections.includes("grafico"))
      return {
        ...portfolios[key],
        imgSrc: portfolios[key].headerImage,
      };

    return null;
  });

  const projects = match.filter((item) => item);
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className=' h-full grafico w-[70%] md:w-2/4 p-4  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Hablamos el <br /> mismo idioma
        </h1>
        <p className='description-text mt-2'>
          Aunque hemos ido transitando hacia la producción audiovisual en los
          últimos años, en otra vida fuimos diseñadores gráficos y directores de
          arte de publicidad. Sí, como lo oyes. Por eso sabemos perfectamente
          cuales son las necesidades y requisitos de un proyecto de comunicación
          visual, RRSS o Branding.
          <br />
          <br />
          No lo dudes, mándanos un briefing:
        </p>
        <span className='cta-text' onClick={() => setFormOpen(true)}>
          {" "}
          ASAP{" "}
        </span>
      </div>
      <div className='flex gap-6 w-full justify-end items-end md:items-start flex-col-reverse md:flex-row'>
        <div className='w-3/5 md:w-1/5 showcase-text text-right'>
          <span className='text-purple-600'>/</span> Branding{" "}
          <span className='text-purple-600'>/</span> Publicidad{" "}
          <span className='text-purple-600'>/</span> Ilustración <br />
          <span className='text-purple-600'>/</span> Diseño Editorial{" "}
          <span className='text-purple-600'>/</span> Redes Sociales{" "}
          <span className='text-purple-600'>/</span> Diseño Web <br />
          <span className='text-purple-600'>/</span> Visuales{" "}
          <span className='text-purple-600'>/</span> Packaging{" "}
        </div>
        <div className='w-[50vw] h-full '>
          <Carousel
            images={[
              "/images/grafico/1.jpg",
              "/images/grafico/2.jpg",
              "/images/grafico/3.jpg",
              "/images/grafico/4.jpg",
              "/images/grafico/5.jpg",
              "/images/grafico/6.webp",
              "/images/grafico/7.jpg",
              "/images/grafico/8.jpg",
              "/images/grafico/9.jpg",
              "/images/grafico/10.jpg",
            ]}
          />
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative h-full '>
        <div
          style={{ direction: "rtl" }}
          className='  w-[80%] ml-auto  z-[30] h-full grid grid-cols-2'
        >
          {projects.map((project, index) => (
            <ImageCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
