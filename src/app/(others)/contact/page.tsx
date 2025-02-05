import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="w-full h-[40vh] flex items-center justify-center bg-gradient-to-r from-purple-950 to-purple-600 text-white text-center p-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Contact Me</h1>
          <p className="mt-4 text-lg md:text-xl">Let &apos; s connect and build something amazing together</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-gray-700 text-lg">Feel free to reach out to me through the following platforms:</p>
        
        <div className="mt-6 flex flex-col gap-4 items-center">
          <a 
            href="av0082018@gmail.com" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200 transition"
          >
            Email Me
          </a>

          <a 
           
            href="https://www.linkedin.com/in/ashish-verma-16b525238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200 transition"
          >
            Connect on LinkedIn
          </a>

          <a 
            href="https://github.com/ashish0082018" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200 transition"
          >
            Check My GitHub
          </a>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default page