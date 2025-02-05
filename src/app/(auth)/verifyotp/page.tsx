"use client";
import React, { useActionState} from "react";
import { verifyOtp } from "@/app/actions/verifycode";
import { redirect } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import { toast } from "react-toastify";
// import * as React from "react"
 

const Page = () => {
 
const [formData,action,pending]=useActionState(verifyOtp,{message:""})
if(formData.success){

 toast("Sign in yourself")
  redirect("/signin")
}
  return (
    <>
  <Navbar/>
<div className="h-screen w-full flex justify-center items-center flex-col gap-8 p-4 sm:p-8">

      <div className="w-full sm:w-1/3 min-h-1/2 bg-zinc-800 shadow-2xl flex flex-col px-6 py-5 sm:px-8 sm:py-6">
      <div>
      <form action ={action} className="flex flex-col">
      <label className="p-2 text-3xl font-semibold text-center flex flex-col"> OTP Verification 
        <span className="text-sm font-normal tracking-tighter mb-5 ">Enter OTP Code sent to you email</span>
      </label>
      
      <div className="space-y-2 flex flex-col justify-center items-center">
 
      <input name="otp"  type="text" className="text-black outline-none px-2 py-1 rounded-lg text-center font-semibold text-xl" />
    </div>
      <button className="bg-blue-700 px-3 py-1 mt-6 hover:bg-blue-800"> {pending? "Verifying...":"Verify"} </button>
      {formData.message &&  <span className="text-red-500">{formData.message} </span> }
      </form>
     

     
    </div>
       
     
      </div>


    </div>
    </>
    
  );
};

export default Page;
