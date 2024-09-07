import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
import ImageCard from "../shared/imageCard";
import Carousel from "../shared/Carousel";

export default function Grafico() {
  return (
    <div className={twMerge("h-full py-24    w-screen flex flex-col   ")}>
      <div className=' h-full grafico w-2/4 p-4  text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>Hablamos el mismo idioma</h1>
        <p className='description-text mt-2'>
          Aunque hemos ido transitando hacia la producción audiovisual en los
          últimos años, en otra vida fuimos diseñadores gráficos y directores de
          arte de publicidad. Sí, como lo oyes. Por eso sabemos perfectamente
          cuales son las necesidades y requisitos de un proyecto de comunicación
          visual, RRSS o Branding.
          <br />
          <br />
          No lo dudes, mándanos un briefing:
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
          ASAP{" "}
        </span>
      </div>
      <div className='flex gap-6 w-full justify-end'>
        <div className='w-1/5 showcase-text'>
          <span className='text-purple-600'>/</span> Branding{" "}
          <span className='text-purple-600'>/</span> Publicidad{" "}
          <span className='text-purple-600'>/</span> Ilustración{" "}
          <span className='text-purple-600'>/</span> Diseño Editorial{" "}
          <span className='text-purple-600'>/</span> Redes Sociales{" "}
          <span className='text-purple-600'>/</span> Diseño Web{" "}
          <span className='text-purple-600'>/</span> Visuales{" "}
          <span className='text-purple-600'>/</span> Packaging{" "}
        </div>
        <div className='w-[50vw] h-[50vh]'>
          <Carousel images={["/images/grafico.jpg", "/images/img1.jpg"]} />
        </div>
      </div>
      {/* "Ver Todos" section */}
      <div className='w-full py-20 relative '>
        <div className='  w-[95vw] z-[30] grid grid-cols-2'>
          <ImageCard title='Ray Motor' imgSrc='/images/beach.png' />
          <ImageCard title='Sangre de Toro' imgSrc='/images/wine.png' />
        </div>
        <div className='absolute right-6 top-[45%]'>
          <PlusCircle size={50} color='black ' />
        </div>
        <div className='text-[#ff0000] text-lg flex justify-end px-14  '>
          ver todos
        </div>
      </div>
    </div>
  );
}
