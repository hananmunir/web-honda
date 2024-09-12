import React, { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
const items = [
  "Vídeo",
  "Foto",
  "Gráfico",
  "Portfolio",
  "Equipo",
  "Paellas",
  "Contacto",
];

const ScrollMenu = ({ count, setCount }) => {
  return (
    <div className='fixed  top-[45vh] z-10 left-5 md:left-10 '>
      {/* <div className='absolute  h-48 -top-6 w-full flex flex-col justify-between items-center'>
        <ChevronUp
          onClick={() => {
            if (count === items.length) return;
            setCount((prev) => prev + 1);
          }}
          className={twMerge(
            "cursor-pointer z-10",
            count === items.length && "opacity-60"
          )}
          size={60}
        />
        <ChevronDown
          onClick={() => {
            if (count === 0) return;
            setCount((prev) => prev - 1);
          }}
          className={twMerge(
            "cursor-pointer z-10",
            count === 0 && "opacity-60"
          )}
          size={60}
        />
      </div> */}

      <div
        style={{
          transform: `translateY(calc(-${count * 14.7}%)`,
        }}
        className='scroll-menu align-start relative transition-all duration-300 ease-in-out flex flex-col items-start menu-text font-light'
      >
        {/* Menu items */}
        {items.map((item, index) => (
          <span
            key={index}
            className={twMerge(
              "  text-left ",
              count - 1 === index && " text-[#FF3C00] opacity-100"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollMenu;
