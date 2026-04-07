import { getLessonContent } from "@/app/data/course/get-lesson-content";
import { Suspense } from "react";
import { CourseContent } from "./_components/CourseContent";
import { LessonSkeleton } from "./_components/LessonSkeleton";

interface Props {
  params: Promise<{ lessonId: string }>;
}

export default async function page({ params }: Props) {
  const { lessonId } = await params;

  return (
    <Suspense fallback={<LessonSkeleton />}>
      <LessonContentLoader lessonId={lessonId} />
    </Suspense>
  );
}

async function LessonContentLoader({ lessonId }: { lessonId: string }) {
  const data = await getLessonContent(lessonId);
  return <CourseContent data={data} />;
}
