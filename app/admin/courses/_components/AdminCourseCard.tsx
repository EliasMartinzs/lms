import { AdminCourseType } from "@/app/data/admin/admin-get-courses";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConstructUrl } from "@/hooks/use-constuct-url";
import {
  ArrowRight,
  Eye,
  MoreVertical,
  Pencil,
  School,
  TimerIcon,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: AdminCourseType;
}

export const AdminCourseCard = ({
  data: {
    duration,
    fileKey,
    id,
    level,
    price,
    slug,
    smallDescription,
    status,
    title,
  },
}: Props) => {
  const thumbnailUrl = useConstructUrl(fileKey);

  return (
    <Card className="group relative py-0 gap-0">
      {/* absolute dropdown */}
      <div className="absolute top-2 right-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} size={"icon"}>
              <MoreVertical className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link
                href={`/admin/courses/${id}`}
                className={buttonVariants({ variant: "ghost" })}
              >
                <Pencil className="size-4 mr-2" />
                Edit Course
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href={`/courses/${slug}`}
                className={buttonVariants({ variant: "ghost" })}
              >
                <Eye className="size-4 mr-2" />
                Preview
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link
                href={`/admin/courses/${id}/delete`}
                className={buttonVariants({ variant: "ghost" })}
              >
                <Trash className="size-4 mr-2" />
                Delete Course
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Image
        src={thumbnailUrl}
        alt="Thumbnail Url"
        width={600}
        height={400}
        className="w-full rounded-t-lg aspect-video h-full object-cover"
      />
      <CardContent className="p-4">
        <Link
          href={`/admin/courses/${id}`}
          className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors"
        >
          {title}
        </Link>

        <p className="line-clamp-2 text-sm text-muted-foreground leading-tight mt-2">
          {smallDescription}
        </p>

        <div className="mt-4 flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
            <p className="text-sm text-muted-foreground">{duration}h</p>
          </div>

          <div className="flex items-center gap-x-2">
            <School className="size-6 p-1 rounded-md text-primary bg-primary/10" />
            <p className="text-sm text-muted-foreground">{level}h</p>
          </div>
        </div>

        <Link
          href={`/admin/courses/${id}/edit`}
          className={buttonVariants({
            className: "w-full mt-2",
          })}
        >
          Edit Course <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
