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

const DropdownSubMenuContext = createContext<DropdownSubMenuContextType | null>(null);

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
        "flex items-center justify-center gap-2 rounded-md text-sm font-medium px-4 py-2 bg-[#101010] border border-[#262626]",
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
      className={cn("z-50 min-w-[12rem] bg-[#101010] p-2 rounded-sm border border-[#262626]", isOpen ? "opacity-100" : "opacity-0", className )}
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
        "relative flex items-center px-2 py-1.5 text-sm outline-none transition-colors cursor-pointer rounded-sm",
        disabled
          ? "text-[#353535] cursor-not-allowed"
          : "text-white hover:bg-[#262626]",
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
  return <div className={cn("my-1 h-px bg-[#262626]", className)} />;
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

export function DropdownMenuSubTrigger({ children, className }: { children: ReactNode; className?: string; }) {
    return (
        <div
            className={cn(
                "relative flex items-center px-2 py-1.5 text-sm outline-none transition-colors cursor-pointer rounded-sm text-white hover:bg-[#262626]",
                className
            )}
            role="menuitem"
        >
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto h-4 w-4"><path d="m9 18 6-6-6-6" /></svg>
        </div>
    );
}

export function DropdownMenuSubContent({ children, className }: { children: ReactNode; className?: string; }) {
    const { isSubOpen } = useSubMenu();

    return isSubOpen ? (
        <div
            className={cn(
                "absolute left-full top-[-4px] z-50 min-w-[12rem] bg-[#101010] p-2 rounded-sm border border-[#262626]",
                className
            )}
        >
            {children}
        </div>
    ) : null;
}