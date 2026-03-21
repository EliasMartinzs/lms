import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ShieldX } from "lucide-react";
import Link from "next/link";

export default function NotAdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="bg-destructive/10 rounded-full p-4 wfit mx-auto">
            <ShieldX className="size-16 text-destructive" />
          </div>

          <CardTitle className="text-2xl text-center">
            Acess Restricted
          </CardTitle>
          <CardDescription className="text-center">
            Hey! You are not an admin, which means you cant create any courses
            or stuf like that...
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Link href={"/"} className={buttonVariants({ className: "w-full" })}>
            <ArrowLeft /> Back to home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
