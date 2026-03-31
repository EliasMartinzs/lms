"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useTransition } from "react";
import { deleteCourse } from "./action";
import { tryCatch } from "@/hooks/try-catch";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function DeleteCourseRoute() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { courseId } = useParams<{ courseId: string }>();
  async function onSubmit() {
    startTransition(async () => {
      const { data: result, error } = await tryCatch(deleteCourse(courseId));

      if (error) {
        toast.error("An unexpected error ocurred. Please try again");
        return;
      }

      if (result?.status === "sucess") {
        toast.success(result.message);
        router.push("/admin/courses");
      } else if (result?.status === "error") {
        toast.error(result.message);
      }
    });
  }
  return (
    <div className="max-w-xl mx-auto w-full">
      <Card>
        <CardHeader>
          <CardTitle>Are you sure you want to delete this course?</CardTitle>
          <CardDescription>This action cannot be undone.</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Link
            href={"/admin/courses"}
            className={buttonVariants({ variant: "outline" })}
          >
            Cancel
          </Link>

          <Button
            variant={"destructive"}
            disabled={isPending}
            onClick={onSubmit}
          >
            {isPending ? <Loader2 className="size-5 animate-spin" /> : "Delete"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
