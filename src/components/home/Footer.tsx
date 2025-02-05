"use client";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo / Brand Section */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            ProfileX
          </Link>
          <p className="text-sm text-zinc-400 mt-1">Your profile, your style.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
       
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-xl hover:text-white transition">
            <Twitter size={20} />
          </Link>
          <Link href="https://github.com/ashish0082018" target="_balnk" className="text-xl hover:text-white transition">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/ashish-verma-16b525238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-xl hover:text-white transition">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-zinc-500 mt-4">
        © {new Date().getFullYear()} ProfileX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
