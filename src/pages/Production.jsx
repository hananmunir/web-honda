import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../components/shared/imageCard";

export default function Production() {
  const projects = [
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo{" "}
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",
      titleClassname: "text-[1rem] leading-[20px] text-left",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",
      titleClassname: "text-[1rem] leading-[20px] text-left ",
      subText: (
        <>
          {" "}
          Foto <span className='text-purple-600'>/</span> Vídeo
          <span className='text-purple-600'>/</span> Diseño
        </>
      ),
    },
  ];
  return (
    <div className={twMerge("   flex flex-col   ")}>
      <div className='flex flex-col gap-1 absolute top-10 left-10'>
        <span className='  md:text-6xl text-xl z-20  text-[#FF3C00] w-1/4 text-left  '>
          Producción Audiovisual
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Publicidad
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Social
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Branded
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Corporativo
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Formación
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Productos
        </span>
        <span className='  md:text-6xl text-xl z-20  text-black w-1/4 text-left  '>
          Eventos
        </span>
      </div>
      <img
        src='/images/banner.png' // Dynamically set the banner image based on the section
        className='w-full h-[45vh] sticky top-0 -z-[1] object-fill'
        alt='Section Banner'
      />
      <div className=' h-full md:w-2/4 p-4  md:text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'> Vídeo, Foto y Animación</h1>
        <p className='description-text mt-2'>
          Este proyecto impulsado por el Museo Agbar de las
          <br />
          <br />
          Aguas, ofrece recursos digitales para aprender sobre cultivo,
          sostenibilidad y meteorología. El Aula Activa es un aula al que
          acceder desde la web del Museo Agbar y así mirar los cursos de interés
          para el usuario.
        </p>
        <img
          src='/images/reel-video-pages.png'
          alt='dummy img for now'
          className='bg-gray-200 h-[40vh]'
        />
        <div className='mt-10'>
          <div className=' showcase-text'>
            <span className='text-purple-600'>/</span> Dirección{" "}
            <span className='text-purple-600'>/</span> Guionizaje{" "}
            <span className='text-purple-600'>/</span> Producción{" "}
            <span className='text-purple-600'>/</span> Dirección de fotografía{" "}
            <span className='text-purple-600'>/</span> Edición{" "}
            <span className='text-purple-600'>/</span> Color Grading{" "}
            <span className='text-purple-600'>/</span> VXF{" "}
            <span className='text-purple-600'>/</span> SXF{" "}
            <span className='text-purple-600'>/</span> Motion Graphics{" "}
            <span className='text-purple-600'>/</span>
            Dirección de Arte <span className='text-purple-600'>/</span>{" "}
            Estilsimo <span className='text-purple-600'>/</span> Home Economist{" "}
            <span className='text-purple-600'>/</span> Scouting
          </div>
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full h-full md:py-20 p-0 relative flex justify-center'>
        <img
          src='/images/page-1.jpg'
          alt='dummy img for now'
          className='bg-gray-200 md:h-[40vh] h-[15vh]'
        />
        <img
          src='/images/page-2.jpg'
          alt='dummy img for now'
          className='bg-gray-200 md:h-[40vh] h-[15vh]'
        />
        <img
          src='/images/page-3.jpg'
          alt='dummy img for now'
          className='bg-gray-200 md:h-[40vh] h-[15vh]'
        />
      </div>
      <div className='md:py-20 p-0 flex flex-col gap-10 justify-start items-start'>
        <span className='md:px-10 px-2 md:text-[8rem] text-[3rem]'>
          Proyectos
        </span>
        <div className='w-full text-left leading-[80px] z-[30] grid grid-cols-3 gap-y-10'>
          {projects.map((project, index) => (
            <ImageCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              titleClassname={project.titleClassname}
              subText={project.subText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
