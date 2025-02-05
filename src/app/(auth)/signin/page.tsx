"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/home/Navbar";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);  // Start loading state
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    setLoading(false); 

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/"; // Redirect after successful login
    }
  };

  return (
    <>
    <Navbar/>
  
    <div className="h-screen w-full flex justify-center items-center flex-col gap-8 p-4 sm:p-8">
      <div className="w-full sm:w-1/2 h-11 text-center">
        <span className="text-2xl sm:text-3xl font-semibold tracking-tighter">
          Welcome back 👋
        </span>
      </div>

      <div className="w-full sm:w-1/3 min-h-1/2 bg-zinc-800 shadow-2xl flex flex-col px-6 py-5 sm:px-8 sm:py-6">
        {/* Google Sign-In Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-zinc-100 hover:scale-105 transition shadow-xl text-zinc-800 hover:bg-zinc-100 px-3 py-2 text-lg w-full flex justify-center items-center gap-4 sm:gap-8"
        >
          <div>
          <svg  x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
          </div>
          <span className="text-sm sm:text-base">Sign in with Google</span> {/* Adjusted text size */}
        </button>

        <div className="flex items-center mt-2 mb-8">
          <div className="border-t border-2 border-gray-400 flex-grow"></div>
          <div className="px-3 text-md">Or, sign in with your email</div>
          <div className="border-t border-2 border-gray-400 flex-grow"></div>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="tracking-tighter flex flex-col gap-3">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 outline-none text-black"
            placeholder="you@example.com"
            required
          />

          <label>Password</label>
<div className="relative w-full">
              <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="px-2 py-1 outline-none text-black w-full border rounded-md pr-10"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-600 transition px-3 py-2 text-lg w-full mt-6"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>

      <div className="text-center">
        Do not have an account?
        <Link href="/signup">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Page;
