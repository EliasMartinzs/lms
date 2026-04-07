/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EnrolledCourseType } from "@/app/data/user/get-enrolled-courses";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useConstructUrl } from "@/hooks/use-constuct-url";
import { useCourseProgress } from "@/hooks/use-course-progress";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: EnrolledCourseType;
}

export const CourseProgressCard = ({ data }: Props) => {
  const thumbnailUrl = useConstructUrl(data.course.fileKey);
  const { completedLessons, progressPercentage, totalLessons } =
    useCourseProgress({ courseData: data.course as any });

  return (
    <Card className="group relative py-0 gap-0">
      <Badge className="absolute top-2 right-2 z-10">{data.course.level}</Badge>

      <Image
        src={thumbnailUrl}
        alt="Thumnail Image Of Course"
        width={600}
        height={400}
        className="w-full rounded-t-xl h-full object-cover"
      />

      <CardContent className="p-4">
        <Link
          href={`/dashboard/${data.course.slug}}`}
          className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors"
        >
          {data.course.title}
        </Link>
        <p className="line-clamp-2 text-sm mt-2 text-muted-foreground leading-tight">
          {data.course.smallDescription}
        </p>

        <div className="space-y-4 mt-5">
          <div className="flex justify-between mb-1 text-sm">
            <p>Progress:</p>
            <p className="font-medium">{progressPercentage}%</p>
          </div>
          <Progress value={progressPercentage} className="h-1.5" />
          <p className="text-muted-foreground">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>

        <Link
          href={`/dashboard/${data.course.slug}`}
          className={buttonVariants({ className: "mt-2 w-full" })}
        >
          Learn More
        </Link>
      </CardContent>
    </Card>
  );
};
