import { slugify } from "@/lib/utils";
import { ComponentData } from "../lib/components-data";

type OnThisPageSidebarProps = {
  data: ComponentData;
};

export const OnThisPageSidebar = ({ data }: OnThisPageSidebarProps) => {
  const hasExamples = data.examples && data.examples.length > 0;

  return (
    <aside className="hidden xl:block w-[300px] h-full bg-background text-white p-8 sticky top-0">
      <h4 className="font-medium mb-4 text-sm">On this page</h4>
      <nav>
        <ul className="flex flex-col gap-3 text-sm text-description">
          <li>
            <a
              href="#installing"
              className="hover:text-white transition-colors"
            >
              Installing
            </a>
          </li>
          <li>
            <a href="#usage" className="hover:text-white transition-colors">
              Usage
            </a>
          </li>
          {hasExamples && (
            <li>
              <a
                href="#examples"
                className="hover:text-white transition-colors"
              >
                Examples
              </a>
              {data.examples && (
                <ul className="pl-4 mt-3 flex flex-col gap-3 border-l border-border">
                  {data.examples.map((example) => (
                    <li key={example.title}>
                      <a
                        href={`#${slugify(example.title)}`}
                        className="hover:text-white transition-colors"
                      >
                        {example.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};
