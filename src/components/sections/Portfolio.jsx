import React, { useState } from "react";
import { CircleX, PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
export default function Portfolio({ setSelectedOption }) {
  const [selectedCategory, setSelectedCategory] = useState("foto");
  const projects = {
    foto: [
      {
        title: "Sangre de Toro",
        imgSrc: "/images/wine.png",
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
        subText: (
          <>
            {" "}
            Foto <span className='text-purple-600'>/</span> Vídeo
            <span className='text-purple-600'>/</span> Diseño
          </>
        ),
      },
    ],
    video: [
      {
        title: "Ray Motor",
        imgSrc: "/images/beach.png",
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
        subText: (
          <>
            {" "}
            Foto <span className='text-purple-600'>/</span> Vídeo
            <span className='text-purple-600'>/</span> Diseño
          </>
        ),
      },
    ],
    diseno: [
      {
        title: "Sangre de Toro",
        imgSrc: "/images/wine.png",
        titleClassname: "text-[4rem] leading-[80px] text-left",
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
        titleClassname: "text-[4rem] leading-[80px] text-left",
        subText: (
          <>
            {" "}
            Foto <span className='text-purple-600'>/</span> Vídeo
            <span className='text-purple-600'>/</span> Diseño
          </>
        ),
      },
    ],
  };

  const handleFocusContainer = (name) => {
    const element = document.querySelector(`.${name}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnClick = (name) => {
    setSelectedOption("portfolio");
  };
  return (
    <div className={twMerge("h-full w-screen py-12  flex flex-col ")}>
      <div className=' h-full w-2/4 p-4 portfolio  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Vamos <br /> al grano
        </h1>
        <p className='description-text mt-2'>
          como una herramienta de narración visual versátil y flexible, Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam.
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
          {" "}
          Soy cliente perfecto
        </span>
      </div>
      {/* Projects grid section */}
      <div className='text-black text-4xl flex justify-end gap-5 px-10 text  mt-10  '>
        <div
          onClick={() => setSelectedCategory("foto")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "foto" && "text-[#FF3C00]"
          )}
        >
          {selectedCategory === "foto" ? (
            <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
          ) : (
            <CircleX size={30} strokeWidth={1} color='lightgray' />
          )}
          <span>Foto</span>
        </div>
        <div
          onClick={() => setSelectedCategory("video")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "video" && "text-[#FF3C00]"
          )}
        >
          {selectedCategory === "video" ? (
            <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
          ) : (
            <CircleX size={30} strokeWidth={1} color='lightgray' />
          )}
          <span>Video</span>
        </div>
        <div
          onClick={() => setSelectedCategory("diseno")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "diseno" && "text-[#FF3C00]"
          )}
        >
          {selectedCategory === "diseno" ? (
            <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
          ) : (
            <CircleX size={30} strokeWidth={1} color='lightgray' />
          )}
          <span>Diseno</span>
        </div>
      </div>
      <div className='w-full py-20 pt-10 relative '>
        <div className='  w-full text-left leading-[80px] z-[30] grid grid-cols-3 gap-y-10'>
          {projects[selectedCategory].map((project, index) => (
            <ImageCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              titleClassname={project.titleClassname}
              subText={project.subText}
              onClick={handleOnClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
