import { Outlet } from "react-router";
import { NavSidebar } from "./nav-sidebar";
import { Footer } from "../footer";

export const DocsLayout = () => {
    return (
        <div className="bg-[#0a0a0a] h-dvh grid grid-cols-[300px_1fr_300px]">
            <NavSidebar />
            <main className="grid w-full h-full overflow-scroll no-scrollbar">
                <Outlet />
                <Footer />
            </main>
            <aside className="w-[300px] h-full bg-red-900"></aside>
        </div>
    );
};
