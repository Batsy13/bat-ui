import { ComponentData } from "../lib/components-data";
import { PreviewCode } from "../components/ui/preview-code";
import { Terminal } from "../components/ui/terminal";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { slugify } from "@/lib/utils";

type ComponentPageTemplateProps = {
  data: ComponentData;
};

type LayoutContext = {
  setPageData: (data: ComponentData | undefined) => void;
};

export function ComponentPageTemplate({ data }: ComponentPageTemplateProps) {
  const PreviewComponent = data.preview;
  const { setPageData } = useOutletContext<LayoutContext>();

  useEffect(() => {
    setPageData(data);
    return () => setPageData(undefined);
  }, [data, setPageData]);

  return (
    <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white">
      <div className="flex flex-col gap-2">
        <h1>{data.name}</h1>
        <p className="text-description">{data.description}</p>
      </div>

      <PreviewCode
        preview={<PreviewComponent />}
        code={data.previewCode}
      />

      <div className="flex flex-col gap-2">
        <h2 id="installing">Installing</h2>
        <Terminal
          type="bash"
          code={data.installation}
          library="shadcn@latest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 id="usage">Usage</h2>
        {data.usage.map((codeSnippet, index) => (
          <Terminal key={index} type="code" code={codeSnippet} />
        ))}
      </div>

      {data.examples && data.examples.length > 0 && (
        <div className="flex flex-col gap-12">
          <h2 id="examples">Examples</h2>
          {data.examples.map((example) => {
            const ExamplePreview = example.preview;
            const exampleId = slugify(example.title);
            return (
              <div key={example.title} className="flex flex-col gap-4">
                <h3 id={exampleId} className="text-xl">{example.title}</h3>
                <PreviewCode
                  preview={<ExamplePreview />}
                  code={example.code}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}