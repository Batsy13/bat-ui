import React from "react";
import { AccordionDemo } from "@/components/demos/accordion-demo";
import { AspectRatioDemo } from "@/components/demos/aspect-ratio-demo";
import { AvatarDemo } from "@/components/demos/avatar-demo";
import { BadgeDemo } from "@/components/demos/badge-demo";
import {
  ButtonDemo,
  ButtonDestructiveDemo,
  ButtonGhostDemo,
  ButtonLinkDemo,
  ButtonOutlineDemo,
  ButtonSecondaryDemo,
} from "@/components/demos/button-demo";
import { AlertDemo } from "@/components/demos/alert-demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import {
  TerminalBash,
  TerminalCode,
  TerminalComponentTerminal,
  TerminalDemo,
} from "@/components/demos/terminal-demo";
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu-demo";
import {
  BreadcrumbDemo,
  BreadcrumbExample,
} from "@/components/demos/breadcrumb-demo";
import {
  InputDemo,
  InputDisabledDemo,
  InputPasswordDemo,
} from "@/components/demos/input-demo";
import { CollapsibleDemo } from "@/components/demos/collapsible-demo";
import { PopoverDemo } from "@/components/demos/popover-demo";
import { TooltipDemo } from "@/components/demos/tooltip-demo";
import { CalendarDemo } from "@/components/demos/calendar-demo";
import { CarouselDemo } from "@/components/demos/carousel-demo";
import { ComboboxDemo } from "@/components/demos/combobox-demo";
import { ContextMenuDemo } from "@/components/demos/context-menu-demo";
import { InputOTPDemo } from "@/components/demos/input-otp-demo";
import { DatePickerDemo, DatePickerWithRange } from "@/components/demos/date-picker-demo";
import { DrawerDemo } from "@/components/demos/drawer-demo";
import { SwitchDemo } from "@/components/demos/switch-demo";
import { TabsDemo } from "@/components/demos/tabs-demo";
import { CodeComparisonDemo } from "@/components/demos/code-comparison-demo";
import { FileTreeDemo } from "@/components/demos/file-tree-demo";
import { MenubarDemo } from "@/components/demos/menubar-demo";
import { NavigationMenuDemo } from "@/components/demos/navigation-menu-demo";
import { PaginationDemo } from "@/components/demos/pagination-demo";
import { ScrollProgressDemo } from "@/components/demos/scroll-progress-demo";
import { SidebarDemo } from "@/components/demos/sidebar-demo";
import { SliderDemo } from "@/components/demos/slider-demo";
import { SelectDemo } from "@/components/demos/select-demo";
import { SeparatorDemo } from "@/components/demos/separator-demo";
import { ToggleDemo } from "@/components/demos/toggle-demo";
import { CardDemo } from "@/components/demos/card-demo";
import { HoverCardDemo } from "@/components/demos/hover-card-demo";
import { SkeletonDemo, SkeletonExample } from "@/components/demos/skeleton";
import { DialogDemo } from "@/components/demos/dialog-demo";
import { CommandDemo } from "@/components/demos/command-demo";

export type ComponentData = {
  name: string;
  description: string;
  installation: string;
  preview: React.ComponentType;
  previewCode: string;
  usage: string[];
  examples?: { title: string; preview: React.ComponentType; code: string }[];
};

