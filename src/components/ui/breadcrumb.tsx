import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Slash } from "lucide-react";

const Breadcrumb = ({
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-white", className)}
      {...props}
    />
  );
};

const BreadcrumbList = ({
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
};

const BreadcrumbItem = ({
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <li
      className={cn(
        "inline-flex items-center gap-1.5 text-[#949494]",
        className
      )}
      {...props}
    />
  );
};

const BreadcrumbLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={cn("transition-colors hover:text-[#a0a0a0]", className)}
    >
      {children}
    </a>
  );
};

const BreadcrumbPage = ({
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-white", className)}
      {...props}
    />
  );
};

const BreadcrumbSeparator = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
    >
      {children ?? <Slash />}
    </li>
  );
};

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
