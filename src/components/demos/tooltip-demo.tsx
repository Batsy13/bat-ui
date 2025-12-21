import { Button } from "@/components/ui/button";
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
