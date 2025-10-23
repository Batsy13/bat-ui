import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { cn } from "../../lib/utils";

interface TooltipContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a Tooltip");
  }
  return context;
};

export function Tooltip({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <TooltipContext.Provider value={value}>
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setIsOpen } = useTooltip();
  return (
    <span
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(className)}
    >
      {children}
    </span>
  );
}

export function TooltipContent({
  children,
  className,
  sideOffset = 4,
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  const { isOpen } = useTooltip();

  return (
    <div
      style={{ marginBottom: `${sideOffset}px` }}
      className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 z-50 rounded-md border border-border bg-card px-3 py-1.5 text-sm h-fit",
        "transition-all duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
          : "opacity-0 pointer-events-none translate-y-2 scale-95",
        className
      )}
      role="tooltip"
    >
      {children}
    </div>
  );
}
