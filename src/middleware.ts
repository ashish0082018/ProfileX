

import { NextRequest, NextResponse } from "next/server";

// Define public routes that do not require authentication
// eslint-disable-next-line
const publicRoutes = ["/about", "/contact", "/","/signup","/signin","/verifyotp"];

// Define protected routes that require authentication
const protectedRoutes = ["/dashboard", "/dashboard/style1", "/dashboard/style1/edit1", "/profiles"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("authjs.session-token")?.value;

  // If the route is protected, check if the user is authenticated
  if (protectedRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
    // Token exists, continue with the request
    return NextResponse.next();
  }
return NextResponse.next()
}

// Configure middleware to run only for specific paths
export const config = {
  matcher: [
    "/signup","/signin",
    "/verifyotp",
    "/dashboard",
    "/dashboard/style1",
    "/dashboard/style1/edit1",
    "/profiles",
    "/about",
    "/contact",
    "/",
    "/actions"
  ], 
};




