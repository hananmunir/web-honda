import React from "react";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className='px-9 footer relative !z-20 py-12 text-xl text-white  bg-[#1d1d1b] gap-y-8 w-full grid grid-cols-12'>
      <div className=' col-span-12 md:col-span-4 gap-2  flex flex-col items-center md:items-start '>
        <img
          src='images/logo.png'
          alt='logo'
          className='h-28 object-contain'
          onClick={() => {
            navigate("/");
          }}
        />
        <span className='text-white text-xl md:text-2xl'>
          © Hondo Creative Productio S.L.
        </span>

        <div className='flex mt-4 gap-1  md:flex-row text-[#FF3C00] text-center md:items-start font-semibold text-sm md:text-base'>
          <span>Política de cookies</span>
          <span>Aviso legal</span>
        </div>
      </div>
      <div className='col-span-12 md:col-span-8 md:w-3/4 md:ms-auto flex flex-col gap-3 md:gap-6 items-center md:items-end '>
        <span className='header-text  text-[#6F00FF]'>Algo más</span>
        <div className='text-end description-text text-white text-base  '>
          Nos gusta explicarnos a nuestra manera, pero también nos gusta que
          cuando busques una agencia creativa puedas encontrarnos. Por eso en
          este texto ponemos las palabras clave para que Google nos lleve a ti
          cuando lo necesites. Hondostudio es una agencia creativa de Barcelona
          especializada en proyectos innovadores y soluciones creativas
          personalizadas, que podrás explorar en nuestro portfolio.{" "}
          <span className='text-[#FF3C00]'>Servicios creativos</span> |{" "}
          <span className='text-[#FF3C00]'>
            Soluciones innovadoras en diseño{" "}
          </span>
          | <span className='text-[#FF3C00]'>Proyectos creativos </span> |{" "}
          <span className='text-[#FF3C00]'>Agencia de publicidad</span> |{" "}
          <span className='text-[#FF3C00]'>Estudio de publicidad</span> |{" "}
          <span className='text-[#FF3C00]'>Agencia publicitaria</span>.
        </div>
      </div>
    </div>
  );
}
