import { NextRequest, NextResponse } from "next/server";
import { checkIsAuthenticated } from "./lib/auth/checkIsAutheticatedServerAction";

// 1. specify protect and public routes
const protectedRoutes = ["/courses", "/profile"];
const publicRoutes = ["/login", "/"];
const middleware = async (req: NextRequest) => {
  // 2. check if the current path is protected or not
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  // 3. getting the user session
  const session = await checkIsAuthenticated();
  // 4. Redirected to the login page if the user is not authenticated
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  // 5. Redirected to the home page if the user in authenticated and in login route
  if (isPublicRoute && session && path === "/login") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
