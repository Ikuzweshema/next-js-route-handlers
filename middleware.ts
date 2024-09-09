import { NextResponse } from "next/server";

export default function middleware() {

  return NextResponse.json({ message: "This is middleware" });
}

export const config = {
  matcher: "/api/:path*",
};
