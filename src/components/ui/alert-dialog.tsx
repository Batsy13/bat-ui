import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";
import { Button } from "./button";
import { useAlertDialogStore } from "../../store/use-alert-dialog";

type AlertDialogProps = {
    variant?: "default" | "destructive";
    children: ReactNode;
    className?: string;
};

type AlertDialogHeaderProps = {
    title: string;
    description?: string;
    className?: string;
};

const alertVariants = cva(
    "bg-[#101010] relative w-full max-w-2xl rounded-[5px] p-6 flex flex-col gap-4",
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

const AlertDialog = ({
    variant,
    children,
    className,
}: AlertDialogProps & VariantProps<typeof alertVariants>) => {
    const { isOpen, close } = useAlertDialogStore();

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
            onClick={close}
        >
            <div
                role="alertdialog"
                className={cn(alertVariants({ variant }), className)}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

const AlertDialogTrigger = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const { open } = useAlertDialogStore();
    return (
        <Button onClick={open} className={cn("w-fit", className)}>
            {children}
        </Button>
    );
};

const AlertDialogContent = ({
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

const AlertDialogHeader = ({ title, description, className }: AlertDialogHeaderProps) => (
    <div className={cn("flex flex-col gap-2", className)}>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-[#9C9C9C]">{description}</p>
    </div>
);

const AlertDialogFooter = ({ children }: { children: ReactNode }) => (
    <div className="flex justify-end w-full gap-2">{children}</div>
);

const AlertDialogCancel = ({ children }: { children: ReactNode }) => {
    const { close } = useAlertDialogStore();
    return (
        <Button
            className="border border-white cursor-pointer hover:bg-[#090909]"
            onClick={close}
        >
            {children}
        </Button>
    );
};

const AlertDialogAction = ({ children, onConfirm }: { children: ReactNode, onConfirm?: () => void; }) => {
    const handleClick = () => {
        if (onConfirm) {
            onConfirm();
        }
        close();
    };
    const { close } = useAlertDialogStore();
    return (
        <Button
            className="text-black bg-white cursor-pointer hover:bg-white/80"
            onClick={handleClick}
        >
            {children}
        </Button>
    );
};

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
};
