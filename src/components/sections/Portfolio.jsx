import React from "react";
import { PlusCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";
export default function Portfolio({ count }) {
  const projects = [
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
    { title: "Ray Motor", imgSrc: "/images/logo.png" },
    { title: "Sangre del Toro", imgSrc: "/images/logo.png" },
  ];

  return (
    <div className={twMerge("h-full w-screen py-12  flex flex-col ")}>
      <div className="bg-white h-full w-2/4 p-4  text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Vamos <br /> al grano
        </h1>
        <p className="text-black text-xl mt-4">
          como una herramienta de narración visual versátil y flexible, Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam.
        </p>
      </div>
      {/* Projects grid section */}
      <div className="text-black text-2xl flex justify-end gap-4 px-10 mb-10 font-semibold ">
        <div className="flex gap-2 justify-center items-center">
          <PlusCircle size={30} color="lightgray" />
          <span>Foto</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <PlusCircle size={30} color="lightgray" />
          <span>Video</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <PlusCircle size={30} color="lightgray" />
          <span>Diseno</span>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[30vw] h-[40vh] border border-black"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold bg-opacity-50 bg-black p-2">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
