import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface MenubarContextType {
  value: string | null;
  setValue: (value: string | null) => void;
}
const MenubarContext = createContext<MenubarContextType | null>(null);

function useMenubar() {
  const context = useContext(MenubarContext);
  if (!context) {
    throw new Error("useMenubar must be used within a Menubar");
  }
  return context;
}

interface MenubarMenuContextType {
  value: string;
}
const MenubarMenuContext = createContext<MenubarMenuContextType | null>(null);

const Menubar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (value: string | null) => void }
>(({ className, children, value: controlledValue, onValueChange, ...props }, ref) => {
  const [internalValue, setInternalValue] = useState<string | null>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const setValue = (val: string | null) => {
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onValueChange?.(val);
  }

  const menubarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
        setValue(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <MenubarContext.Provider value={{ value, setValue }}>
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          (menubarRef as any).current = node;
        }}
        className={cn(
          "flex h-10 items-center space-x-1 rounded-md border border-zinc-800 bg-zinc-950 p-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
});
Menubar.displayName = "Menubar";

const MenubarMenu = ({ value, children }: { value: string; children: React.ReactNode }) => {
  return (
    <MenubarMenuContext.Provider value={{ value }}>
      <div className="relative">{children}</div>
    </MenubarMenuContext.Provider>
  );
};

const MenubarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { value: selectedValue, setValue } = useMenubar();
  const { value: menuValue } = useContext(MenubarMenuContext)!;

  const isOpen = selectedValue === menuValue;

  return (
    <button
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-zinc-800 focus:text-zinc-50 data-[state=open]:bg-zinc-800 data-[state=open]:text-zinc-50",
        className
      )}
      onClick={() => setValue(isOpen ? null : menuValue)}
      onMouseEnter={() => {
        if (selectedValue !== null && selectedValue !== menuValue) {
          setValue(menuValue);
        }
      }}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    />
  )
})
MenubarTrigger.displayName = "MenubarTrigger";

const MenubarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { value: selectedValue } = useMenubar();
  const { value: menuValue } = useContext(MenubarMenuContext)!;

  if (selectedValue !== menuValue) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-full z-50 min-w-[12rem] overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 p-1 text-zinc-50 shadow-md animate-in slide-in-from-top-2",
        className
      )}
      style={{ left: 0 }}
      {...props}
    />
  )
})
MenubarContent.displayName = "MenubarContent";

const MenubarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean; disabled?: boolean }
>(({ className, inset, disabled, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-800 focus:text-zinc-50 hover:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      data-disabled={disabled}
      {...props}
    />
  );
});
MenubarItem.displayName = "MenubarItem";

const MenubarCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, children, checked, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-800 focus:text-zinc-50 hover:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  );
});
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

const MenubarRadioItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-800 focus:text-zinc-50 hover:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </div>
  );
});
MenubarRadioItem.displayName = "MenubarRadioItem";

const MenubarLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = "MenubarLabel";

const MenubarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-zinc-800", className)}
    {...props}
  />
));
MenubarSeparator.displayName = "MenubarSeparator";

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-zinc-400",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

const MenubarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
MenubarGroup.displayName = "MenubarGroup";

const MenubarRadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string, onValueChange?: (value: string) => void }
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props}>
    {children}
  </div>
));
MenubarRadioGroup.displayName = "MenubarRadioGroup";


export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarGroup,
};
