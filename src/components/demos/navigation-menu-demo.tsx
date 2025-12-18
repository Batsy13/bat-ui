import {
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
      <NavigationMenuLink>
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
ListItem.displayName = "ListItem"
