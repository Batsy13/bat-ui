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
      <HoverCardTrigger asChild>
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
