import React, { useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Project() {
  useEffect(() => {
    const container = document.querySelector(".portfilio-section");
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const projects = [
    { title: "Sangre del Toro", imgSrc: "/images/project/activa/p-1.jpg" },
    { title: "Ray Motor", imgSrc: "/images/project/activa/p-2.jpg" },
    { title: "Sangre del Toro", imgSrc: "/images/project/activa/p-3.jpg" },
    { title: "Ray Motor", imgSrc: "/images/project/activa/p-4.jpg" },
  ];
  return (
    <div
      className={twMerge("portfilio-section  dm-sans  w-full flex flex-col ")}
    >
      <span className='fixed  text-[5rem] font-normal top-10 left-10 text-6xl z-20 text-[#FF3C00] w-1/4 text-left  '>
        Portfolio
      </span>
      <img
        src='/images/project/activa/banner.jpg' // Dynamically set the banner image based on the section
        className='w-full h-[45vh] sticky top-0 z-[-1] object-fill'
        alt='Section Banner'
      />
      <div className=' h-full pt-10 md:w-2/4 p-4 px-10   md:text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'> Aula Activa H2O</h1>
        <h1 className='subheader-text'> Museo Agbar</h1>
        <p className='description-text mt-2'>
          Este proyecto impulsado por el Museo Agbar de las Aguas, ofrece
          recursos digitales para aprender sobre cultivo, sostenibilidad y
          meteorología. El Aula Activa es un aula al que acceder desde la web
          del Museo Agbar y así mirar los cursos de interés para el usuario.
        </p>
        <span className='showcase-text my-4'>
          {" "}
          Foto <span className='text-[#6F00FF]'>/</span> Vídeo{" "}
          <span className='text-[#6F00FF]'>/</span> Diseño{" "}
        </span>
      </div>

      <img
        src='/images/project/activa/sec-banner.jpg'
        alt='dummy img for now'
        className='object-cover md:h-[80vh] w-full'
      />
      <div className='flex  justify-end py-16 flex-col md:flex-row gap-4 md:gap-0'>
        <div className='flex flex-col gap-1 me-auto px-4 md:px-0 md:ms-20 text-left md:w-1/4'>
          <span className='subheader-text text-4xl'>Los recursos</span>
          <span className='description-text text-xl'>
            Para poner en marcha esta iniciativa,
          </span>
          <span className='mt-1 description-text text-xl '>
            creamos contenido audiovisual visualmente simple y atractivo, en
            localizaciones escogidas con cuidado para conectar con el concepto
            de huerto urbano. También, diseñamos la imagen que llevaría la
            cartelería para anunciar el proyecto, así como el diseño de esta
            sección de la web y la experiencia de usuario de la misma.
          </span>
        </div>

        <img
          src='/images/project/activa/section-img.jpg'
          alt='dummy img for now'
          className='object-cover md:w-2/5'
        />
      </div>

      <div className='h-full grid grid-cols-2 md:w-[90%]'>
        {projects.map((project, index) => (
          <div key={index} className='relative w-full h-[40vh] '>
            <img
              src={project.imgSrc}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
