import { AspectRatio } from "../../components/ui/aspect-ratio";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function AspectRatioPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Aspect Ratio</h1>
                <p className="text-description">
                    A proportional relationship between an element's width and height.
                </p>
            </div>
            <PreviewCode
                preview={
                    <AspectRatio ratio="16/9">
                        <div className="w-[600px] h-[350px] bg-linear-to-br from-red-500/30 to-red-500 rounded-xl">
                        </div>
                    </AspectRatio>
                }
                code={`import { AspectRatio } from "@/components/ui/AspectRatio";

const AspectRatioDemo = () => (
    <AspectRatio ratio="16/9">
        <div className="w-[600px] h-[350px] bg-linear-to-br from-red-500/30 to-red-500 rounded-xl"></div>
    </AspectRatio>
);

export default AspectRatioDemo;
  `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal
                    type="bash"
                    code={"aspect-ratio"}
                    library="shadcn@latest"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import { AspectRatio } from "@/components/ui/aspect-ratio";`}
                />
                <Terminal
                    type="code"
                    code={`<AspectRatio ratio="16/9">
    <div className="w-[600px] h-[350px] bg-linear-to-br from-red-500/30 to-red-500 rounded-xl"></div>
</AspectRatio>`}
                />
            </div>
        </div>
    );
}
