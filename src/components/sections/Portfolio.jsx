import React, { useState } from "react";
import { CircleX, PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import useMenuStore from "../../store/index";

const projects = {
  foto: [
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo{" "}
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
  ],
  video: [
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
  ],
  diseno: [
    {
      title: "Sangre de Toro",
      imgSrc: "/images/wine.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
    {
      title: "Ray Motor",
      imgSrc: "/images/beach.png",

      subText: (
        <>
          {" "}
          Foto <span className="text-[#6F00FF]">/</span> Vídeo
          <span className="text-[#6F00FF]">/</span> Diseño
        </>
      ),
    },
  ],
};
export default function Portfolio({ setSelectedOption }) {
  const [selectedCategory, setSelectedCategory] = useState("foto");
  const { menuOpen } = useMenuStore();

  const handleFocusContainer = (name) => {
    const element = document.querySelector(`.${name}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnClick = (name) => {
    setSelectedOption("portfolio");
  };
  return (
    <div className={twMerge("h-full w-screen py-12  flex flex-col ")}>
      <div className=" h-full w-3/5 md:w-2/4 p-4 portfolio  text-right flex flex-col self-end gap-2">
        <h1 className="header-text">
          Vamos <br /> al grano
        </h1>
        <p className="description-text mt-2">
          como una herramienta de narración visual versátil y flexible, Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam.
        </p>
        <span
          className="cta-text"
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
      <div
        className={twMerge(
          "text-black text-xl md:text-4xl flex justify-end gap-5 px-4 md:px-10 text  mt-5 md:mt-10   ",
          !menuOpen && "z-50"
        )}
      >
        <div
          onClick={() => setSelectedCategory("foto")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "foto" && "text-[#FF3C00]"
          )}
        >
          <div className=" md:hidden">
            {selectedCategory === "foto" ? (
              <PlusCircle size={20} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={20} strokeWidth={1} color="lightgray" />
            )}
          </div>
          <div className="hidden md:block">
            {selectedCategory === "foto" ? (
              <PlusCircle size={30} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={30} strokeWidth={1} color="lightgray" />
            )}
          </div>
          <span>Foto</span>
        </div>
        <div
          onClick={() => setSelectedCategory("video")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "video" && "text-[#FF3C00]"
          )}
        >
          <div className=" md:hidden">
            {selectedCategory === "video" ? (
              <PlusCircle size={20} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={20} strokeWidth={1} color="lightgray" />
            )}
          </div>
          <div className="hidden md:block">
            {selectedCategory === "video" ? (
              <PlusCircle size={30} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={30} strokeWidth={1} color="lightgray" />
            )}
          </div>
          <span>Video</span>
        </div>
        <div
          onClick={() => setSelectedCategory("diseno")}
          className={twMerge(
            "flex gap-1.5 cursor-pointer  justify-center items-center",
            selectedCategory === "diseno" && "text-[#FF3C00]"
          )}
        >
          <div className=" md:hidden">
            {selectedCategory === "diseno" ? (
              <PlusCircle size={20} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={20} strokeWidth={1} color="lightgray" />
            )}
          </div>{" "}
          <div className="hidden md:block">
            {selectedCategory === "diseno" ? (
              <PlusCircle size={30} strokeWidth={1} color="#FF3C00" />
            ) : (
              <CircleX size={30} strokeWidth={1} color="lightgray" />
            )}
          </div>
          <span>Diseno</span>
        </div>
      </div>
      <div className=" py-20 pt-4 md:pt-10 relative  w-[80%] ms-auto">
        <div className="  w-full text-left leading-[80px] z-[30] grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-10">
          {projects[selectedCategory].map((project, index) => (
            <ImageCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              titleClassname={
                "text-sm md:text-[2.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] leading-[25px] md:leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[70px] text-left"
              }
              subText={project.subText}
              onClick={handleOnClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
