import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Breadcrumb({ className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <nav aria-label="Breadcrumb" className={cn("text-sm text-white", className)} {...props} />
    );
}

export function BreadcrumbList({ className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <ol
            className={cn(
                "flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5",
                className
            )}
            {...props}
        />
    );
}

export function BreadcrumbItem({ className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <li
            className={cn("inline-flex items-center gap-1.5 text-[#949494]", className)}
            {...props}
        />
    );
}

export function BreadcrumbLink({ href, children, className }: { href: string; children: ReactNode; className?: string; }) {
    return (
        <a
            href={href}
            className={cn("transition-colors hover:text-[#a0a0a0]", className)}
        >
            {children}
        </a>
    );
}

export function BreadcrumbPage({ className, ...props }: { children: ReactNode; className?: string }) {
    return (
        <span
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={cn("font-normal text-white", className)}
            {...props}
        />
    );
}

export function BreadcrumbSeparator({ children, className }: { children?: ReactNode; className?: string }) {
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={cn("[&>svg]:size-3.5", className)}
        >
            {children ?? <SlashIcon />}
        </li>
    );
}

function SlashIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M 6 18 L 18 6" />
        </svg>
    );
}