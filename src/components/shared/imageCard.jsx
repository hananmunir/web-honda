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
          "absolute w-3/4 top-2 md:top-4 right-10 text-2xl md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] font-bold text-[#FF3C00] text-right  md:leading-[65px] lg:leading-[120px] xl:leading-[80px] 2xl:leading-[180px]",
          titleClassname,
          subText && "right-auto left-2 md:left-5 "
        )}
      >
        {title}
      </span>
      <img src={imgSrc} className='h-full w-full' />
      {subText && (
        <span className='absolute bottom-2 md:bottom-4 left-2 md:left-5 text-xs md:text-base text-white'>
          {subText}
        </span>
      )}
    </div>
  );
}
