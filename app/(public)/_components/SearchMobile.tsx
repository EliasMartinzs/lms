import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import { useState } from "react";

export const SearchMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Search className="text-muted-foreground" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent side="top" showCloseButton={false} className="min-h-full">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* Search */}
        <div className="flex items-center px-4 gap-x-2 mt-5">
          <Search className="size-5 text-muted-foreground" />
          <Input
            className="flex-1 w-full border-none h-12 px-6"
            placeholder="Search anything"
          />

          <X
            className="size-5 text-muted-foreground"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
