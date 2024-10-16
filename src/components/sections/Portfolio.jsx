import React, { useState } from "react";
import { CircleX, PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import useMenuStore from "../../store/index";
import { portfolios } from "../../assets/portfolios";

export default function Portfolio({ setSelectedOption, setFormOpen }) {
  const [selectedCategory, setSelectedCategory] = useState("video");
  const { menuOpen } = useMenuStore();
  const match = Object.keys(portfolios).map((key) => {
    if (portfolios[key].sections.includes("portfolio"))
      return {
        ...portfolios[key],
        imgSrc: portfolios[key].headerImage,
      };

    return null;
  });

  const projects = match.filter((item) => item);

  const handleOnClick = (name) => {
    setSelectedOption("portfolio");
  };
  return (
    <div className={twMerge("h-full w-screen py-12  flex flex-col ")}>
      <div className=' h-full w-3/5 md:w-2/4 p-4 portfolio  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Vamos <br /> al grano
        </h1>
        <p className='description-text mt-2'>
          Esto es muy simple, aquí tienes una selección de nuestros mejores
          trabajos, filtrados en tres categorías. Fácil. Pero es una pena,
          porque puede ser que los útlimos no estén aquí. Y puede que esos sean
          los mejores. Lo que está claro es, que podemos hacer mucho más de lo
          que ves aquí. De hecho, te voy a contar un secreto, estamos en
          búsqueda del cliente perfecto, que nos de la posibilidad de explotar
          todo nuestro potencial. ¿Serás tú?
        </p>
        <span className='cta-text' onClick={() => setFormOpen(true)}>
          {" "}
          Soy cliente perfecto
        </span>
      </div>
      {/* Projects grid section */}
      <div
        className={twMerge(
          "text-black text-xl md:text-4xl flex justify-end gap-3 md:gap-5 px-4 md:px-10 text  mt-5 ml-auto md:mt-10  max-w-[70vw] md:max-w-screen flex-wrap  ",
          !menuOpen && "z-50"
        )}
      >
        <div
          onClick={() => setSelectedCategory("video")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "video" && "text-[#FF3C00]"
          )}
        >
          <div className=' md:hidden'>
            {selectedCategory === "video" ? (
              <PlusCircle size={20} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={20} strokeWidth={1} color='lightgray' />
            )}
          </div>
          <div className='hidden md:block'>
            {selectedCategory === "video" ? (
              <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={30} strokeWidth={1} color='lightgray' />
            )}
          </div>
          <span>Vídeo</span>
        </div>
        <div
          onClick={() => setSelectedCategory("foto")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "foto" && "text-[#FF3C00]"
          )}
        >
          <div className=' md:hidden'>
            {selectedCategory === "foto" ? (
              <PlusCircle size={20} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={20} strokeWidth={1} color='lightgray' />
            )}
          </div>
          <div className='hidden md:block'>
            {selectedCategory === "foto" ? (
              <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={30} strokeWidth={1} color='lightgray' />
            )}
          </div>
          <span>Foto</span>
        </div>

        <div
          onClick={() => setSelectedCategory("diseno")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "diseno" && "text-[#FF3C00]"
          )}
        >
          <div className=' md:hidden'>
            {selectedCategory === "diseno" ? (
              <PlusCircle size={20} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={20} strokeWidth={1} color='lightgray' />
            )}
          </div>{" "}
          <div className='hidden md:block'>
            {selectedCategory === "diseno" ? (
              <PlusCircle size={30} strokeWidth={1} color='#FF3C00' />
            ) : (
              <CircleX size={30} strokeWidth={1} color='lightgray' />
            )}
          </div>
          <span>Diseño</span>
        </div>
      </div>
      <div className=' py-20 pt-4 md:pt-10 relative  w-[80%] ms-auto'>
        <div
          style={{ direction: "rtl" }}
          className='  ml-auto w-full text-left leading-[80px] z-[30] grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-10'
        >
          {projects
            .filter(
              (project) => project.type.toLowerCase() === selectedCategory
            )
            .map((project, index) => (
              <ImageCard
                key={index}
                title={project.title}
                imgSrc={project.imgSrc}
                subText={
                  <>
                    {" "}
                    Foto <span className='text-purple-600'>/</span> Vídeo
                    <span className='text-purple-600'>/</span> Diseño
                  </>
                }
                titleClassname={
                  "text-sm md:text-[2.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] leading-[25px] md:leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[70px] text-left"
                }
                onClick={handleOnClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