export const componentsData: Record<string, ComponentData> = {
  accordion: {
    name: "Accordion",
    description:
      "A collapsible content container that allows users to show or hide sections of information.",
    installation: "accordion",
    preview: AccordionDemo,
    previewCode: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AccordionDemo = () => (
  <Accordion defaultOpen="item-1">
    <AccordionItem value="item-1">
      <AccordionTrigger value="item-1">
        What's the difference between the Basic and Pro plans?
      </AccordionTrigger>
      <AccordionContent value="item-1">
        The Basic plan is perfect for individuals and small teams...
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionDemo;`,
    usage: [
      `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";`,
      `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">Title</AccordionTrigger>
    <AccordionContent value="item-1">Content</AccordionContent>
  </AccordionItem>
</Accordion>`,
    ],
  },
  alert: {
    name: "Alert",
    description:
      "A non-disruptive message box used to provide feedback to the user.",
    installation: "alert",
    preview: AlertDemo,
    previewCode: `import { Alert, AlertContent, AlertDescription, AlertHeader, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function AlertDemo() {
  return (
    <div className="flex flex-col w-full gap-6">
      <Alert>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>
              <CheckCircle2 /> Your changes have been saved
            </AlertTitle>
            <AlertDescription className="ml-8">Poggers description</AlertDescription>
          </AlertHeader>
        </AlertContent>
      </Alert>
      <Alert variant="destructive">
        <AlertContent>
          <AlertHeader>
            <AlertTitle>
              <AlertCircle /> An error has been occured!
            </AlertTitle>
          </AlertHeader>
        </AlertContent>
      </Alert>
    </div>
  )
};`,
    usage: [
      `import { Alert, AlertContent, AlertDescription, AlertHeader, AlertTitle } from "@/components/ui/alert";`,
      `<Alert variant="default | destructive">
  <AlertTitle>Alert!</AlertTitle>
  <AlertDescription>This is an example of an Alert</AlertDescription>
</Alert>`,
    ],
  },
  "alert-dialog": {
    name: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important information or a call to action.",
    installation: "alert-dialog",
    preview: AlertDialogDemo,
    previewCode: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {
  return (
    <>
      <AlertDialogTrigger className="text-white bg-red-500 cursor-pointer hover:bg-red-600">
        Delete Account
      </AlertDialogTrigger>
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader title="Are you Sure?" description="This action cannot be undone. This will exclude all your data." />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
};`,
    usage: [
      `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";`,
      `<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader title="Title" description="Description" />
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    ],
  },
  "aspect-ratio": {
    name: "Aspect Ratio",
    description:
      "A proportional relationship between an element's width and height.",
    installation: "aspect-ratio",
    preview: AspectRatioDemo,
    previewCode: `import { AspectRatio } from "@/components/ui/aspect-ratio";

const AspectRatioDemo = () => (
  <AspectRatio ratio="16/9">
    <div className="w-full h-full bg-linear-to-br from-red-500/30 to-red-500 rounded-xl" />
  </AspectRatio>
);

export default AspectRatioDemo;`,
    usage: [
      `import { AspectRatio } from "@/components/ui/aspect-ratio";`,
      `<AspectRatio ratio="16/9">
  <img src="..." alt="Image" />
</AspectRatio>`,
    ],
  },
  avatar: {
    name: "Avatar",
    description: "An image element with fallback for the username.",
    installation: "avatar",
    preview: AvatarDemo,
    previewCode: `import { Avatar } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-2">
      <Avatar name="Ren Amamiya" img="https://i.redd.it/unicurnujpqc1.jpeg" />
      <Avatar name="Ren Amamiya" img="invalid-link" />
    </div>
  )
}`,
    usage: [
      `import { Avatar } from "@/components/ui/avatar";`,
      `<Avatar name="Fallback Name" img="imageURL" />`,
    ],
  },
  badge: {
    name: "Badge",
    description: "Displays a Badge or a Tag.",
    installation: "badge",
    preview: BadgeDemo,
    previewCode: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap w-full gap-2">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`,
    usage: [
      `import { Badge } from "@/components/ui/badge";`,
      `<Badge variant="default | outline | secondary | destructive">Badge</Badge>`,
    ],
  },
  breadcrumb: {
    name: "Breadcrumb",
    description:
      "Indicates the current page's location within a navigational hierarchy.",
    installation: "breadcrumb",
    preview: BreadcrumbDemo,
    previewCode: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="p-0 bg-transparent border-0 cursor-pointer">
              <Ellipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/breadcrumb">
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
`,
    usage: [
      `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";`,
      `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    ],
    examples: [
      {
        title: "Custom separator",
        preview: BreadcrumbExample,
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
export function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="p-0 bg-transparent border-0 cursor-pointer">
              <Ellipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/breadcrumb">
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
`,
      },
    ],
  },
  button: {
    name: "Button",
    description: "An interactive element that triggers an action when clicked.",
    installation: "button",
    preview: ButtonDemo,
    previewCode: `import { Button } from "@/components/ui/button";

const ButtonDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);

export default ButtonDemo;`,
    usage: [
      `import { Button } from "@/components/ui/button";`,
      `<Button variant="default">Click Me</Button>`,
    ],
    examples: [
      {
        title: "Default",
        preview: ButtonDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonDefaultDemo() {
  return <Button>Button</Button>
}`,
      },
      {
        title: "Secondary",
        preview: ButtonSecondaryDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Button</Button>
}`,
      },
      {
        title: "Destructive",
        preview: ButtonDestructiveDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonDestructiveDemo() {
  return <Button variant="destructive">Button</Button>
}`,
      },
      {
        title: "Outline",
        preview: ButtonOutlineDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonOutlineDemo() {
  return <Button variant="outline">Button</Button>
}`,
      },
      {
        title: "Ghost",
        preview: ButtonGhostDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonGhostDemo() {
  return <Button variant="ghost">Button</Button>
}`,
      },
      {
        title: "Link",
        preview: ButtonLinkDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonLinkDemo() {
  return <Button variant="link">Button</Button>
}`,
      },
    ],
  },
  calendar: {
    name: "Calendar",
    description: "A date field component that allows users to enter and edit date.",
    installation: "calendar",
    preview: CalendarDemo,
    previewCode: `import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        value={date}
        onChange={setDate}
        className="rounded-md border"
      />
      <div className="text-sm text-zinc-500">
        Selected: {date ? date.toLocaleDateString() : "None"}
      </div>
    </div>
  );
}`,
    usage: [
      `import { Calendar } from "@/components/ui/calendar";`,
      `<Calendar
  value={date}
  onChange={setDate}
  className="rounded-md border"
/>`,
    ],
  },
  carousel: {
    name: "Carousel",
    description: "A motion component for cycling through elements.",
    installation: "carousel",
    preview: CarouselDemo,
    previewCode: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs mx-12">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    usage: [
      `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";`,
      `<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
    ],
  },
  combobox: {
    name: "Combobox",
    description: "Autocomplete input and command palette with a list of suggestions.",
    installation: "combobox",
    preview: ComboboxDemo,
    previewCode: `import * as React from "react";
import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <Combobox
        options={frameworks}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
        emptyText="No framework found."
      />
    </div>
  );
}`,
    usage: [
      `import { Combobox } from "@/components/ui/combobox";`,
      `<Combobox
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select item..."
/>`,
    ],
  },
  "context-menu": {
    name: "Context Menu",
    description: "Displays a menu to the user — triggered by a right click.",
    installation: "context-menu",
    preview: ContextMenuDemo,
    previewCode: `import {
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
}`,
    usage: [
      `import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";`,
      `<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    ],
  },
  "file-tree": {
    name: "File Tree",
    description:
      "A hierarchical list of files and folders to visualize project structure.",
    installation: "file-tree",
    preview: FileTreeDemo,
    previewCode: `import { File, FileTree, Folder } from "@/components/ui/file-tree";

