import React from "react";
import { twMerge } from "tailwind-merge";

const TeamCard = ({ img, name, role }) => {
  return (
    <div className=' h-full flex flex-col '>
      <div className='relative'>
        <img src={img} alt='' className='w-full  object-contain' />
        <span className='absolute text-xl md:text-3xl bottom-3 left-4 w-1/3 text-left text-[#ff0000] font-bold'>
          {name}
        </span>
      </div>
      <span className=' text-left ms-2 md:ms-4 mt-2 w-2/3 text-sm md:text-lg'>
        {role}
      </span>
    </div>
  );
};

export default function Equipo({ count }) {
  return (
    <div className={twMerge("h-full py-12  w-screen  flex flex-col ")}>
      <div className=' equipo  w-[70%] md:w-2/4 p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>
          Multidisciplinar <br /> & Responsive
        </h1>
        <p className='description-text mt-2'>
          ¿Y eso que quiere decir? Muy sencillo. Que cada uno de nosotros domina
          varios territorios creativos y que, en conjunto, podemos afrontar
          proyectos muy diversos. Que somos un equipo pequeño de base, pero que
          contamos con una amplia red de profesionales que nos permiten
          adaptarnos a cualqueir tipo de producción.
        </p>
        <span className='cta-text'> Pide por esa boquita</span>
      </div>
      <div className=' grid gap-y-3 grid-cols-1 md:grid-cols-2  w-[65%] md:w-[70%] ms-auto '>
        <TeamCard
          img='/images/img1.jpg'
          name='Cristian Jiménez'
          role={
            <span>
              Director Creativo <br />& Youtuber
            </span>
          }
        />
        <TeamCard
          img='/images/img-2.jpg'
          name='Bego Alarcón'
          role={
            <span>
              Project Manager <br />& Escultora conceptual
            </span>
          }
        />
        <TeamCard
          img='/images/img3.jpg'
          name='Gus Arens'
          role={
            <span>
              Productor <br />& Guitarrista
            </span>
          }
        />
        <TeamCard
          img='/images/img4.jpg'
          name='Anto Gentile'
          role={
            <span>
              Director de Fotografía <br />& Pintor
            </span>
          }
        />
      </div>
    </div>
  );
}
