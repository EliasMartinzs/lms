import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon, Loader2, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon
          className={cn(
            "size-6 text-muted-foreground",
            isDragActive && "text-primary",
          )}
        />
      </div>
      <p className="text-base font-semibold text-foreground">
        Drop your files here or{" "}
        <span className="text-primary font-bold cursor-pointer">
          click to upload
        </span>
      </p>

      <Button type="button" className="mt-4">
        Select files
      </Button>
    </div>
  );
}

export function RenderErrorState() {
  return (
    <div className="text-destructive text-center">
      <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-destructive mb-4">
        <ImageIcon className={cn("size-6 text-destructive")} />

        <p className="text-base font-semibold">Uplaod failed</p>
        <p className="text-xs mt-1">Something went wrong</p>
        <Button className="text-xl">Retry file selectiony</Button>
      </div>
    </div>
  );
}

export function RenderUploadedState({
  previewUrl,
  handleRemoveFile,
  isDeleting,
}: {
  previewUrl: string;
  isDeleting: boolean;
  handleRemoveFile: () => void;
}) {
  return (
    <div>
      <Image
        src={previewUrl}
        alt="uploaded file"
        fill
        className="object-contain"
      />
      <Button
        variant={"destructive"}
        size={"icon"}
        className={cn("absolute top-4 right-4")}
        onClick={handleRemoveFile}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <Loader2 className="animate-spin size-4" />
        ) : (
          <XIcon className="size-4" />
        )}
      </Button>
    </div>
  );
}

export function RenderUploadingState({
  file,
  progress,
}: {
  progress: number;
  file: File;
}) {
  return (
    <div className="text-center flex items-center justify-center flex-col">
      <p>{progress}</p>

      <p className="mt-2 text-sm font-medium text-foreground">Uploading...</p>

      <p className="m-1 text-xs text-muted-foreground truncate max-w-xs">
        {file.name}
      </p>
    </div>
  );
}
