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

  return isOpen ? (
    <div
      style={{ marginBottom: `${sideOffset}px` }}
      className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-sm",
        className
      )}
      role="tooltip"
    >
      {children}
    </div>
  ) : null;
}
