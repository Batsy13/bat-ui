import { Menu } from "lucide-react";
import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SidebarContext = createContext<{
  isCollapsed: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  openMobile: boolean;
} | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean;
}

const SidebarProvider = ({
  children,
  defaultCollapsed = false,
  className,
  ...props
}: SidebarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [openMobile, setOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar, isMobile, openMobile, setOpenMobile }}
    >
      <div
        className={cn(
          "flex h-full w-full bg-background text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
};
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { collapsible?: "icon" | "none" }
>(({ className, children, collapsible = "icon", ...props }, ref) => {
  const { isCollapsed, isMobile, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <>
        {openMobile && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpenMobile(false)}
          />
        )}
        <div
          ref={ref}
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 border-r bg-zinc-950 p-4 transition-transform duration-300 ease-in-out",
            openMobile ? "translate-x-0" : "-translate-x-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col border-r bg-zinc-950 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isCollapsed } = useSidebar();
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-4", isCollapsed ? "justify-center" : "justify-between", className)}
      {...props}
    >
      {children}
    </div>
  )
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto py-2", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { toggleSidebar, isMobile, setOpenMobile, openMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(!openMobile);
    } else {
      toggleSidebar();
    }
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-800 hover:text-white transition-colors",
        className
      )}
      {...props}
    >
      {props.children ? props.children : <Menu className="h-4 w-4" />}
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { icon?: React.ElementType; active?: boolean }
>(({ className, children, icon: Icon, active, ...props }, ref) => {
  const { isCollapsed } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        "group flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-white mx-2 my-1",
        active ? "bg-zinc-800 text-white" : "text-zinc-400",
        isCollapsed && "justify-center px-2",
        className
      )}
      {...props}
    >
      {Icon && <Icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />}
      {!isCollapsed && <span>{children}</span>}
      {isCollapsed && !Icon && <span>{children}</span>} {/* Fallback if no icon */}
    </div>
  );
});
SidebarItem.displayName = "SidebarItem";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-2", className)} {...props} />
));
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isCollapsed } = useSidebar();
  if (isCollapsed) return null;

  return (
    <div
      ref={ref}
      className={cn("px-4 py-2 text-xs font-semibold uppercase text-zinc-500", className)}
      {...props}
    />
  )
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarItem,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
};
