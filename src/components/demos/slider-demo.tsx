import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-white">Volume</span>
        <span className="text-sm font-medium text-zinc-400">{value}%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
}
