"use client"
import Body from "@/components/home/Body";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Loadingpage from "@/components/loaders/Loadingpage";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";



export default  function Home() {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  
    }, 500);

    return () => clearTimeout(timer); 
  }, []); //
  return (
    <>
    {
      isLoading ? <> <Loadingpage/> </>: <div className="min-h-screen relative"> 
      <ToastContainer/>
        <div className="min-h-screen  flex flex-col gap-2 ">
        <div className="bg-zinc-950 h-12 ">
        <Navbar/>
       </div>
        
          {/* navbar */}
  
          {/* body */}
          <div className="min-h-screen">
            <Body />
          </div>
          {/*footer  */}
          <div className="absolute bottom-0 w-full" >
            <Footer />
          </div>
        </div>
        </div>
    }

    </>
  );
}
