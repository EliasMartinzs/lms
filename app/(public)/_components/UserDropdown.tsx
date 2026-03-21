import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BookOpen, Home, Layout, LogOut } from "lucide-react";
import Link from "next/link";
import { useSignOut } from "@/hooks/use-signout";

interface Props {
  name: string;
  email: string;
  avatar: string;
}

export const UserDropdown = ({ avatar, email, name }: Props) => {
  const handleSignOut = useSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.slice(2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <Link href={"/"}>
            <DropdownMenuItem>
              <Home /> Home
            </DropdownMenuItem>
          </Link>
          <Link href={"/admin/courses"}>
            <DropdownMenuItem>
              <BookOpen /> Courses
            </DropdownMenuItem>
          </Link>
          <Link href={"/admin"}>
            <DropdownMenuItem>
              <Layout /> Dashboard
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
