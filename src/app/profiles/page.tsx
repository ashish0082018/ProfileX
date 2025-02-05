/* eslint-disable */

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import Delete from "@/components/deleteProfile/Delete";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Sidebar from "@/components/profiles/Sidebar";

async function page() {
  const session = await auth();

  const allProfiles = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    select: {
      profiles: true,
    },
  });
const len=allProfiles?.profiles.length as number
  return (
    <>
      <Navbar />
    <div className="h-[1px] bg-zinc-100 w-full mt-3"></div>
      <div className="flex justify-between h-screen mt-9">
        <div className="p-4">
          <Sidebar />
        </div>
        
        <div className="w-full sm:w-3/4 overflow-auto p-4 flex flex-col gap-5 md:gap-3 bg-zinc-900 md:border-l-[1px] ">
        {len<1 && "Create your profile..."}
          {
          
          allProfiles?.profiles.map((elem, key) => {
            return (
              <div className="flex flex-col  sm:flex-row bg-zinc-800 text-white p-5 rounded-lg shadow-lg gap-6 max-w-3xl mx-auto sm:m-4">
                {/* Image Section (Visible on all screen sizes) */}
                <div
             
                  className="w-full h-40 sm:w-40 sm:h-auto bg-gray-500 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${elem.image})` }}
                >
                  {/* Add background-image here in style prop */}
                </div>

                {/* Left Side - Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold tracking-tight">{elem.name}</h2>
                  <p className="text-gray-300 mt-2 h-10  overflow-hidden leading-5    ">
                   {elem.message}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-4">
                    <Link href={`/profile/${elem.slug}`}>
                      <button className="bg-purple-700 px-4 py-1 rounded-md hover:bg-purple-800 transition">
                        View
                      </button>
                    </Link>
                    <Link href={`/dashboard/style1/edit1/${elem.slug}`}>
                      <button className="text-purple-400 hover:underline">Edit</button>
                    </Link>

                    <Delete elem={elem.id} />
                  </div>
                </div>
              </div>
            );
          })  }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
