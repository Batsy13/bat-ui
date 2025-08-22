const components = [
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
    { title: "Chart", path: "/chart" },
    { title: "Checkbox", path: "/checkbox" },
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
    { title: "Resizable", path: "/resizable" },
    { title: "Select", path: "/select" },
    { title: "Separator", path: "/separator" },
    { title: "Sheet", path: "/sheet" },
    { title: "Sidebar", path: "/sidebar" },
    { title: "Skeleton", path: "/skeleton" },
    { title: "Slider", path: "/slider" },
    { title: "Sonner", path: "/sonner" },
    { title: "Switch", path: "/switch" },
    { title: "Table", path: "/table" },
    { title: "Tabs", path: "/tabs" },
    { title: "Textarea", path: "/textarea" },
    { title: "Toggle", path: "/toggle" },
    { title: "Toggle Group", path: "/toggle-group" },
    { title: "Tooltip", path: "/tooltip" },
    { title: "Terminal", path: "/terminal" },
    { title: "Hero Video Dialog", path: "/hero-video-dialog" },
    { title: "Marquee", path: "/marquee" },
    { title: "File Tree", path: "/file-tree" },
    { title: "Code Comparison", path: "/code-comparison" },
    { title: "Scroll Progress", path: "/scroll-progress" },
];

export const NavSidebar = () => {
    return (
        <aside className="h-screen pt-12 pl-3 overflow-y-scroll pb-14 no-scrollbar">
            <div className="text-[#a7a7a7] px-3">Components</div>
            <div className="py-4 text-white text-[14px] flex items-start gap-1 flex-col">
                {components.map((item) => (
                    <a
                        className="bg-transparent hover:bg-[#141414] px-3 py-[5px] cursor-pointer rounded-[5px]"
                        href={`/docs/components${item.path}`}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </aside>
    );
};
