import { cn } from "@/lib/utils";
import React from "react";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-white/50 selection:bg-primary selection:text-secondary",
        "border-border h-9 w-full rounded-md border bg-transparent px-3 py-1 outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-white file:font-medium file:text-sm",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-border/80 md:text-sm",
        "focus-visible:border-border focus-visible:ring-roder/50 focus-visible:ring-[3px] ring-border",
       "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
};

export { Input };
