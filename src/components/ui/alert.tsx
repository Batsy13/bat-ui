import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type AlertProps = {
    variant?: "default" | "destructive";
    children: ReactNode;
    className?: string;
};

type AlertItemsProps = {
    children: ReactNode;
    className?: string;
};

const alertVariants = cva(
    "w-full max-w-2xl bg-[#101010] rounded-[8px] p-4 flex flex-col gap-4",
    {
        variants: {
            variant: {
                default: "",
                destructive: "text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Alert = ({
    variant,
    children,
    className,
}: AlertProps & VariantProps<typeof alertVariants>) => {

    return (
        <div
            role="alert"
            className={cn(alertVariants({ variant }), className)}
        >
            {children}
        </div>
    );
};

const AlertContent = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    );
};

const AlertHeader = ({ children, className }: AlertItemsProps) => (
    <div className={cn("flex flex-col gap-2", className)}>{children}</div>
);

const AlertTitle = ({ children, className }: AlertItemsProps) => (
    <div className={cn("flex gap-2 font-medium", className)}>
        {children}
    </div>
);

const AlertDescription = ({ children, className }: AlertItemsProps) => (
    <div className={cn("flex items-center w-full gap-2 text-description", className)}>
        {children}
    </div>
);

const AlertFooter = ({ children, className }: AlertItemsProps) => (
    <div className={cn("flex flex-col w-full gap-2", className)}>
        {children}
    </div>
);


export { Alert, AlertContent, AlertHeader, AlertTitle, AlertDescription, AlertFooter };