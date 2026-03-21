"use client";

import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";
import { Diamond } from "lucide-react";
import Link from "next/link";
import { UserDropdown } from "./UserDropdown";

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

export const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center space-x-2 mr-4">
          <Diamond className="size-6" />
          <span>LMS</span>
        </Link>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center gap-x-2">
            {navigationItems.map((item) => (
              <Link
                href={item.name}
                key={item.href}
                className="text-xs font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-1">
            <ModeToggle />

            {isPending ? null : session ? (
              <UserDropdown
                name={session.user.name}
                avatar={session.user.image || "https://github.com/shadcn.png"}
                email={session.user.email}
              />
            ) : (
              <>
                <Link
                  href={"/login"}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href={"/login"} className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
