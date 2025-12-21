import { cn } from "../../lib/utils";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { X } from "lucide-react";
import { Button } from "./button";

type DrawerSide = "top" | "right" | "bottom" | "left";

type DrawerContextProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  side: DrawerSide;
  setSide: (side: DrawerSide) => void;
};

const DrawerContext = createContext<DrawerContextProps | null>(null);

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a Drawer provider");
  }
  return context;
};

const Drawer = ({
  children,
  defaultSide = "right",
}: {
  children: ReactNode;
  defaultSide?: DrawerSide;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [side, setSide] = useState<DrawerSide>(defaultSide);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, open, close, side, setSide }}>
      {children}
    </DrawerContext.Provider>
  );
};

const DrawerTrigger = ({
  children,
  className,
  asChild,
}: {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}) => {
  const { open } = useDrawer();
  const Comp = asChild ? "div" : Button;
  return (
    <Comp onClick={open} className={className}>
      {children}
    </Comp>
  );
};

const DrawerContent = ({
  children,
  className,
  side: propSide,
}: {
  children: ReactNode;
  className?: string;
  side?: DrawerSide;
}) => {
  const { isOpen, close, side: contextSide, setSide } = useDrawer();
  const side = propSide || contextSide;

  useEffect(() => {
    if (propSide) {
      setSide(propSide);
    }
  }, [propSide, setSide]);

  const sideClasses = {
    top: "inset-x-0 top-0 border-b data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
    bottom:
      "inset-x-0 bottom-0 border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
    left: "inset-y-0 left-0 border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
    right:
      "inset-y-0 right-0 border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={close}
      />
      <div
        role="dialog"
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "fixed z-50 bg-background border-border p-6 shadow-lg transition-transform duration-300 ease-in-out",
          sideClasses[side],
          className
        )}
      >
        <div className="absolute right-4 top-4">
          <Button
            variant="ghost"
            onClick={close}
            className="w-6 h-6 p-0 rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        {children}
      </div>
    </>
  );
};

const DrawerHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>
    {children}
  </div>
);

const DrawerFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}>
    {children}
  </div>
);

const DrawerTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("text-lg font-semibold text-foreground", className)}>
    {children}
  </div>
);

const DrawerDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("text-sm text-muted-foreground", className)}>
    {children}
  </div>
);

const DrawerClose = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { close } = useDrawer();
  return (
    <Button variant="outline" onClick={close} className={className}>
      {children}
    </Button>
  )
}

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
};
