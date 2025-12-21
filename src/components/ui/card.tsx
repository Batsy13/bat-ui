import { cn } from "@/lib/utils";
import React from "react";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-white flex flex-col gap-6 rounded-xl border border-border py-6 shadow-md",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid grid-rows-[auto_auto] items-start gap-4 px-6",
        className
      )}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-bold")}
      {...props}
    />
  );
};

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-description text-sm")}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
};

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
