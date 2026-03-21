import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface FeaturesProps {
  title: string;
  description: string;
}

const features: FeaturesProps[] = [
  {
    title: "Comprehensive Courses",
    description: "Acess a wide range of carefully curated courses",
  },
  {
    title: "Interactive Learning",
    description: "Engage with interactive content",
  },
  {
    title: "Progress Tracking",
    description:
      "MOnitor your progress and achievements with detailed analytics",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructors to coollaborate and share knowledge",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative p-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Badge variant={"outline"}>The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold">
            Elevate your Learning Experience
          </h1>

          <p className="max-w-175 text-muted-foreground md:text-xl">
            Discover a new way to learn with our modern, interactive leanng
            management system. Acess high-quality courses anytime, anywhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={"/login"}
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>
            <Link
              href={"/login"}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ description, title }, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </>
  );
}
