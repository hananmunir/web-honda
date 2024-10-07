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

const menuMap = {
  1: "video",
  2: "foto",
  3: "grafico",
  4: "portfolio",
  5: "equipo",
  6: "paellas",
  7: "contact",
};

const ScrollMenu = ({ count, setCount }) => {
  return (
    <div className='fixed top-[29.5vh] md:top-[34vh] 2xl:top-[36vh] z-10 left-5 md:left-10  '>
      <div
        style={{
          transform: `translateY(calc(-${count * 12.7}%)`,
        }}
        className='scroll-menu align-start relative transition-all duration-300 ease-in-out flex flex-col items-start menu-text '
      >
        {/* Menu items */}
        {items.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              setCount(index);
              const container = document.querySelector(`.${menuMap[index]}`);
              const parent = document.querySelector(`.parent`);
              const offsetPosition =
                container.offsetTop -
                (window.innerWidth < 756
                  ? window.innerHeight * 0.4
                  : window.innerHeight * 0.5);
              parent.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
            className={twMerge(
              "  text-left cursor-pointer ",
              count === index && " text-[#FF3C00] opacity-100",
              index === 0 && "opacity-0 pointer-events-none"
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
