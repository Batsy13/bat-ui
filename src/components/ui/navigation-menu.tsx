import { ChevronDown } from "lucide-react";
import React, { createContext, useContext, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationMenuContextType {
  value: string | null;
  setValue: (value: string | null) => void;
  viewportRef: React.RefObject<HTMLDivElement | null>;
  uniqueId: string;
}

const NavigationMenuContext = createContext<NavigationMenuContextType | null>(null);

function useNavigationMenu() {
  const context = useContext(NavigationMenuContext);
  if (!context) {
    throw new Error("useNavigationMenu must be used within a NavigationMenu");
  }
  return context;
}

const NavigationMenu = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {

  const [value, setValue] = useState<string | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const uniqueId = React.useId();

  return (
    <NavigationMenuContext.Provider value={{ value, setValue, viewportRef, uniqueId }}>
      <nav
        ref={ref}
        className={cn(
          "relative z-10 flex max-w-max flex-1 items-center justify-center",
          className
        )}
        onMouseLeave={() => setValue(null)}
        {...props}
      >
        {children}
        <div className="absolute left-0 top-full flex justify-center">
          {/* Viewport wrapper for positioning */}
        </div>
      </nav>
    </NavigationMenuContext.Provider>
  );
});
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string } 
>(({ className, children, ...props }, ref) => {

  return (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </button>
  );
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";


const NavigationMenuItemWithLogic = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & { value?: string }
>(({ className, children, value: itemValue, ...props }, ref) => {
  const { value: activeValue, setValue } = useNavigationMenu();

  const uniqueValue = React.useMemo(() => itemValue || Math.random().toString(36).substring(7), [itemValue]);

  const isOpen = activeValue === uniqueValue;

  return (
    <li
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={() => setValue(uniqueValue)}
      {...props}
    >
      <NavigationMenuItemContext.Provider value={{ value: uniqueValue, isOpen }}>
        {children}
      </NavigationMenuItemContext.Provider>
    </li>
  )
})
NavigationMenuItemWithLogic.displayName = "NavigationMenuItem";

const NavigationMenuItemContext = createContext<{ value: string; isOpen: boolean } | null>(null);

const NavigationMenuTriggerWithContext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = useContext(NavigationMenuItemContext);
  const isOpen = context?.isOpen || false;

  return (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus:bg-zinc-800 focus:text-zinc-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-800/50 data-[state=open]:bg-zinc-800/50",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </button>
  )
});
NavigationMenuTriggerWithContext.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const context = useContext(NavigationMenuItemContext);
  const isOpen = context?.isOpen || false;

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 top-full w-auto min-w-full origin-top-center animate-in fade-in-80 zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      {...props}
    >
      <div className="relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg bg-zinc-950 border-zinc-800 p-2">
        {props.children}
      </div>
    </div>
  )
})
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus:bg-zinc-800 focus:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
});
NavigationMenuLink.displayName = "NavigationMenuLink";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItemWithLogic as NavigationMenuItem,
  NavigationMenuTriggerWithContext as NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};