export function FileTreeDemo() {
  return (
    <div className="w-full max-w-sm rounded-md border border-zinc-800 bg-zinc-950 p-4">
      <FileTree initialExpanded={["src", "components"]}>
        <Folder value="src" name="src">
          <Folder value="components" name="components">
            <Folder value="ui" name="ui">
              <File value="button.tsx" name="button.tsx" />
              <File value="input.tsx" name="input.tsx" />
              <File value="slider.tsx" name="slider.tsx" />
            </Folder>
            <File value="header.tsx" name="header.tsx" />
            <File value="footer.tsx" name="footer.tsx" />
          </Folder>
          <Folder value="lib" name="lib">
            <File value="utils.ts" name="utils.ts" />
            <File value="components-data.ts" name="components-data.ts" />
          </Folder>
          <File value="main.tsx" name="main.tsx" />
          <File value="App.tsx" name="App.tsx" />
        </Folder>
        <File value="package.json" name="package.json" />
        <File value="README.md" name="README.md" />
        <File value="tsconfig.json" name="tsconfig.json" />
      </FileTree>
    </div>
  );
}`,
    usage: [
      `import { FileTree, Folder, File } from "@/components/ui/file-tree"`,
      `<FileTree>
  <Folder value="src" name="src">
    <File value="main.tsx" name="main.tsx" />
  </Folder>
