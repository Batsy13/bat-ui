import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { createContext, ReactNode, useContext, useState } from "react";
import { Button } from "./button";

type AlertDialogVariant = "default" | "destructive";

type AlertDialogContextProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  variant: AlertDialogVariant;
};

type AlertDialogProps = {
  children: ReactNode;
  variant?: AlertDialogVariant;
};

type AlertDialogHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

const AlertDialogContext = createContext<AlertDialogContextProps | null>(null);

const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error("useAlertDialog must be used within an AlertDialog provider");
  }
  return context;
};

const alertVariants = cva(
  "bg-card relative w-full max-w-2xl rounded-[5px] p-6 flex flex-col gap-4",
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
  },
);

const AlertDialog = ({ children, variant = "default" }: AlertDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <AlertDialogContext.Provider value={{ isOpen, open, close, variant }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

const AlertDialogTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open } = useAlertDialog();
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
} & VariantProps<typeof alertVariants>) => {
  const { isOpen, close, variant } = useAlertDialog();

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

const AlertDialogHeader = ({
  title,
  description,
  className,
}: AlertDialogHeaderProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <p className="text-sm text-description">{description}</p>
  </div>
);

const AlertDialogFooter = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-end w-full gap-2">{children}</div>
);

const AlertDialogCancel = ({ children }: { children: ReactNode }) => {
  const { close } = useAlertDialog();
  return (
    <Button
      className="border border-white cursor-pointer hover:bg-[#090909]"
      onClick={close}
    >
      {children}
    </Button>
  );
};

const AlertDialogAction = ({
  children,
  onConfirm,
  className,
}: {
  children: ReactNode;
  onConfirm?: () => void;
  className?: string;
}) => {
  const { close, variant } = useAlertDialog();

  const handleClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    close();
  };

  return (
    <Button
      className={cn(
        "cursor-pointer",
        variant === "destructive"
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-white text-black hover:bg-white/80",
        className,
      )}
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