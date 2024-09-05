import React from "react";
import { twMerge } from "tailwind-merge";

export default function ImageCard({
  title,
  imgSrc,
  subText,
  titleClassname,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className='col-span-1 h-full w-full relative cursor-pointer'
    >
      <span
        className={twMerge(
          "absolute w-3/4 top-5 right-10 text-[9rem] font-bold text-[#ff0000] text-right mix-blend-color-burn leading-[180px]",
          titleClassname
        )}
      >
        {title}
      </span>
      <img src={imgSrc} className='h-full w-full' />
      {subText && (
        <span className='absolute bottom-0 left-10  text-white'>{subText}</span>
      )}
    </div>
  );
}
