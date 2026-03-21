import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium"
        >
          LMS
        </Link>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continut, you afre to our{" "}
          <span className="">Terms of service</span>
          and <span className="">Privacy policy</span>
        </div>
      </div>
    </div>
  );
}
