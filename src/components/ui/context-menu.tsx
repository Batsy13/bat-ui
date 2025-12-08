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

interface ContextMenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

const ContextMenuContext = createContext<ContextMenuContextType | null>(null);

const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenu must be used within a ContextMenu");
  }
  return context;
};

const ContextMenu = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const value = { isOpen, setIsOpen, position, setPosition };

  return (
    <ContextMenuContext.Provider value={value}>
      <div ref={menuRef}>{children}</div>
    </ContextMenuContext.Provider>
  );
};

const ContextMenuTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setIsOpen, setPosition } = useContextMenu();

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  return (
    <div onContextMenu={handleContextMenu} className={className}>
      {children}
    </div>
  );
};

const ContextMenuContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen, position } = useContextMenu();

  if (!isOpen) return null;

  return (
    <div
      style={{ top: position.y, left: position.x }}
      className={cn(
        "fixed z-50 min-w-[12rem] rounded-sm border border-border bg-card p-2 shadow-md animate-in fade-in zoom-in-95 duration-200",
        className
      )}
      role="menu"
    >
      {children}
    </div>
  );
};

const ContextMenuItem = ({
  children,
  onSelect,
  className,
  disabled = false,
}: {
  children: ReactNode;
  onSelect?: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  const { setIsOpen } = useContextMenu();

  const handleClick = () => {
    if (disabled) return;
    if (onSelect) onSelect();
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        disabled
          ? "pointer-events-none opacity-50"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      role="menuitem"
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};

const ContextMenuLabel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
      {children}
    </div>
  );
};

const ContextMenuSeparator = ({ className }: { className?: string }) => {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} />;
};

const ContextMenuShortcut = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
};

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
};
