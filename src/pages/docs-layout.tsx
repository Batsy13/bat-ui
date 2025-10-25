import { Outlet } from "react-router";
import { NavSidebar } from "../components/nav-sidebar";
import { Footer } from "../components/footer";
import { OnThisPageSidebar } from "@/components/on-this-page-sidebar";
import { ComponentData } from "@/lib/components-data";
import { useState } from "react";

export const DocsLayout = () => {
  const [pageData, setPageData] = useState<ComponentData | undefined>();

  return (
    <div className="bg-[#0a0a0a] h-svh grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr_300px]">
      <NavSidebar />
      <main className="flex flex-col justify-between w-full h-full px-10 py-10 overflow-scroll no-scrollbar">
        <Outlet context={{ setPageData }} />
        <Footer />
      </main>
      {pageData ? (
        <OnThisPageSidebar data={pageData} />
      ) : (
        <aside className="hidden xl:block w-[300px] h-full bg-background"></aside>
      )}
    </div>
  );
};
