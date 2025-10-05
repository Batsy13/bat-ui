import { ComponentData } from "../lib/components-data";
import { PreviewCode } from "./ui/preview-code";
import { Terminal } from "./ui/terminal";

type ComponentPageTemplateProps = {
  data: ComponentData;
};

export function ComponentPageTemplate({ data }: ComponentPageTemplateProps) {
  const PreviewComponent = data.preview;

  return (
    <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
      <div className="flex flex-col gap-2">
        <h1>{data.name}</h1>
        <p className="text-description">{data.description}</p>
      </div>

      <PreviewCode
        preview={<PreviewComponent />}
        code={data.previewCode}
      />

      <div className="flex flex-col gap-2">
        <h2>Installing</h2>
        <Terminal
          type="bash"
          code={data.installation}
          library="shadcn@latest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2>Usage</h2>
        {data.usage.map((codeSnippet, index) => (
          <Terminal key={index} type="code" code={codeSnippet} />
        ))}
      </div>

      {data.examples && data.examples.length > 0 && (
        <div className="flex flex-col gap-12">
          <h2>Examples</h2>
          {data.examples.map((example) => {
            const ExamplePreview = example.preview;
            return (
              <div key={example.title} className="flex flex-col gap-4">
                <h3 className="text-xl">{example.title}</h3>
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