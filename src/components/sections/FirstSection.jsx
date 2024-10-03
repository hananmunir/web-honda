import React from "react";
import { PlusCircle } from "lucide-react"; // Importing an icon
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import Carousel from "../shared/Carousel";
import { portfolios } from "../../assets/portfolios";
export default function First({ setFormOpen }) {
  const match = Object.keys(portfolios).map((key) => {
    if (portfolios[key].sections.includes("home"))
      return {
        ...portfolios[key],
        imgSrc: portfolios[key].headerImage,
      };

    return null;
  });

  const projects = match.filter((item) => item);

  return (
    <div className={twMerge("h-full py-12   w-screen  flex flex-col  ")}>
      <div className=' home h-full  w-[70%] md:w-2/4 p-4  text-right flex flex-col items-end self-end gap-2'>
        <h1 className='header-text'>
          Hacemos <br /> muchas cosas
        </h1>
        <p className='description-text mt-2'>
          Literalmente. Podemos hacer muchas, muchas cosas, pero lo que mejor
          sabemos hacer, es aterrizar tu visión estratégica en una pieza
          creativa. En el formato que neceistes. Para el miedo adecuado a tu
          audiencia. Usando toda la tecnología actual (sí, IA incluida) para:
        </p>
        <span className='cta-text' onClick={() => setFormOpen(true)}>
          Potenciar tu marca
        </span>
      </div>

      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative '>
        <div
          style={{ direction: "rtl" }}
          className='  w-[80%] ml-auto z-[30] justify-items-end justify-end h-full grid grid-cols-2 grid-flow-col'
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
      <div>
        <div className='w-3/5 md:w-4/5 showcase-text text-right px-3 md:px-5 ms-auto'>
          <span className='text-[#6F00FF]'>/</span> Producción Audiovisual{" "}
          <span className='text-[#6F00FF]'>/</span> Dirección Creativa{" "}
          <span className='text-[#6F00FF]'>/</span> Branded Content{" "}
          <span className='text-[#6F00FF]'>/</span>Branding{" "}
          <span className='text-[#6F00FF]'>/</span> Dirección de Arte{" "}
          <span className='text-[#6F00FF]'>/</span> Redacción{" "}
          <span className='text-[#6F00FF]'>/</span> Estrategia{" "}
          <span className='text-[#6F00FF]'>/</span> Diseño Gráfico{" "}
          <span className='text-[#6F00FF]'>/</span> Redes Sociales{" "}
          <span className='text-[#6F00FF]'>/</span> Story Telling
        </div>
      </div>
    </div>
  );
}
