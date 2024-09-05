import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
export default function Portfolio({ setSelectedOption }) {
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
        <span className='cta-text'> Soy cliente perfecto</span>
      </div>
      {/* Projects grid section */}
      <div className='text-black text-2xl flex justify-end gap-4 px-10 mb-10  mt-5 font-semibold '>
        <div
          onClick={() => handleFocusContainer("foto")}
          className='flex gap-2 justify-center items-center'
        >
          <PlusCircle size={30} color='lightgray' />
          <span>Foto</span>
        </div>
        <div
          onClick={() => handleFocusContainer("video")}
          className='flex gap-2 justify-center items-center'
        >
          <PlusCircle size={30} color='lightgray' />
          <span>Video</span>
        </div>
        <div
          onClick={() => handleFocusContainer("diseno")}
          className='flex gap-2 justify-center items-center'
        >
          <PlusCircle size={30} color='lightgray' />
          <span>Diseno</span>
        </div>
      </div>
      <div className='w-full py-20 relative '>
        <div className='  w-full text-left leading-[80px] z-[30] grid grid-cols-3 gap-y-10'>
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />{" "}
          <ImageCard
            onClick={handleOnClick}
            title='Ray Motor'
            imgSrc='/images/beach.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />{" "}
          <ImageCard
            onClick={handleOnClick}
            title='Ray Motor'
            imgSrc='/images/beach.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />{" "}
          <ImageCard
            onClick={handleOnClick}
            title='Ray Motor'
            imgSrc='/images/beach.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
          <ImageCard
            onClick={handleOnClick}
            title='Sangre de Toro'
            imgSrc='/images/wine.png'
            titleClassname={"text-[4rem] leading-[80px] text-left"}
            subText={
              <>
                {" "}
                Foto <span className='text-purple-600'>/</span> Vídeo{" "}
                <span className='text-purple-600'>/</span> Diseño
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
