import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function BadgePage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Badge</h1>
                <p className="description">Displays a Badge</p>
            </div>

            <PreviewCode
                preview={
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge>Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge className="bg-green-700">
                                {" "}
                                <BadgeCheckIcon size={15} /> Verified
                            </Badge>
                            <Badge className="bg-black rounded-full border border-white">
                                8
                            </Badge>
                            <Badge className="bg-black rounded-2xl border border-white">
                                20+
                            </Badge>
                        </div>
                    </div>
                }
                code={`import { Badge } from "@/components/ui/badge";

    export function BadgeDemo() {
        return (
            <div className="flex flex-col items-center gap-2">
                <div className="flex w-full flex-wrap gap-2">
                    <Badge>Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                    <Badge className="bg-green-700"> <BadgeCheckIcon size={15}/> Verified</Badge>
                    <Badge className="bg-black rounded-full border border-white">8</Badge>
                    <Badge className="bg-black rounded-2xl border border-white">20+</Badge>
                </div>
            </div>
        )
    }
                    `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal type="bash" code={"badge"} library="shadcn@latest" />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import { Badge } from "@/components/ui/badge";`}
                />
                <Terminal
                    type="code"
                    code={`<Badge variant="default | outline | secondary | destructive">Badge</Badge>`}
                />
            </div>
        </div>
    );
}
