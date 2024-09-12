import React from "react";
import { PlusCircle } from "lucide-react"; // Importing an icon
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import Carousel from "../shared/Carousel";

export default function Video({ count }) {
  const projects = [
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",
    },
  ];
  return (
    <div className={twMerge("h-full py-12   w-screen  flex flex-col  ")}>
      <div className=' video h-full  w-[70%] md:w-2/4 p-4  text-right flex flex-col items-end self-end gap-2'>
        <h1 className='header-text'>
          Producciones <br /> sin límte*
        </h1>
        <p className='description-text mt-2'>
          Esto es así. Con la tecnología que tenemos a día de hoy, podemos hacer
          prácticamente cualqueir cosa que se te ocurra. Tenemos el conocimiento
          y los recursos para afrontar cualquier tipo de producción. Contamos
          con una amplia cartera de realizadores y equipo técnico, un equipo
          modular se adapta a cada proyecto. <br /> <br /> *Bueno, sí hay un
          límite. Descubre hasta donde podemos llegar con
        </p>
        <span
          className='cta-text'
          onClick={() => {
            const element = document.querySelector(".footer");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Tu presupuesto{" "}
        </span>
      </div>
      <div className='flex gap-6 w-full justify-end  items-end md:items-start text-right flex-col-reverse md:flex-row'>
        <div className='w-3/5 md:w-1/5 showcase-text px-3 md:px-0'>
          <span className='text-[#6F00FF]'>/</span> Dirección{" "}
          <span className='text-[#6F00FF]'>/</span> Guionizaje{" "}
          <span className='text-[#6F00FF]'>/</span> Producción{" "}
          <span className='text-[#6F00FF]'>/</span> Dirección de fotografía{" "}
          <span className='text-[#6F00FF]'>/</span> Edición{" "}
          <span className='text-[#6F00FF]'>/</span> Color Grading{" "}
          <span className='text-[#6F00FF]'>/</span> VXF{" "}
          <span className='text-[#6F00FF]'>/</span> SXF{" "}
          <span className='text-[#6F00FF]'>/</span> Motion Graphics{" "}
          <span className='text-[#6F00FF]'>/</span>
          Dirección de Arte <span className='text-[#6F00FF]'>
            /
          </span> Estilsimo <span className='text-[#6F00FF]'>/</span> Home
          Economist <span className='text-[#6F00FF]'>/</span> Scouting
        </div>
        <div className='w-[50vw] h-[250px] md:h-[50vh]'>
          <Carousel images={["/images/video/1.webp", "/images/img1.jpg"]} />
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative '>
        <div className='  w-[80%] ms-auto z-[30] h-full grid grid-cols-2'>
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
