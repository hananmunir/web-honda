import React from "react";
import ContactForm from "./contactForm";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useMenuStore from "../../store";

export default function Popup() {
  const { formOpen, setFormOpen } = useMenuStore();

  return (
    <div
      className={twMerge(
        "flex bg-black/40 h-screen w-screen left-0 top-0 fixed items-center justify-center z-[100] opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out",
        formOpen && "opacity-100 pointer-events-auto"
      )}
    >
      <div className='bg-white p-8 relative h-fit w-[95%] md:w-2/4'>
        <X
          onClick={() => setFormOpen(false)}
          className='absolute top-4 left-4 cursor-pointer '
        />
        <div className='w-full  flex items-end justify-end text-right'>
          <span className=' header-text   '>
            En que, podemos <br /> ayudarte?
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
