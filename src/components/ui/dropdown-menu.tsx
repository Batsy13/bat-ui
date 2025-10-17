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
import { ChevronRight } from "lucide-react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown deve ser usado dentro de um DropdownMenu");
  }
  return context;
};

interface DropdownSubMenuContextType {
  isSubOpen: boolean;
  setIsSubOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownSubMenuContext = createContext<DropdownSubMenuContextType | null>(
  null
);

const useSubMenu = () => {
  const context = useContext(DropdownSubMenuContext);
  if (!context) {
    throw new Error("useSubMenu deve ser usado dentro de um DropdownMenuSub");
  }
  return context;
};

export function DropdownMenu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const value = { isOpen, setIsOpen };

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

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <DropdownContext.Provider value={value}>
      <div ref={menuRef} className="relative w-fit text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isOpen, setIsOpen } = useDropdown();
  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md bg-card px-4 py-2 text-sm font-medium border border-border",
        className
      )}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  className,
  sideOffset = 4,
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  const { isOpen } = useDropdown();

  return isOpen ? (
    <div
      style={{ marginTop: `${sideOffset}px` }}
      className={cn(
        "absolute left-0 top-full z-50 min-w-[12rem] rounded-sm border border-border bg-card p-2",
        className
      )}
      role="menu"
      aria-orientation="vertical"
    >
      {children}
    </div>
  ) : null;
}

export function DropdownMenuGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function DropdownMenuItem({
  children,
  onSelect,
  className,
  disabled = false,
}: {
  children: ReactNode;
  onSelect?: any;
  className?: string;
  disabled?: boolean;
}) {
  const { setIsOpen } = useDropdown();
  const handleSelect = (e: any) => {
    if (disabled) return;
    if (onSelect) {
      onSelect(e);
    }
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleSelect}
      className={cn(
        "relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        disabled
          ? "cursor-not-allowed text-[#353535]"
          : "text-white hover:bg-border",
        className
      )}
      role="menuitem"
      tabIndex={-1}
      data-disabled={disabled}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({ className }: { className?: string }) {
  return <div className={cn("my-1 h-px bg-border", className)} />;
}

export function DropdownMenuSub({ children }: { children: ReactNode }) {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const value = { isSubOpen, setIsSubOpen };

  return (
    <DropdownSubMenuContext.Provider value={value}>
      <div
        className="relative"
        onMouseEnter={() => setIsSubOpen(true)}
        onMouseLeave={() => setIsSubOpen(false)}
      >
        {children}
      </div>
    </DropdownSubMenuContext.Provider>
  );
}

export function DropdownMenuSubTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm text-white outline-none transition-colors hover:bg-border",
        className
      )}
      role="menuitem"
    >
      {children}
      <ChevronRight size={20}/>
    </div>
  );
}

export function DropdownMenuSubContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isSubOpen } = useSubMenu();

  return isSubOpen ? (
    <div
      className={cn(
        "absolute left-full top-[-4px] z-50 min-w-[12rem] rounded-sm border border-border bg-[#101010] p-2",
        className
      )}
    >
      {children}
    </div>
  ) : null;
}
