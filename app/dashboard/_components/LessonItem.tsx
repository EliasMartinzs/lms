import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Play } from "lucide-react";
import Link from "next/link";

interface Props {
  lessons: {
    id: string;
    title: string;
    description: string;
    position: number;
  };
  slug: string;
  isActive?: boolean;
  completed: boolean;
}

export const LessonItem = ({
  lessons: { id, position, title },
  slug,
  isActive,
  completed,
}: Props) => {
  return (
    <Link
      href={`/dashboard/${slug}/${id}`}
      className={buttonVariants({
        variant: completed ? "secondary" : "outline",
        className: cn(
          "w-full p-2.5 h-auto justify-start transition-all",
          completed &&
            "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-800 dark:text-green-200",
          isActive &&
            !completed &&
            "bg-primary/10 dark:bg-primary/20 border-primary/50 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary-foreground",
        ),
      })}
    >
      <div className="flex items-center gap-2.5 w-full min-w-0">
        <div className="shrink-0">
          {completed ? (
            <div className="size-5 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center">
              <Check className="size-3 text-white" />
            </div>
          ) : (
            <div
              className={cn(
                "size-5 rounded-full border-2 bg-background flex justify-center items-center",
                isActive
                  ? "border-primary/10 bg-primary/10 dark:bg-primary/20"
                  : "border-muted-foreground",
              )}
            >
              <Play
                className={cn(
                  "size-2.5 fill-current",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              />
            </div>
          )}
        </div>
        <div className="flex-1 text-left min-w-0">
          <p
            className={cn(
              "text-xs font-medium truncate",
              completed
                ? "text-green-800 dark:text-green-200"
                : isActive
                  ? "text-primary font-semibold"
                  : "text-foreground",
            )}
          >
            {position}. {title}
          </p>
          {completed && (
            <p className="text-[10px] text-green-700 dark:text-green-300">
              Completed
            </p>
          )}

          {isActive && !completed && (
            <p className="text-[10px] font-medium">Currently watching</p>
          )}
        </div>
      </div>
    </Link>
  );
};
