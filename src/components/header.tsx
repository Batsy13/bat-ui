import { GithubIcon } from "@/assets/github-icon";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { components } from "./nav-sidebar";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 lg:py-3">
        <div className="flex items-center gap-6">
          <Link to={"/"} className="flex-shrink-0">
            <img
              className="size-[32px]"
              src="/bat icon.png"
              alt="bat icon"
            ></img>
          </Link>
          <nav className="items-center hidden gap-6 text-white lg:flex">
            <Link
              className="px-4 py-1 bg-transparent hover:bg-border rounded-[5px] cursor-pointer"
              to="/docs/components"
            >
              Components
            </Link>
            <Link
              className="px-4 py-1 bg-transparent hover:bg-border rounded-[5px] cursor-pointer"
              to="/examples"
            >
              Examples
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to={"https://github.com/Batsy13/bat-ui"} target="_blank">
            {<GithubIcon className="size-[20px]" />}
          </Link>
          <button
            className="p-1 text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 w-full h-full p-6 overflow-y-auto bg-background/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-white">Menu</span>
              <button
                className="p-1 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-4 text-white">
              <Link
                to="/docs/components"
                className="px-3 py-1 hover:bg-border rounded-[5px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Components
              </Link>
              <Link
                to="/examples"
                className="px-3 py-1 hover:bg-border rounded-[5px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Examples
              </Link>
            </nav>

            <hr className="my-4 border-border" />

            <div className="px-3 text-description">Components</div>
            <div className="py-4 text-white text-[14px] flex items-start gap-1 flex-col w-full">
              {components.map((item) => (
                <Link
                  className={cn(
                    "w-full bg-transparent hover:bg-border px-3 py-[5px] cursor-pointer rounded-[5px]",
                    pathname === `/docs/components${item.path}`
                      ? "bg-secondary hover:bg-secondary"
                      : ""
                  )}
                  to={`/docs/components${item.path}`}
                  key={item.title}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
