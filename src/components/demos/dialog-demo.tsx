import {
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
      <DialogTrigger className="px-4 py-2 bg-primary rounded-xl cursor-pointer hover:bg-primary/80">Open Dialog</DialogTrigger>
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
