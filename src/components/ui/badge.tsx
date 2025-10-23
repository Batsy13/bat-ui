import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type badgeProps = {
  variant?: "default" | "secondary" | "destructive" | "outline";
  children: ReactNode;
  className?: string;
};

const badgeVariants = cva(
  "flex items-center gap-1 text-sm px-2 py-0.5 rounded-[8px]",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        outline: "border border-[1px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = ({
  variant,
  children,
  className,
}: badgeProps & VariantProps<typeof badgeVariants>) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)}>{children}</div>
  );
};

export { Badge };