</FileTree>`,
    ],
  },
  menubar: {
    name: "Menubar",
    description: "A visually persistent menu common in desktop applications.",
    installation: "menubar",
    preview: MenubarDemo,
    previewCode: `import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Share
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="profiles">
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="batsy">
            <MenubarRadioItem value="batsy">Batsy</MenubarRadioItem>
            <MenubarRadioItem value="szayiel">Szayiel</MenubarRadioItem>
            <MenubarRadioItem value="az">Az</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
    usage: [
      `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar"`,
      `<Menubar>
  <MenubarMenu value="file">
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Close</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    ],
  },
  "navigation-menu": {
    name: "Navigation Menu",
    description:
      "A collection of links for navigating websites.",
    installation: "navigation-menu",
    preview: NavigationMenuDemo,
    previewCode: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"
import { Box } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Button",
    href: "/docs/components/button",
    description:
      "Interactive element for triggering actions.",
  },
  {
    title: "Input",
    href: "/docs/components/input",
    description:
      "Form field for textual user input.",
  },
  {
    title: "Slider",
    href: "/docs/components/slider",
    description:
      "Visual control for selecting values from a range.",
  },
  {
    title: "Switch",
    href: "/docs/components/switch",
    description:
      "Control for toggling between on and off states.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "Layered sections of content displayed one at a time.",
  },
  {
    title: "File Tree",
    href: "/docs/components/file-tree",
    description:
      "Hierarchical visualization of file and folder structures.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="project">
          <NavigationMenuTrigger>Bat UI</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-zinc-800/50 to-zinc-800 p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Box className="h-6 w-6 text-white" />
                  <div className="mb-2 mt-4 text-lg font-medium text-white">
                    Bat UI
                  </div>
                  <p className="text-sm leading-tight text-zinc-400">
                    Native React components for personal study and exploration.
                  </p>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Philosophy">
                Zero-dependency*, native implementations for learning purposes.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to integrate these components into your project.
              </ListItem>
              <ListItem href="/docs/styling" title="Styling">
                Using Tailwind CSS and cn utility for consistent design.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" className="text-sm font-medium">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-accent-foreground focus:bg-zinc-800 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"`,
    usage: [
      `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"`,
      `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    ],
  },
  sidebar: {
    name: "Sidebar",
    description: "A composable, collapsible sidebar layout with responsive mobile support.",
    installation: "sidebar",
    preview: SidebarDemo,
    previewCode: `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  ChevronDown,
} from "lucide-react"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

function SidebarLogo() {
  const { isCollapsed } = useSidebar()
  
  return (
    <div className="flex items-center gap-2 font-semibold text-white">
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <User2 className="h-4 w-4" />
      </div>
      {!isCollapsed && <span>Bat UI</span>}
    </div>
  )
}

export function SidebarDemo() {
  return (
    <div className="h-[400px] w-full rounded-md border border-zinc-800 overflow-hidden">
      <SidebarProvider className="h-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarLogo />
          </SidebarHeader>
          <SidebarContent className="no-scrollbar">
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              {items.map((item) => (
                <SidebarItem key={item.title} icon={item.icon}>
                  {item.title}
                </SidebarItem>
              ))}
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarItem icon={User2} className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2">

                <span>User Profile</span>
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </div>
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 flex flex-col min-w-0 bg-black">
          <header className="flex h-14 items-center gap-4 border-b border-zinc-800 px-6">
            <SidebarTrigger />
            <div className="font-semibold text-zinc-200">Dashboard</div>
          </header>
          <main className="flex-1 p-6 text-zinc-400">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
              <div className="aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800" />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}`,
    usage: [
      `import { SidebarProvider, Sidebar, SidebarTrigger } from "@/components/ui/sidebar"`,
      `<SidebarProvider>
  <Sidebar>
    {/* Sidebar Content */}
  </Sidebar>
  <main>
    <SidebarTrigger />
    {/* Main Content */}
  </main>
</SidebarProvider>`
    ]
  },
  pagination: {
    name: "Pagination",
    description: "Pagination with page navigation, next and previous links.",
    installation: "pagination",
    preview: PaginationDemo,
    previewCode: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
    usage: [
      `import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"`,
      `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    ],
  },
  "input-otp": {
    name: "Input OTP",
    description: "Accessible one-time password component with copy paste support.",
    installation: "input-otp",
    preview: InputOTPDemo,
    previewCode: `import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function InputOTPDemo() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(val) => setValue(val)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}`,
    usage: [
      `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";`,
      `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    ],
  },
  "date-picker": {
    name: "Date Picker",
    description: "A date picker component with range and presets.",
    installation: "date-picker",
    preview: DatePickerDemo,
    previewCode: `import * as React from "react";
import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="flex flex-col gap-4 items-center">
        <DatePicker
            date={date}
            setDate={setDate} 
            className="w-[280px]" 
        />
         <div className="text-sm text-zinc-500">
            Selected: {date ? date.toDateString() : "None"}
        </div>
    </div>
  );
}`,
    usage: [
      `import { DatePicker } from "@/components/ui/date-picker";`,
      `<DatePicker date={date} setDate={setDate} />`,
    ],
    examples: [
      {
        title: "Date Range Picker",
        preview: DatePickerWithRange,
        code: `import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 4, 29),
    to: new Date(2025, 11, 5),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            value={date}
            onChange={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}`,
      },
    ],
  },
  "date-range-picker": {
    name: "Date Range Picker",
    description: "A date range picker component.",
    installation: "date-range-picker",
    preview: DatePickerWithRange,
    previewCode: `import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            value={date}
            onChange={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}`,
    usage: [
      `import { DatePickerWithRange } from "@/components/ui/date-range-picker";`,
      `<DatePickerWithRange />`,
    ],
  },
  drawer: {
    name: "Drawer",
    description: "A drawer component that slides from the edge of the screen.",
    installation: "drawer",
    preview: DrawerDemo,
    previewCode: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function DrawerDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {["top", "right", "bottom", "left"].map((side) => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize w-full">
              {side}
            </Button>
          </DrawerTrigger>
          <DrawerContent side={side as "top" | "right" | "bottom" | "left"}>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <div className="py-4">
                <p>Profile content goes here...</p>
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose>Cancel</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}`,
    usage: [
      `import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";`,
      `<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>Close</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
    ],
  },
  switch: {
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    installation: "switch",
    preview: SwitchDemo,
    previewCode: `import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function SwitchDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  );
}`,
    usage: [
      `import { Switch } from "@/components/ui/switch";`,
      `<Switch checked={checked} onCheckedChange={setChecked} />`,
    ],
  },
  tabs: {
    name: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    installation: "tabs",
    preview: TabsDemo,
    previewCode: `import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <Input id="name" defaultValue="Batsy13" />
            </div>
            <div className="space-y-1">
              <label htmlFor="username">Username</label>
              <Input id="username" defaultValue="@batsy13" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`,
    usage: [
      `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";`,
      `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
    ],
  },
  toggle: {
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    installation: "toggle",
    preview: ToggleDemo,
    previewCode: `import { Bold } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`,
    usage: [
      `import { Toggle } from "@/components/ui/toggle"`,
      `<Toggle>Toggle</Toggle>`,
    ],
  },
  "code-comparison": {
    name: "Code Comparison",
    description:
      "A component that allows users to compare two blocks of code with a slider.",
    installation: "code-comparison",
    preview: CodeComparisonDemo,
    previewCode: `import { CodeComparison } from "@/components/ui/code-comparison";

