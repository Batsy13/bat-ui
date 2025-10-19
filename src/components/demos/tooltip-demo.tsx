import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

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
