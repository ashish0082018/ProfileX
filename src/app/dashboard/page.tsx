"use client";
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import Link from 'next/link';

import React, { Suspense, useState } from 'react';


function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImagePopup = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeImagePopup = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* Main Content Section */}
      <div className='container mx-auto mt-6 sm:mt-10 px-4 sm:px-6 lg:px-8 flex-grow'>
        <span className='font-semibold text-2xl sm:text-3xl tracking-tighter'>
          Select your custom Profile
          <div className='w-full h-[1px] bg-slate-100 mt-2'></div>
        </span>
        <p className='text-sm sm:text-md tracking-tighter mt-4'>
          <span className='text-purple-600 font-semibold mr-2 sm:mr-4'>
            Welcome to Your Dashboard! 
          </span>
          Personalize your profile, update your preferences, and make your space truly yours. Start customizing now!
        </p>

        {/* Profile Selection Grid */}
        <div className='flex flex-wrap gap-4 justify-center mt-6'>
          <div className='w-full sm:w-1/2 lg:w-1/2 bg-zinc-950 h-64 sm:h-72 lg:h-96 overflow-hidden rounded-xl shadow-xl hover:shadow-purple-600 transition relative'>
            <div 
              className='w-full h-80 bg-cover bg-center'
              style={{ backgroundImage: `url("https://res.cloudinary.com/db9bglamk/image/upload/v1738352612/NODEE/kuxcftu7eny51qxv6asl.png")` }}>
            </div>
            <div className='mt-4 flex justify-between mx-5'>
              <button 
                className='bg-zinc-800 px-4 py-2 sm:px-3 sm:py-1 rounded-md text-sm sm:text-md tracking-tight'
                onClick={() => openImagePopup("https://res.cloudinary.com/db9bglamk/image/upload/v1738352612/NODEE/kuxcftu7eny51qxv6asl.png")}>
                View
              </button>
            </div>
          </div>
        </div>

        {/* Create Profile Section */}
        <div className='bg-zinc-700 mx-auto mt-10 md:mb-7 mb-8 px-4 sm:px-10 py-6 sm:py-0 h-auto sm:h-40 w-full rounded-md flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
          <h2 className='text-lg sm:text-xl tracking-tighter font-semibold mb-4 sm:mb-0'>
            Lets create your profile
          </h2>
          <Link href={"/dashboard/style1"}>
            <Suspense fallback={"Waiit..."}>
              <button className='bg-zinc-800 px-6 py-3 sm:px-8 sm:py-4 rounded-md text-sm sm:text-md tracking-tight hover:scale-105 transition hover:shadow-xl'>
                Create
              </button>
            </Suspense>
          </Link>
        </div>
      </div>

      {/* Image Popup */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50' onClick={closeImagePopup}>
          <div className='relative w-11/12 sm:w-3/4 max-w-4xl max-h-[90vh]' onClick={(e) => e.stopPropagation()}>
           {/* eslint-disable-next-line */}
            <img src={selectedImage} alt='Selected profile' className='w-full h-full object-contain' />
            <button className='absolute top-0 right-0 text-white text-xl font-bold p-2' onClick={closeImagePopup}>
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Page;