import { Outlet } from "react-router"
import { NavSidebar } from "./nav-sidebar"

export const DocsLayout = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-dvh grid grid-cols-[300px_1fr_300px]">
            <NavSidebar />
            <main className="w-full">
                <Outlet/>
            </main>
            <aside className="w-[300px] min-h-full bg-red-900"></aside>
        </div>
    )
}