const beforeCode = \`function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}\`;

const afterCode = \`function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-900"
  };

  return (
    <button 
      className={\\\`rounded px-4 py-2 \\\${styles[variant]}\\\`} 
      {...props}
    >
      {children}
    </button>
  )
}\`;

export function CodeComparisonDemo() {
  return (
    <div className="w-full max-w-2xl">
      <CodeComparison
        beforeCode={beforeCode}
        afterCode={afterCode}
        language="tsx"
        filename="button.tsx"
      />
    </div>
  );
}`,
    usage: [
      `import { CodeComparison } from "@/components/ui/code-comparison";`,
      `<CodeComparison beforeCode={before} afterCode={after} language="tsx" filename="example.tsx" />`,
    ],
  },
  slider: {
    name: "Slider",
    description:
      "An input where the user selects a value from within a given range.",
    installation: "slider",
    preview: SliderDemo,
    previewCode: `import { Slider } from "@/components/ui/slider";
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
}`,
    usage: [
      `import { Slider } from "@/components/ui/slider";`,
      `<Slider defaultValue={[33]} max={100} step={1} />`,
    ],
  },
  "scroll-progress": {
    name: "Scroll Progress",
    description: "A progress bar that tracks the user's scroll position.",
    installation: "scroll-progress",
    preview: ScrollProgressDemo,
    previewCode: `import { ScrollProgress } from "@/components/ui/scroll-progress";
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
}`,
    usage: [
      `import { ScrollProgress } from "@/components/ui/scroll-progress"`,
      `<ScrollProgress className="top-0" />`,
    ],
  },
  select: {
    name: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
    installation: "select",
    preview: SelectDemo,
    previewCode: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`,
    usage: [
      `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"`,
      `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,
    ],
  },
  separator: {
    name: "Separator",
    description: "Visually or semantically separates content.",
    installation: "separator",
    preview: SeparatorDemo,
    previewCode: `import { Separator } from "@/components/ui/separator";

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
}`,
    usage: [
      `import { Separator } from "@/components/ui/separator"`,
      `<Separator />`,
    ],
  },
  card: {
    name: "Card",
    description:
      "A container component with header, content, and footer sections.",
    installation: "card",
    preview: CardDemo,
    previewCode: `import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CardDemo = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password">Password</label>
                <a
                  href="#"
                  className="inline-block ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full text-black bg-white hover:bg-white/80">
          Login
        </Button>
        <Button variant="default" className="w-full bg-black">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};
