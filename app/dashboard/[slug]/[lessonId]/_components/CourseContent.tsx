"use client";

import { LessonContentType } from "@/app/data/course/get-lesson-content";
import { RenderDescription } from "@/components/rich-text-editor/RenderDescription";
import { Button } from "@/components/ui/button";
import { tryCatch } from "@/hooks/try-catch";
import { useConstructUrl } from "@/hooks/use-constuct-url";
import { BookIcon, Check, CheckCircle } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { markLessonComplete } from "../actions";

interface Props {
  data: LessonContentType;
}
export const CourseContent = ({
  data: {
    description,
    thumbnailKey,
    title,
    videoKey,
    id,
    chapter,
    lessonProgress,
  },
}: Props) => {
  const [isPending, startTransition] = useTransition();

  function VideoPlayer({
    thumbnailKey,
    videoKey,
  }: {
    thumbnailKey: string;
    videoKey: string;
  }) {
    const thubmnailUrl = useConstructUrl(thumbnailKey);
    const videoUrl = useConstructUrl(videoKey);

    if (!videoKey) {
      return (
        <div className="aspect-video bg-muted rounded-lg items-center justify-center flex flex-col gap-y-2">
          <BookIcon className="size-16 text-muted-foreground mx-auto mb-4" />
          <p>This lesson does not have a video yet!</p>
        </div>
      );
    }

    return (
      <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          poster={thubmnailUrl}
        >
          <source src={videoUrl} type="vide/mp4" />
          <source src={videoUrl} type="vide/webm" />
          <source src={videoUrl} type="vide/ogg" />
          Your browse doenst support this video format
        </video>
      </div>
    );
  }

  function onSubmit() {
    startTransition(async () => {
      const { data, error } = await tryCatch(
        markLessonComplete({ lessonId: id, slug: chapter.course.slug }),
      );

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
    <div className="flex flex-col h-full bg-background pl-6">
      <VideoPlayer
        thumbnailKey={thumbnailKey ?? ""}
        videoKey={videoKey ?? ""}
      />

      <div className="py-4 border-b">
        {lessonProgress.length > 0 ? (
          <Button variant={"outline"}>
            <CheckCircle className="size-4 mr-2 text-green-600" /> Completed
          </Button>
        ) : (
          <Button variant={"outline"} onClick={onSubmit} disabled={isPending}>
            <Check className="size-4 mr-2 text-green-600" /> Mark as complete
          </Button>
        )}
      </div>

      <div className="space-y-3 pt-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        {description && <RenderDescription json={JSON.parse(description)} />}
      </div>
    </div>
  );
};
