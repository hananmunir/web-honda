import React from "react";

export default function Portfolio() {
  return (
    <div className="h-[170vh] w-screen flex flex-col p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">Explora nuestros trabajos</h1>
        <p className="text-black text-xl mt-4">
          como una herramienta de narración visual versátil y flexible, Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam.
        </p>
      </div>
      {/* "Ver Todos" section */}
      <div className="w-full py-20 relative">
        <div className="h-[70vh]  object-cover w-[95vw] border bg-slate-200"></div>
        <div className="absolute right-6 top-[45%]">
          <PlusCircle size={50} color="black " />
        </div>
        <div className="text-black text-lg flex justify-end px-14 font-semibold ">
          ver todos
        </div>
      </div>
    </div>
  );
}
