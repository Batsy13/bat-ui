import { components } from "@/components/nav-sidebar";
import { Link } from "react-router";

export const ComponentHome = () => {
  const data = components;

  return (
    <main className="flex items-center justify-center pt-24 gap-10">
      <div className="max-w-2xl flex flex-col gap-4">
        <h1 className="text-[32px] text-white font-bold">Components</h1>
        <span className="text-description">Here you can find all components available</span>
        <div className="text-white grid grid-cols-3 gap-4 w-full">
          {data.map((component) => (
            <Link to={`/docs/components${component.path}`} key={component.title} className="hover:bg-border p-2 rounded-md cursor-pointer">
              <div className="text-[16px]">
                {component.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
