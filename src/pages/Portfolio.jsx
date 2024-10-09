import React, { useEffect } from "react";
import { portfolios } from "../assets/portfolios";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";

export default function Project() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title")?.toLowerCase()?.replaceAll(" ", "-");
  const project = portfolios[title];

  useEffect(() => {
    const container = document.querySelector(".portfilio-section");
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      className={twMerge("portfilio-section  dm-sans  w-full flex flex-col ")}
    >
      <span className='fixed  text-[5rem] font-normal top-10 left-10 text-6xl z-20 text-[#FF3C00] w-1/4 text-left  '>
        Portfolio
      </span>
      <img
        src={project.headerImage} // Dynamically set the banner image based on the section
        className='w-full h-[35vh] md:h-[45vh] sticky top-0 z-[-1] object-cover '
        alt='Section Banner'
      />
      <div className=' h-full pt-10 md:w-2/4 p-4 px-10   md:text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>{project.title}</h1>
        <h1 className='subheader-text'> {project.subTitle}</h1>
        <p className='description-text mt-2'>{project.description}</p>
        <span className='showcase-text my-4'>
          {" "}
          Foto <span className='text-[#6F00FF]'>/</span> Vídeo{" "}
          <span className='text-[#6F00FF]'>/</span> Diseño{" "}
        </span>
      </div>

      <img
        src={project.secBanner}
        alt='dummy img for now'
        className='object-cover md:h-[80vh] w-full'
      />
      <div className='flex  justify-end py-16 flex-col md:flex-row gap-4 md:gap-0'>
        <div className='flex flex-col gap-1 me-auto px-4 md:px-0 md:ms-20 text-left md:w-1/4'>
          <span className='subheader-text text-4xl'>
            {project.section2.title}
          </span>

          <span className='mt-1 description-text text-xl '>
            {project.section2.description}
          </span>
        </div>

        <img
          src={project.section2.imgSrc}
          alt='dummy img for now'
          className='object-cover md:w-2/5'
        />
      </div>

      <div className='h-full grid grid-cols-2 md:w-[90%]'>
        {project.projectImages.map((src, index) => (
          <div key={index} className='relative w-full h-[40vh] '>
            <img
              src={src}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
