import { GithubIcon } from "@/assets/github-icon";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3">
      <div>
        <nav className="flex items-center gap-6 text-white">
          <Link to={"/"}>
            <img
              className="size-[32px]"
              src="/bat icon.png"
              alt="bat icon"
            ></img>
          </Link>
          <Link
            className="px-4 py-1 bg-transparent hover:bg-border rounded-[5px] cursor-pointer"
            to="/docs"
          >
            Docs
          </Link>
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
          <Link
            className="px-4 py-1 bg-transparent hover:bg-border rounded-[5px] cursor-pointer"
            to="/themes"
          >
            Themes
          </Link>
        </nav>
      </div>
      <div className="flex gap-4">
        <Link to={"https://github.com/Batsy13/bat-ui"} target="_blank">{<GithubIcon className="size-[20px]" />}</Link>

      </div>
    </header>
  );
};
