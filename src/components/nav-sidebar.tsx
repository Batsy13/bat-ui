import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";

export const components = [
    { title: "Accordion", path: "/accordion" },
    { title: "Alert", path: "/alert" },
    { title: "Alert Dialog", path: "/alert-dialog" },
    { title: "Aspect Ratio", path: "/aspect-ratio" },
    { title: "Avatar", path: "/avatar" },
    { title: "Badge", path: "/badge" },
    { title: "Breadcrumb", path: "/breadcrumb" },
    { title: "Button", path: "/button" },
    { title: "Calendar", path: "/calendar" },
    { title: "Card", path: "/card" },
    { title: "Carousel", path: "/carousel" },
    { title: "Collapsible", path: "/collapsible" },
    { title: "Combobox", path: "/combobox" },
    { title: "Command", path: "/command" },
    { title: "Context Menu", path: "/context-menu" },
    { title: "Data Table", path: "/data-table" },
    { title: "Date Picker", path: "/date-picker" },
    { title: "Dialog", path: "/dialog" },
    { title: "Drawer", path: "/drawer" },
    { title: "Dropdown Menu", path: "/dropdown-menu" },
    { title: "Hover Card", path: "/hover-card" },
    { title: "Input", path: "/input" },
    { title: "Input OTP", path: "/input-otp" },
    { title: "Menubar", path: "/menubar" },
    { title: "Navigation Menu", path: "/navigation-menu" },
    { title: "Pagination", path: "/pagination" },
    { title: "Popover", path: "/popover" },
    { title: "Select", path: "/select" },
    { title: "Separator", path: "/separator" },
    { title: "Sidebar", path: "/sidebar" },
    { title: "Skeleton", path: "/skeleton" },
    { title: "Slider", path: "/slider" },
    { title: "Sonner", path: "/sonner" },
    { title: "Switch", path: "/switch" },
    { title: "Table", path: "/table" },
    { title: "Tabs", path: "/tabs" },
    { title: "Textarea", path: "/textarea" },
    { title: "Toggle", path: "/toggle" },
    { title: "Tooltip", path: "/tooltip" },
    { title: "Terminal", path: "/terminal" },
    { title: "Hero Video Dialog", path: "/hero-video-dialog" },
    { title: "Marquee", path: "/marquee" },
    { title: "File Tree", path: "/file-tree" },
    { title: "Code Comparison", path: "/code-comparison" },
    { title: "Scroll Progress", path: "/scroll-progress" },
];

export const NavSidebar = () => {

    const { pathname } = useLocation();

    return (
        <aside className="hidden h-screen pt-12 pl-3 overflow-y-scroll pb-14 no-scrollbar lg:block">
            <div className="px-3 text-description">Components</div>
            <div className="py-4 text-white text-[14px] flex items-start gap-1 flex-col">
                {components.map((item) => (
                    <Link
                        className={cn("bg-transparent hover:bg-border px-3 py-[5px] cursor-pointer rounded-[5px]", pathname === `/docs/components${item.path}` ? "bg-secondary hover:bg-secondary" : "")}
                        to={`/docs/components${item.path}`}
                        key={item.title}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </aside>
    );
};
