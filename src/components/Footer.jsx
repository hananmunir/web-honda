import React from "react";

export default function Footer() {
  return (
    <div className='px-9 py-12 text-xl text-white  bg-[#1d1d1b] w-screen grid grid-cols-12'>
      <div className=' col-span-4 gap-2  flex flex-col items-start '>
        <img src='images/logo.png' alt='logo' className='h-28 object-contain' />
        <span className='text-white text-2xl'>
          © Hondo Creative Productio S.L.
        </span>

        <div className='flex mt-4 flex-col text-red-500 items-start font-semibold'>
          <span>Política de cookies</span>
          <span>Aviso legal</span>
        </div>
      </div>
      <div className='col-span-8 w-3/4 ms-auto flex flex-col gap-6 items-end '>
        <span className='text-[4rem]  text-violet-700'>Algo más</span>
        <div className='text-end '>
          Nos gusta explicarnos a nuestra manera, pero también nos gusta que
          cuando busques una agencia creativa puedas encontrarnos. Por eso en
          este texto ponemos las palabras clave para que Google nos lleve a ti
          cuando lo necesites. Hondostudio es una agencia creativa de Barcelona
          especializada en proyectos innovadores y soluciones creativas
          personalizadas, que podrás explorar en nuestro portfolio.{" "}
          <span className='text-red-500'>Servicios creativos</span> |{" "}
          <span className='text-red-500'>
            Soluciones innovadoras en diseño{" "}
          </span>
          | <span className='text-red-500'>Proyectos creativos </span>|{" "}
          <span className='text-red-500'>Agencia de publicidad</span>|{" "}
          <span className='text-red-500'>Estudio de publicidad</span> |
          <span className='text-red-500'>Agencia publicitaria</span>.
        </div>
      </div>
    </div>
  );
}
