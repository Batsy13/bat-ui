import { Outlet } from "react-router";
import { NavSidebar } from "../components/nav-sidebar";
import { Footer } from "../components/ui/footer";

export const DocsLayout = () => {
  return (
    <div className="bg-[#0a0a0a] h-svh grid grid-cols-[300px_1fr_300px]">
      <NavSidebar />
      <main className="flex flex-col justify-between h-full pb-10 w-full overflow-scroll no-scrollbar">
        <Outlet />
        <Footer />
      </main>
      <aside className="w-[300px] h-full bg-background"></aside>
    </div>
  );
};
