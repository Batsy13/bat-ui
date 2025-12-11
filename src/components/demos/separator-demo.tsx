import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-white">Bat UI</h4>
        <p className="text-sm text-muted-foreground text-zinc-400">
          A collection of native UI components.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm text-white">
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Themes</div>
        <Separator orientation="vertical" />
        <div>GitHub</div>
      </div>
    </div>
  );
}
