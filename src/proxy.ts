import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

// Routes that require authentication (empty for now, add paths like '/characters' later)
const protectedRoutes: string[] = [];

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path matches a protected route
  const isProtectedRoute = protectedRoutes.some((route) => {
    // Remove locale prefix for comparison
    const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "");
    return pathWithoutLocale.startsWith(route);
  });

  // If it's a protected route, check authentication
  if (isProtectedRoute) {
    const session = await auth();

    if (!session?.user) {
      // Get the locale from the URL or default to 'en'
      const locale = pathname.startsWith("/fr") ? "fr" : "en";
      const signInUrl = new URL(`/${locale}/sign-in`, request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Run the next-intl middleware for all requests
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
