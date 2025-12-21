import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export const HoverCardDemo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link" className="text-white">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
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
