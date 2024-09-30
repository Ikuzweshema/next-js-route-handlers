import { NextResponse } from "next/server";

export default function middleware() {
   console.log("this is middleware")
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
