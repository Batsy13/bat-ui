import { Button } from "../../components/ui/button";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function ButtonPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Button</h1>
                <p className="text-description">
                    An interactive element that triggers an action or event when
                    clicked.
                </p>
            </div>

            <PreviewCode
                preview={
                    <>
                        <Button>Button</Button>
                    </>
                }
                code={`import { Button } from "@/components/ui/button";

    export function ButtonDemo() {
        return (
            <Button>
                Button
            </Button>
        )
    }
                    `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal type="bash" code={"button"} library="shadcn@latest" />
            </div>

            <div className="flex flex-col gap-12">
                <h2>Examples</h2>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Default</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button>Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";
                    
                    export function ButtonDemo() {
                    return (
                    <Button>
                    Button
                    </Button>
                    )
                    }
                            `}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Secondary</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button variant="secondary">Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
    return (
        <Button variant="secondary">
            Button
        </Button>
    )
}
                    `}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Destructive</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button variant="destructive">Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
    return (
        <Button variant="destructive">
            Button
        </Button>
    )
}
                    `}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Outline</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button variant="outline">Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
    return (
        <Button variant="outline">
            Button
        </Button>
    )
}
                    `}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Ghost</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button variant="ghost">Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
    return (
        <Button variant="ghost">
            Button
        </Button>
    )
}
                    `}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Link</h3>
                    <PreviewCode
                        preview={
                            <>
                                <Button variant="link">Button</Button>
                            </>
                        }
                        code={`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
    return (
        <Button variant="link">
            Button
        </Button>
    )
}
                    `}
                    />
                </div>
            </div>
        </div>
    );
}
