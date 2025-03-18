"use client"
import Body from "@/components/home/Body";
import LandingPageTwo from "@/components/home/Body_page2";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Loadingpage from "@/components/loaders/Loadingpage";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loadingpage />
      ) : (
        <div className="min-h-screen flex flex-col">
          <ToastContainer />
          <div className="bg-zinc-950 h-12">
            <Navbar />
          </div>
          <div className="flex-grow">
            <Body />
            <LandingPageTwo />
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}