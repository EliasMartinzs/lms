"use client";

import { Button } from "@/components/ui/button";
import { tryCatch } from "@/hooks/try-catch";
import { useTransition } from "react";
import { enrollInCourseAction } from "../actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const EnrollmentButton = ({ courseId }: { courseId: string }) => {
  const [isPending, startTransition] = useTransition();

  function onSubmit() {
    startTransition(async () => {
      const { data, error } = await tryCatch(enrollInCourseAction(courseId));

      if (error) {
        toast.error("An expected error occured, Please try again!");
        return;
      }

      if (data.status === "sucess") {
        toast.success(data.message);
      } else if (data.message === "error") {
        toast.error(data.message);
      }
    });
  }

  return (
    <Button onClick={onSubmit} disabled={isPending} className="w-full">
      {isPending ? <Loader2 className="size-5 animate-spin" /> : "Enroll Now!"}
    </Button>
  );
};
