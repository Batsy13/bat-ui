import { useState } from "react";
import { cn } from "../lib/utils";

export const PreviewCode = ({preview: PreviewComponent, code}: any) => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 ">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            activeTab == "preview" ? "text-white" : "text-[#9C9C9C]",
            "cursor-pointer"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            activeTab == "code" ? "text-white" : "text-[#9C9C9C]",
            "cursor-pointer"
          )}
        >
          Code
        </button>
      </div>

      {activeTab == "preview" && (
        <div className="flex items-center justify-center w-full p-10 h-[450px] border border-[#262626] rounded-xl">
            {PreviewComponent ? <PreviewComponent /> : <p>No Preview Available</p>}
        </div>
      )}

      {activeTab == "code" && (
        <div className="flex items-center justify-center w-full p-10 h-[450px] border border-[#262626] rounded-xl overflow-auto">
            <pre>
                <code className="text-[#9C9C9C] whitespace-pre-wrap">
                    {code || "No Code Available"}
                </code>
            </pre>
        </div>
      )}
      
    </div>
  );
};
