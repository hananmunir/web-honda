import React, { useState } from "react";
import { CirclePlus, CircleX } from "lucide-react";

export default function Hondo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-[100vh] flex">
      <div
        className={`${
          isSidebarOpen ? "w-4/5" : "w-full"
        } transition-all duration-300 bg-slate-700 flex flex-col justify-between p-4 items-end`}
      >
        <span className="text-white text-6xl">Hondo</span>
        {isSidebarOpen ? (
          <CircleX
            color="white"
            size={42}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        ) : (
          <CirclePlus
            color="white"
            size={42}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${
          isSidebarOpen ? " w-1/5 block" : "hidden"
        } transition-all duration-300 bg-[#252525] text-white flex flex-col justify-around py-2 px-10 items-start text-left overflow-hidden`}
      >
        <div className="text-2xl ">
          <span className="hover:text-purple-500 cursor-pointer">ES</span> /{" "}
          <span className="hover:text-purple-500 cursor-pointer">EN</span>
        </div>
        <div className="text-2xl hover:text-orange-500 cursor-pointer">
          Producción Audiovisual
        </div>
        <div className="text-2xl hover:text-orange-500 cursor-pointer">
          Educación y Cultura
        </div>
        <div className="text-2xl hover:text-orange-500 cursor-pointer">
          Agencia Creativa
        </div>
        <div className="text-2xl hover:text-orange-500 cursor-pointer">
          Eventos
        </div>
        <div className="text-2xl hover:text-orange-500 cursor-pointer">
          Estudio de Diseño
        </div>
      </div>
    </div>
  );
}
