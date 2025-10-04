import { Outlet } from "react-router";
import { NavSidebar } from "./nav-sidebar";
import { Footer } from "./ui/footer";

export const DocsLayout = () => {
  return (
    <div className="bg-[#0a0a0a] h-screen grid grid-cols-[300px_1fr_300px]">
      <NavSidebar />
      <main className="flex flex-col h-full pb-10 w-full overflow-scroll no-scrollbar">
        <Outlet />
        <Footer />
      </main>
      <aside className="w-[300px] h-full bg-red-900"></aside>
    </div>
  );
};
