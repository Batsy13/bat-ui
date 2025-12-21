import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";
import { useState } from "react";

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  filename: string;
  className?: string;
}

export function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  className,
}: CodeComparisonProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950", className)}>
      <div className="relative grid w-full">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-xs text-zinc-400">
          <FileIcon className="h-3.5 w-3.5" />
          <span>{filename}</span>
          <span className="ml-auto opacity-50">{language}</span>
        </div>

        <div className="relative min-h-[300px] w-full text-sm">
          <pre className="absolute inset-0 m-0 overflow-auto p-4 leading-6 text-zinc-400 bg-zinc-950 select-none">
            <code>{afterCode}</code>
          </pre>

          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-zinc-950 border-r border-zinc-700 select-none"
            style={{ width: `${position}%` }}
          >
            <pre className="absolute inset-0 m-0 overflow-visible p-4 leading-6 text-zinc-50">
              <code>{beforeCode}</code>
            </pre>
          </div>

          <div
            className="absolute inset-y-0 z-20 w-1 bg-transparent cursor-ew-resize group"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute inset-y-0 left-1/2 -ml-px w-px bg-white/50"></div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-ew-resize m-0 p-0"
          />
        </div>
      </div>
    </div>
  );
}
