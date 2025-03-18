"use client";
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from 'next/link';

function NavbarShow() {
  const session = useSession();


  let authContent: React.ReactNode;

  if (session.status === "loading") return <div> 

<div className="flex space-x-1">
      <div className="w-2 h-2 bg-purple-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-purple-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-purple-800 rounded-full animate-bounce"></div>
    </div>
  </div>; // Nothing will reflect during the data fetching of the user

  if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          
          <Avatar className='hover:cursor-pointer'>
          
            <AvatarImage src={session.data.user.image || undefined } />
            <AvatarFallback> CN </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 bg-zinc-800 border border-zinc-700 rounded-lg shadow-2xl hover:cursor-pointer">
  {/* User Name with Animation */}
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="text-lg mb-3 font-semibold tracking-tight text-zinc-100"
  >
    {session.data.user.name}
  </motion.h2>

  {/* Logout Button with Hover Animation */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-zinc-100 text-md font-medium px-4 py-2 rounded-md transition-all duration-200 shadow-lg"
    onClick={() => signOut()}
  >
    Logout
  </motion.button>
</PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <div className='flex gap-5 justify-center items-center'>
        <Link href={"/signin"}>
        <button className='bg-purple-800 hover:bg-purple-900 shadow-lg text-md text-zinc-100 px-3 py-1 rounded-md border-none'  >Sign in</button>
        </Link>
        <Link href={"/signup"}>
        <button className='bg-purple-800 hover:bg-purple-900 shadow-lg text-md text-zinc-100 px-3 py-1 rounded-md border-none hover:bg-transparent hover:border-2 hover:border-white transition'  >Sign up</button>

        </Link>
      </div>
      
    );
  }

  return authContent; // Ensure this is inside the function and properly returned after the logic
}

export default NavbarShow;
