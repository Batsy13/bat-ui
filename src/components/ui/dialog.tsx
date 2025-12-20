import { cn } from "../../lib/utils";
import { createContext, ReactNode, useContext, useState } from "react";
import { Button } from "./button";

type DialogVariant = "default" | "destructive";

type DialogContextProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  variant: DialogVariant;
};

type DialogProps = {
  children: ReactNode;
  variant?: DialogVariant;
};

type DialogHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

const DialogContext = createContext<DialogContextProps | null>(null);

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a Dialog provider");
  }
  return context;
};

const Dialog = ({ children, variant = "default" }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, open, close, variant }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open } = useDialog();
  return (
    <div onClick={open} className={cn("w-fit", className)}>
      {children}
    </div>
  );
};

const DialogContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen, close } = useDialog();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
      onClick={close}
    >
      <div
        role="dialog"
        className={cn(
          "bg-card relative w-full max-w-2xl rounded-[5px] p-6 flex flex-col gap-4",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({
  title,
  description,
  className,
}: DialogHeaderProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <p className="text-sm text-description">{description}</p>
  </div>
);

const DialogFooter = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-end w-full gap-2">{children}</div>
);

const DialogCancel = ({ children }: { children: ReactNode }) => {
  const { close } = useDialog();
  return (
    <Button
      className="border border-white cursor-pointer hover:bg-[#090909]"
      onClick={close}
    >
      {children}
    </Button>
  );
};

const DialogAction = ({
  children,
  onConfirm,
  className,
}: {
  children: ReactNode;
  onConfirm?: () => void;
  className?: string;
}) => {
  const { close, variant } = useDialog();

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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogCancel,
  DialogAction,
};