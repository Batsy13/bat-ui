import {
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
}
