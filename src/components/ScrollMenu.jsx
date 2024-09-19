import React, { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
const items = [
  "Home",
  "Vídeo",
  "Foto",
  "Gráfico",
  "Portfolio",
  "Equipo",
  "Paellas",
  "Contacto",
];

const ScrollMenu = ({ count, setCount }) => {
  console.log(count);
  return (
    <div className='fixed  top-[34vh] 2xl:top-[36vh] z-10 left-5 md:left-10 '>
      <div
        style={{
          transform: `translateY(calc(-${count * 12.7}%)`,
        }}
        className='scroll-menu align-start relative transition-all duration-300 ease-in-out flex flex-col items-start menu-text font-light'
      >
        {/* Menu items */}
        {items.map((item, index) => (
          <span
            key={index}
            className={twMerge(
              "  text-left ",
              count === index && " text-[#FF3C00] opacity-100",
              index === 0 && "opacity-0"
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
