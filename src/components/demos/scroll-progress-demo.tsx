import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useRef } from "react";

export function ScrollProgressDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
      <ScrollProgress className="absolute" containerRef={containerRef} />

      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto p-6 text-sm text-zinc-400"
      >
        <h4 className="mb-4 text-lg font-medium text-white">Scroll down to see progress</h4>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              Paragraph {i + 1}: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          ))}
          <p>
            You have reached the end of the content. The scroll progress bar should be full.
          </p>
        </div>
      </div>
    </div>
  );
}
