import React from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
export default function ImageCard({
  title,
  imgSrc,
  subText,
  titleClassname,
  onClick,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/project?title=" + title);
      }}
      className='col-span-1 h-full w-full relative cursor-pointer'
    >
      <span
        className={twMerge(
          "absolute w-3/4 top-5 right-10 text-2xl md:text-[4rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[9rem] font-bold text-[#FF3C00]/80 text-right  md:leading-[65px] lg:leading-[120px] xl:leading-[80px] 2xl:leading-[180px]",
          titleClassname
        )}
      >
        {title}
      </span>
      <img src={imgSrc} className='h-full w-full' />
      {subText && (
        <span className='absolute bottom-0 left-2 md:left-10 text-xs md:text-base text-white'>
          {subText}
        </span>
      )}
    </div>
  );
}
