import React, { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
const items = [
  "Reel",
  "Video",
  "Foto",
  "Gráfico",
  "Diseno",
  "Portfolio",
  "Equipo",
  "Paellas",
  "Contacto",
  "Producción",
];

const ScrollMenu = ({ count, setCount }) => {
  return (
    <div className="fixed  top-[17vh] z-10 left-5 ">
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
          transform: `translateY(calc(-${count * 12.25}%)`,
        }}
        className="scroll-menu relative leading-[95px] transition-all duration-300 ease-in-out flex flex-col items-center text-black text-[5rem] font-normal"
      >
        {/* Menu items */}
        {items.map((item, index) => (
          <span
            key={index}
            className={twMerge(
              "   ",
              count === index && " text-[#ff0000] opacity-100"
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
