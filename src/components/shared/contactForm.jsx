import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);

    formData.append("access_key", "240c802d-555f-4757-b2c9-e962ead863a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
    console.log(res);
    if (res.success) {
      setLoading(false);
      toast("Message sent successfully!");
      event.target.reset();

      console.log("Success", res);
    }
  };
  return (
    <div className='py-8 lg:pt-16 px-4 mx-auto max-w-screen-md'>
      <form onSubmit={handleOnSubmit} action='#' className='space-y-2 '>
        <div>
          <input
            type='name'
            id='name'
            name='name'
            className='shadow-sm bg-gray-100  text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
            placeholder='Jane Doe'
            required
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            className='shadow-sm bg-gray-100  text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
            placeholder='name@gmail.com'
            required
          />
        </div>
        <div>
          <input
            type='text'
            name='phone'
            id='phone'
            className='block p-3 w-full text-sm text-gray-900 bg-gray-100   shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
            placeholder='Your Phone Number'
            required
          />
        </div>
        <div className='sm:col-span-2'>
          <textarea
            id='message'
            name='message'
            rows='6'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-100  shadow-sm  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            placeholder='Leave a comment...'
          ></textarea>
        </div>
        <button
          type='submit'
          disabled={loading}
          className='py-3  text-sm font-medium text-center  text-[#FF3C00]  sm:w-fit hover:text-[#FF3C00]/80 ring-none outline-none disabled:opacity-70'
        >
          Send message {">"}
        </button>
      </form>
    </div>
  );
}
