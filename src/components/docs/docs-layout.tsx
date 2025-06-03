import { Outlet } from "react-router"

export const DocsLayout = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-dvh grid grid-cols-[300px_1fr_300px]">
            <aside className="w-[300px] min-h-full bg-red-500"></aside>
            <main className="w-full">
                <Outlet/>
            </main>
            <aside className="w-[300px] min-h-full bg-red-900"></aside>
        </div>
    )
}