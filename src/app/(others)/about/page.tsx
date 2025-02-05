import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function page() {
  return (
    <> 
    <Navbar/>
    <div className="min-h-screen bg-gray-100 text-gray-900">
    {/* Hero Section */}
    <section className="w-full h-[50vh] flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-900 text-white text-center p-6">
  <div className="max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-bold">ProfileX</h1>
    <p className="mt-4 text-lg md:text-xl">
      ProfileX is your personal online hub. Create a custom profile page  
      where you can showcase your skills.  
      Easily add your LinkedIn, GitHub, Twitter, and Gmail,  
      and share your unique profile with anyone in just one click.  
    </p>

  </div>
</section>

    {/* Mission Section */}
    <section className="max-w-5xl mx-auto p-6 text-center ">
      <h2 className="text-3xl font-semibold">My Mission</h2>
      <p className="mt-4 text-gray-700 text-lg">
        I strive to build high-quality, user-friendly web applications that solve real-world problems and create value.
      </p>
    </section>

    {/* About Me Section */}
    <section className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-semibold">Who I Am</h2>
      <div className="text-white rounded-lg shadow-md p-6 text-center bg-zinc-800">
        <div className="w-24 h-24 mx-auto  rounded-full flex justify-center items-center bg-cover bg-center overflow-hidden "> 
      {/*  eslint-disable-next-line */}
          <img src="https://res.cloudinary.com/db9bglamk/image/upload/v1738703167/NODEE/fjdsypt6m7i5xfhdlcs5.jpg" alt="" />  </div>
        <h3 className="mt-4 text-xl font-semibold">Ashish Verma</h3>
        <p className="text-gray-400">Web Developer & Designer</p>
      </div>
    </section>

    {/* Contact Section */}
    {/* <section className="bg-blue-600 text-white p-6 text-center">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>
      <p className="mt-2">Have a project in mind? Let's build something amazing together!</p>
      <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-gray-200">
        Contact Me
      </button>
    </section> */}
    <Footer/>
  </div>
  </>
  )
}

export default page