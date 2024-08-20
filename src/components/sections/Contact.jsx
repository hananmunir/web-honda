import React from "react";

export default function Contact() {
  return (
    <div className="h-[100vh] w-screen  flex flex-col  p-2">
      {/* Main content section */}
      <div className="bg-white h-screen w-2/4 p-4 overflow-auto text-right flex flex-col self-end gap-2">
        <h1 className="text-purple-600 text-6xl">
          Ya sabes un poquito más sobre nosotros
        </h1>
        <p className="text-black text-xl mt-4">
          pero si quieres saber más, llámanos, mándamos un mail o una paloma
          mensajera.
        </p>
        <img src="" alt="dummy img for now" className="bg-gray-200 h-[40vh]" />
      </div>
    </div>
  );
}
