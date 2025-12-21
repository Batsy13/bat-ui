import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export const CollapsibleDemo = () => {
  return (
    <Collapsible>
      <div className="max-w-2xl w-full">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2">
          <p>@Batsy13 starred 3 repositories</p>
          <Button className="bg-transparent hover:bg-border p-2 h-fit">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
        <div className="border border-border py-2 px-4 w-full rounded-md mb-2">
          @shadcn-ui/ui
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="border border-border py-2 px-4 w-full rounded-md">
            @radix-ui/primitives
          </div>
          <div className="border border-border py-2 px-4 w-full rounded-md">
            @magicuidesign/magicui
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
