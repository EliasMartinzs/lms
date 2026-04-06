import { EmptyState } from "@/components/general/EmptyState";
import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive";
import { SectionCards } from "@/components/sidebar/section-cards";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import { adminGetRencentCourses } from "../data/admin/admig-get-recent-courses";
import { adminGetEnrollmentStats } from "../data/admin/admin-get-enrollment-stats";
import {
  AdminCourseCard,
  AdminCourseCardSkeleton,
} from "./courses/_components/AdminCourseCard";

export default async function AdminIndexPage() {
  const enrollmentData = await adminGetEnrollmentStats();
  return (
    <>
      <SectionCards />
      <ChartAreaInteractive data={enrollmentData} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Courses</h2>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/admin/courses"
          >
            View All Courses
          </Link>
        </div>

        <Suspense fallback={<RenderRecentCourseSkeletonLayout />}>
          <RenderRecentCourses />
        </Suspense>
      </div>
    </>
  );
}

async function RenderRecentCourses() {
  const data = await adminGetRencentCourses();

  if (data.length === 0) {
    return (
      <EmptyState
        buttonText="Create new Course"
        description="you dont have any courses. create some to see them here"
        title="You dont have any courses yet!"
        href="/admin/courses/create"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((course) => (
        <AdminCourseCard key={course.id} data={course} />
      ))}
    </div>
  );
}

function RenderRecentCourseSkeletonLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <AdminCourseCardSkeleton key={i} />
      ))}
    </div>
  );
}
