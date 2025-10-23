import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { cn } from "../../lib/utils";

interface HoverCardContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HoverCardContext = createContext<HoverCardContextType | null>(null);

const useHoverCard = () => {
  const context = useContext(HoverCardContext);
  if (!context) {
    throw new Error("useHoverCard must be used within a HoverCard");
  }
  return context;
};

export function HoverCard({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <HoverCardContext.Provider value={value}>
      <div className="relative inline-block">{children}</div>
    </HoverCardContext.Provider>
  );
}

export function HoverCardTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setIsOpen } = useHoverCard();
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

export function HoverCardContent({
  children,
  className,
  sideOffset = 4,
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  const { isOpen } = useHoverCard();

  return (
    <div
      style={{ marginBottom: `${sideOffset}px` }}
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 z-50 rounded-md border border-border bg-card px-3 py-2 text-sm h-fit p-4",
        "transition-all duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
          : "opacity-0 pointer-events-none -translate-y-2 scale-95",
        className
      )}
      role="tooltip"
    >
      {children}
    </div>
  );
}
