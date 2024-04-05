import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

const isAdminRoute = (pathname: string) => {
  return pathname.match(/admin*/gi);
};

const isVenderRoute = (pathname: string) => {
  return pathname.startsWith("/vender");
};

// const isUserRoute = (pathname: string) => {
//   return pathname.startsWith("/");
// };

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const userToekn = getCookie("token", { req, res });
  const userRole = getCookie("role", { res, req });
  const { pathname } = req.nextUrl;

  // console.log(req.nextUrl.pathname);

  // if (isUserRoute(pathname) && userRole !== 'user') {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  if (
    (pathname.match(/^\/(cart|profile|checkout)$/gi) && userRole !== "user") ||
    undefined
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((isAdminRoute(pathname) && userRole !== "admin") || undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((isVenderRoute(pathname) && userRole !== "vender") || undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/cart",
    "/profile",
    "/checkout",
    "/admin/:path*",
    "/vender/:path*",
  ],
};
