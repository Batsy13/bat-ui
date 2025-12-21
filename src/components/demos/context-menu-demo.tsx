import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onSelect={() => console.log("Back")}>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log("Forward")}>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log("Reload")}>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onSelect={() => console.log("Save As...")}>
          Save As...
          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log("Print...")}>
          Print...
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Developer Tools</ContextMenuLabel>
        <ContextMenuItem onSelect={() => console.log("Inspect")}>
          Inspect
          <ContextMenuShortcut>⌥⌘I</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
