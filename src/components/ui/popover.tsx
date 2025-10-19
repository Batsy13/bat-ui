import {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { cn } from "../../lib/utils";

interface PopoverContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const PopoverContext = createContext<PopoverContextType | null>(null);

const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a Popover");
  }
  return context;
};

export function Popover({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const value = { isOpen, setIsOpen };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        event.target instanceof Node &&
        !popoverRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <PopoverContext.Provider value={value}>
      <div ref={popoverRef} className="relative w-fit text-left">
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isOpen, setIsOpen } = usePopover();
  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(className)}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {children}
    </button>
  );
}

export function PopoverContent({
  children,
  className,
  sideOffset = 4,
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  const { isOpen } = usePopover();

  return isOpen ? (
    <div
      style={{ marginTop: `${sideOffset}px` }}
      className={cn(
        "absolute left-0 top-full z-50 min-w-[12rem] rounded-sm border border-border bg-card p-4",
        className
      )}
      role="dialog"
    >
      {children}
    </div>
  ) : null;
}
