import React from "react";

export default function Reel() {
  return (
    <div className="h-[170vh] w-screen flex justify-end p-2">
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col gap-2">
        <span className="text-purple-600 text-6xl">Somos una</span>
        <h1 className="text-purple-600 text-6xl">agencia creativa</h1>
        <p className="text-black text-xl mt-4">
          en Barcelona especializada en servicios creativos y soluciones
          visuales innovadoras. Desde vídeo y fotografía hasta diseño gráfico y
          multimedia, ofrecemos proyectos creativos que conectan marcas con su
          audiencia. Combinamos lo digital y lo analógico para proyectar todo el
          potencial de grandes y pequeñas marcas. Como agencia de publicidad y
          estudio creativo, estamos aquí para impulsar tu marca al siguiente
          nivel.
        </p>
        <img src="" alt="dummy  img for now" className="bg-gray-200 h-[40vh]" />
      </div>
    </div>
  );
}
