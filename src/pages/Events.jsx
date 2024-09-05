import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Events() {
  const projects = [
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
  ];
  return (
    <div className={twMerge("h-full   w-screen flex flex-col   ")}>
      <span className='absolute top-10 left-10 text-6xl z-20 font-medium text-[#ff0000] w-1/4 text-left  '>
        Eventos
      </span>
      <img
        src='/images/banner.png' // Dynamically set the banner image based on the section
        className='w-full h-[45vh] sticky top-0 z-[10] object-fill'
        alt='Section Banner'
      />
      <div className='bg-white h-full w-2/4 p-4  text-right flex flex-col self-end gap-2'>
        <h1 className='text-purple-600 text-6xl'> Vídeo, Foto y Animación</h1>
        <p className='text-black text-xl mt-4'>
          Este proyecto impulsado por el Museo Agbar de las
          <br />
          <br />
          Aguas, ofrece recursos digitales para aprender sobre cultivo,
          sostenibilidad y meteorología. El Aula Activa es un aula al que
          acceder desde la web del Museo Agbar y así mirar los cursos de interés
          para el usuario.
        </p>
        <img src='' alt='dummy img for now' className='bg-gray-200 h-[40vh]' />
        <div className='mt-10'>
          <span>
            Dirección / Guionizaje / Scouting / Talent Managment / Edición /
            Color Grading / Motion Graphics Dirección de Arte Estilsimo / Home
            economist / Guionizaje Managment / Edición / Color Grading
          </span>
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full h-full py-20 relative flex justify-center'>
        <img
          src='/images/logo.png'
          alt='dummy img for now'
          className='bg-gray-200 h-[40vh]'
        />
        <img
          src='/images/logo.png'
          alt='dummy img for now'
          className='bg-gray-200 h-[40vh]'
        />
        <img
          src='/images/logo.png'
          alt='dummy img for now'
          className='bg-gray-200 h-[40vh]'
        />
      </div>
      <div className='py-20 flex flex-col gap-10 justify-start items-start'>
        <span className=' px-10 text-[8rem]'>Proyectos</span>
        <div className='w-full h-full grid grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='relative w-[30vw] h-[40vh] border border-black'
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <h2 className='text-white text-4xl font-bold bg-opacity-50 bg-black p-2'>
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
