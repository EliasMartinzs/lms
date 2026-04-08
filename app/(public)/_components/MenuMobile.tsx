import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface Props {
  items: {
    name: string;
    href: string;
  }[];
  user: {
    name: string | undefined;
    image?: string | null | undefined;
  };
  isPending: boolean;
}

export const MenuMobile = ({ items, isPending, user }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-5 text-muted-foreground" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="px-4 space-y-3">
          {isPending ? null : user.name ? (
            <div className="space-y-4">
              <div className="flex items-center gap-x-3">
                <Avatar size="lg">
                  <AvatarImage
                    src={user.image || "https://github.com/shadcn.png"}
                    width={80}
                    height={80}
                  />
                  <AvatarFallback>{user.name.slice(2)}</AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="truncate tracking-tight text-lg">
                    Olá!, {user.name}
                  </h2>
                  <p className="text-muted-foreground">Bem-vindo de volta!</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-1">
                <h5 className="font-medium">Aprenda</h5>
                <Link href={"/admin/courses"} className="text-muted-foreground">
                  Meus cursos
                </Link>
              </div>

              <Separator />
            </div>
          ) : (
            <div className="space-y-1">
              <Link
                href={"/login"}
                className="hover:underline underline-offset-2"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <ul className="flex flex-col gap-y-3 px-4 mt-5">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:underline underline-offset-4"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
