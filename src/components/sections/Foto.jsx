import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import Carousel from "../shared/Carousel";
import { portfolios } from "../../assets/portfolios";
export default function Foto({ setFormOpen }) {
  const match = Object.keys(portfolios).map((key) => {
    if (portfolios[key].sections.includes("foto"))
      return {
        ...portfolios[key],
        imgSrc: portfolios[key].headerImage,
      };

    return null;
  });

  const projects = match.filter((item) => item);
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className=' foto h-full w-[70%] md:w-2/4 p-4  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Donde no llega <br /> Midjourney
        </h1>
        <p className='description-text mt-2'>
          Tu y yo sabemos que para conseguir una buena producción fotográfica,
          aún es necesario contar con seres humanos, creativos, con talento y
          experiencia en tu sector. Ya sea una gran producción de publi, un
          pequeño evento o unas fotos de tu producto, tenemos el equipo humano y
          no humano que necesitas.
          <br />
          <br />
          Sí no estás satisfecho con lo que te ha dado Midjourney:
        </p>
        <span className='cta-text' onClick={() => setFormOpen(true)}>
          {" "}
          Habla con nosotros{" "}
        </span>
      </div>
      <div className='flex gap-6 w-full justify-end text-right flex-col-reverse md:flex-row md:items-start items-end'>
        <div className='w-3/5 px-2 md:px-0 md:w-1/5 showcase-text'>
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
          <Carousel
            images={[
              "/images/foto/1.jpg",
              "/images/foto/2.jpg",
              "/images/foto/3.jpg",
              "/images/foto/4.jpg",
              "/images/foto/5.jpg",
              "/images/foto/6.jpg",
              "/images/foto/7.jpg",
              "/images/foto/8.jpg",
              "/images/foto/9.jpg",
              "/images/foto/10.jpg",
              "/images/foto/11.jpg",
              "/images/foto/12.jpg",
              "/images/foto/13.jpg",
            ]}
          />
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative '>
        <div
          style={{ direction: "rtl" }}
          className='  w-[80%] ml-auto   z-[30] h-full grid grid-cols-2'
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
