import React from "react";
import { AccordionDemo } from "../components/demos/accordion-demo";
import { AspectRatioDemo } from "../components/demos/aspect-ratio-demo";
import { AvatarDemo } from "../components/demos/avatar-demo";
import { BadgeDemo } from "../components/demos/badge-demo";
import { ButtonDemo, ButtonDestructiveDemo, ButtonGhostDemo, ButtonLinkDemo, ButtonOutlineDemo, ButtonSecondaryDemo } from "../components/demos/button-demo";
import { AlertDemo } from "../components/demos/alert-demo";
import { AlertDialogDemo } from "../components/demos/alert-dialog-demo";

export type ComponentData = {
  name: string;
  description: string;
  installation: string;
  preview: React.ComponentType;
  previewCode: string;
  usage: string[];
  examples?: {title: string, preview: React.ComponentType, code: string}[]; 
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
}`
      },
      {
        title: "Secondary",
        preview: ButtonSecondaryDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Button</Button>
}`
      },
      {
        title: "Destructive",
        preview: ButtonDestructiveDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonDestructiveDemo() {
  return <Button variant="destructive">Button</Button>
}`
      },
      {
        title: "Outline",
        preview: ButtonOutlineDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonOutlineDemo() {
  return <Button variant="outline">Button</Button>
}`
      },
      {
        title: "Ghost",
        preview: ButtonGhostDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonGhostDemo() {
  return <Button variant="ghost">Button</Button>
}`
      },
      {
        title: "Link",
        preview: ButtonLinkDemo,
        code: `import { Button } from "@/components/ui/button";

export function ButtonLinkDemo() {
  return <Button variant="link">Button</Button>
}`
      }
    ]
  },
};
