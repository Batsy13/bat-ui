import {
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
}