`,
    usage: [
      `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";`,
      `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <p>Footer</p>
  </CardFooter>
</Card>`,
    ],
  },
  collapsible: {
    name: "Collapsible",
    description: "An interactive component which expands/collapses content.",
    installation: "collapsible",
    preview: CollapsibleDemo,
    previewCode: `import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export const CollapsibleDemo = () => {
  return (
    <Collapsible>
      <div className="w-full max-w-2xl">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2">
          <p>@Batsy13 starred 3 repositories</p>
          <Button className="p-2 bg-transparent hover:bg-border h-fit">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
        <div className="w-full px-4 py-2 mb-2 border rounded-md border-border">
          @shadcn-ui/ui
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="w-full px-4 py-2 border rounded-md border-border">
            @radix-ui/primitives
          </div>
          <div className="w-full px-4 py-2 border rounded-md border-border">
            @magicuidesign/magicui
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};`,
    usage: [
      `import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "@/components/ui/collapsible";`,
      `<Collapsible>
  <CollapsibleTrigger>Trigger</CollapsibleTrigger>
  <CollapsibleContent>
    Content
  </CollapsibleContent>
</Collapsible>`,
    ],
  },
  command: {
    name: "Command",
    description: "Fast, composable command menu component that can be used as a search bar or palette.",
    installation: "command",
    preview: CommandDemo,
    previewCode: `import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export const CommandDemo = () => {
  return (
    <>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem
              value="Calendar"
              onSelect={() => console.log("Selected Calendar")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>

            <CommandItem
              value="Search Emoji"
              onSelect={() => console.log("Selected Emoji")}
            >
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>

            <CommandItem
              value="Calculator"
              disabled
            >
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem
              value="Profile"
              onSelect={() => console.log("Selected Profile")}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem
              value="Billing"
              onSelect={() => console.log("Selected Billing")}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>

            <CommandItem
              value="Settings"
              onSelect={() => console.log("Selected Settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}`,
    usage: [
      `import { Command, CommandInput, CommandList, CommandItem, CommandGroup, CommandEmpty, CommandSeparator, CommandShortcut } from "@/components/ui/command";`,
      `<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
    </CommandGroup>
    </CommandList>
</Command>`,
    ],
  },
  dialog: {
    name: "Dialog",
    description: "A component overlaid on the primary window",
    installation: "dialog",
    preview: DialogDemo,
    previewCode: `import {
  Dialog,
  DialogAction,
  DialogCancel,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader
          title="Edit profile"
          description="Make changes to your profile here. Click save when you're
              done."
        ></DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <label htmlFor="name-1">Name</label>
            <Input id="name-1" name="name" defaultValue="Pedro Costa" />
          </div>
          <div className="grid gap-3">
            <label htmlFor="username-1">Username</label>
            <Input id="username-1" name="username" defaultValue="@Batsy13" />
          </div>
        </div>
        <DialogFooter>
          <DialogCancel>Cancel</DialogCancel>
          <DialogAction>Save Changes</DialogAction>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`,
    usage: [
      `import {
  Dialog,
  DialogAction,
  DialogCancel,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"`,
      `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader title="Are you absolutely sure?" description="This action cannot be undone. This will permanently delete your account and remove your data from our servers.">
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    ],
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    description:
      "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    installation: "dropdown-menu",
    preview: DropdownMenuDemo,
    previewCode: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Invite User</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>API (disabled)</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}`,
    usage: [
      `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";`,
      `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    ],
  },
  "hover-card": {
    name: "Hover Card",
    description:
      "For sighted users to preview content available behind a link.",
    installation: "hover-card",
    preview: HoverCardDemo,
    previewCode: `import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
          <Avatar name="RN" img="https://i.redd.it/unicurnujpqc1.jpeg"></Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-xs text-muted-foreground">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
`,
    usage: [
      `import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";`,
      `<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    Content for the hover card.
  </HoverCardContent>
</HoverCard>`,
    ],
  },
  input: {
    name: "Input",
    description:
      "Displays a form input field or a component that allows users to enter text.",
    installation: "input",
    preview: InputDemo,
    previewCode: `import { Input } from "@/components/ui/input";

export function InputDemo() {
  return <Input type="text" placeholder="Email" />
}`,
    usage: [
      `import { Input } from "@/components/ui/input";`,
      `<Input type="text" placeholder="Email" />`,
    ],
    examples: [
      {
        title: "Password",
        preview: InputPasswordDemo,
        code: `import { Input } from "@/components/ui/input";

export function InputPasswordDemo() {
  return <Input type="password" placeholder="Password" />
}`,
      },
      {
        title: "Disabled",
        preview: InputDisabledDemo,
        code: `import { Input } from "@/components/ui/input";

export function InputDisabledDemo() {
  return <Input type="text" placeholder="Email" disabled />
}`,
      },
    ],
  },
  popover: {
    name: "Popover",
    description:
      "Displays rich content in a portal that floats above the trigger.",
    installation: "popover",
    preview: PopoverDemo,
    previewCode: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid items-center grid-cols-3 gap-4">
              <label htmlFor="width">Width</label>
              <Input
                id="width"
                defaultValue="100%"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <label htmlFor="maxWidth">Max. width</label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <label htmlFor="height">Height</label>
              <Input
                id="height"
                defaultValue="25px"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <label>Max. height</label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="h-8 col-span-2"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
`,
    usage: [
      `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";`,
      `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Place content for the popover here.
  </PopoverContent>
</Popover>`,
    ],
  },
  skeleton: {
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    installation: "skeleton",
    preview: SkeletonDemo,
    previewCode: `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`,
    usage: [
      'import { Skeleton } from "@/components/ui/skeleton"',
      '<Skeleton className="h-[20px] w-[100px] rounded-full" />',
    ],
    examples: [
      {
        title: "Card",
        preview: SkeletonExample,
        code: `import { Skeleton } from "@/components/ui/skeleton"
        
export function SkeletonExample() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
`,
      },
    ],
  },
  terminal: {
    name: "Terminal",
    description: "A terminal component",
    installation: "terminal",
    preview: TerminalDemo,
    previewCode: `import { Terminal } from "@/components/ui/Terminal";

export function TerminalDemo() {
  return (
    <div className="flex flex-wrap w-full gap-2">
      <Terminal type="bash" code="button" library="bat/ui"/>
    </div>
  )
}`,
    usage: [
      `import { Terminal } from "@/components/ui/Terminal";`,
      `<Terminal type="bash" code="terminal" library="bat/ui"/>`,
    ],
    examples: [
      {
        title: "Bash",
        preview: TerminalBash,
        code: `import { Terminal } from "@/components/ui/Terminal";

export const TerminalBash = () => {
  return <Terminal type="bash" code="button" library="bat/ui"/>
}`,
      },
      {
        title: "Code",
        preview: TerminalCode,
        code: `import { Terminal } from "@/components/ui/Terminal";

export const TerminalCode = () => {
  return <Terminal type="code" code="Copy this text""/>
}`,
      },
      {
        title: "Component Terminal",
        preview: TerminalComponentTerminal,
        code: `import { Terminal } from "@/components/ui/Terminal";

export const TerminalComponentTerminal = () => {
  return <Terminal type="component-terminal" code="Copy this text" library="bat/ui" className="p-4"/>
}`,
      },
    ],
  },
  tooltip: {
    name: "Tooltip",
    description: "A popup that displays information related to an element.",
    installation: "tooltip",
    preview: TooltipDemo,
    previewCode: `import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button>Hover</Button>
      </TooltipTrigger>
      <TooltipContent>poggers</TooltipContent>
    </Tooltip>
  );
};
`,
    usage: [
      `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";`,
      `<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    Tooltip content
  </TooltipContent>
</Tooltip>`,
    ],
  },
};
