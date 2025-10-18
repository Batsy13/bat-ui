import React from "react";
import { AccordionDemo } from "../components/demos/accordion-demo";
import { AspectRatioDemo } from "../components/demos/aspect-ratio-demo";
import { AvatarDemo } from "../components/demos/avatar-demo";
import { BadgeDemo } from "../components/demos/badge-demo";
import {
  ButtonDemo,
  ButtonDestructiveDemo,
  ButtonGhostDemo,
  ButtonLinkDemo,
  ButtonOutlineDemo,
  ButtonSecondaryDemo,
} from "../components/demos/button-demo";
import { AlertDemo } from "../components/demos/alert-demo";
import { AlertDialogDemo } from "../components/demos/alert-dialog-demo";
import {
  TerminalBash,
  TerminalCode,
  TerminalComponentTerminal,
  TerminalDemo,
} from "../components/demos/terminal-demo";
import { DropdownMenuDemo } from "../components/demos/dropdown-menu-demo";
import {
  BreadcrumbDemo,
  BreadcrumbExample,
} from "@/components/demos/breadcrumb-demo";
import {
  InputDemo,
  InputDisabledDemo,
  InputPasswordDemo,
} from "@/components/demos/input-demo";

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
    <div className="flex w-full flex-wrap gap-2">
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
} from "../ui/dropdown-menu";
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
            <DropdownMenuTrigger className="bg-transparent p-0 border-0 cursor-pointer">
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
            <DropdownMenuTrigger className="bg-transparent p-0 border-0 cursor-pointer">
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
  terminal: {
    name: "Terminal",
    description: "A terminal component",
    installation: "terminal",
    preview: TerminalDemo,
    previewCode: `import { Terminal } from "@/components/ui/Terminal";

export function TerminalDemo() {
  return (
    <div className="flex w-full flex-wrap gap-2">
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
};
