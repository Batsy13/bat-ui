import { Copy, TerminalIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

type TerminalProps = {
    type?: "component-terminal" | "bash" | "code";
    code: string;
    library?: string;
    className?: string;
};

export const Terminal = ({ type = "code", code, library, className }: TerminalProps) => {
    const [bash, setBash] = useState("pnpm");

    let command = "";

    switch (bash) {
        case "pnpm":
            command = `pnpm dlx ${library} add`;
            break;
        case "npm":
            command = `npm ${library} add`;
            break;
        case "yarn":
            command = `yarn ${library} add`;
            break;
        case "bun":
            command = `bunx --bun ${library} add`;
            break;
    }

    const fullCommand = `${command} ${code}`;

    return (
        <>
            {type === "component-terminal" ? (
                <div className={cn("relative flex w-full px-10 h-[450px] border border-[#262626] rounded-xl overflow-auto", className)}>
                    <button
                        className="absolute top-4 right-4 p-2 rounded-[8px] cursor-pointer hover:bg-[#262626] transition-all duration-300 ease-in-out"
                        onClick={() => navigator.clipboard.writeText(code!)}
                    >
                        <Copy size={16} />
                    </button>
                    <pre>
                        <code className="text-[#9C9C9C] whitespace-pre-wrap">
                            {code || "No Code Available"}
                        </code>
                    </pre>
                </div>
            ) : type === "bash" ? (
                <div className={cn("flex flex-col w-full border border-[#262626] bg-[#101010] rounded-xl overflow-auto", className)}>
                    <div className="flex justify-between items-center p-2 border-b border-[#262626]">
                        <div className="flex items-center gap-3">
                            <TerminalIcon
                                className="bg-[#727272] text-black rounded-[2px] p-0.5"
                                size={20}
                            />

                            <button
                                className={cn(
                                    "py-[1px] px-2 rounded-lg cursor-pointer",
                                    bash == "pnpm"
                                        ? "bg-[#1E1E1E] border border-[#262626]"
                                        : ""
                                )}
                                onClick={() => setBash("pnpm")}
                            >
                                pnpm
                            </button>
                            <button
                                className={cn(
                                    "py-[1px] px-2 rounded-lg cursor-pointer",
                                    bash == "npm"
                                        ? "bg-[#1E1E1E] border border-[#262626]"
                                        : ""
                                )}
                                onClick={() => setBash("npm")}
                            >
                                npm
                            </button>
                            <button
                                className={cn(
                                    "py-[1px] px-2 rounded-lg cursor-pointer",
                                    bash == "yarn"
                                        ? "bg-[#1E1E1E] border border-[#262626]"
                                        : ""
                                )}
                                onClick={() => setBash("yarn")}
                            >
                                yarn
                            </button>
                            <button
                                className={cn(
                                    "py-[1px] px-2 rounded-lg cursor-pointer",
                                    bash == "bun"
                                        ? "bg-[#1E1E1E] border border-[#262626]"
                                        : ""
                                )}
                                onClick={() => setBash("bun")}
                            >
                                bun
                            </button>
                        </div>
                        <button
                            className="p-2 rounded-[8px] cursor-pointer hover:bg-[#262626] transition-all duration-300 ease-in-out"
                            onClick={() =>
                                navigator.clipboard.writeText(fullCommand!)
                            }
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                    <div className="flex justify-between p-2">
                        <pre>
                            <code className="text-[#9C9C9C] whitespace-pre-wrap ">
                                {fullCommand}
                            </code>
                        </pre>
                    </div>
                </div>
            ) : (
                <div className={cn("relative flex w-full p-5 h-fit max-h-[450px] border border-[#262626] rounded-xl overflow-auto bg-[#101010]", className)}>
                    <button
                        className="absolute top-4 right-4 p-2 rounded-[8px] cursor-pointer hover:bg-[#262626] transition-all duration-300 ease-in-out"
                        onClick={() => navigator.clipboard.writeText(code!)}
                    >
                        <Copy size={16} />
                    </button>
                    <pre>
                        <code className="text-[#9C9C9C] whitespace-pre-wrap">
                            {code || "No Code Available"}
                        </code>
                    </pre>
                </div>
            )}
        </>
    );
};
