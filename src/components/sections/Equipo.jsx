import React from "react";
import { twMerge } from "tailwind-merge";

const TeamCard = ({ img, name, role }) => {
  return (
    <div className='relative'>
      <img src={img} alt='' className='w-full h-full object-cover' />
      <span className='absolute text-3xl bottom-3 left-4 w-1/3 text-left text-[#ff0000] font-bold'>
        {name}
      </span>
      <span className='block text-left ms-4 mt-2 w-2/3 text-lg'>{role}</span>
    </div>
  );
};

export default function Equipo({ count }) {
  return (
    <div className={twMerge("h-full py-12  w-screen  flex flex-col ")}>
      <div className=' equipo  w-2/4 p-4 h-full text-right flex flex-col self-end gap-2'>
        <h1 className='header-text'>Multidisciplinar & Responsive</h1>
        <p className='description-text mt-2'>
          ¿Y eso que quiere decir? Muy sencillo. Que cada uno de nosotros domina
          varios territorios creativos y que, en conjunto, podemos afrontar
          proyectos muy diversos. Que somos un equipo pequeño de base, pero que
          contamos con una amplia red de profesionales que nos permiten
          adaptarnos a cualqueir tipo de producción.
        </p>
        <span className='cta-text'> Pide por esa boquita</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
        <TeamCard
          img='/images/img1.jpg'
          name='Cristian Jiménez'
          role=' Director Creativo 
& Youtuber'
        />
        <TeamCard
          img='/images/img-2.jpg'
          name='Bego Alarcón'
          role=' Project Manager
 & Escultora conceptual'
        />
        <TeamCard
          img='/images/img3.jpg'
          name='Gus Arens'
          role=' Producer
 & Guitarrista'
        />
        <TeamCard
          img='/images/img4.jpg'
          name='Anto Gentile'
          role=' Diseño Gráfico
 & Edición'
        />
      </div>
    </div>
  );
}
