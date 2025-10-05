import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export const BadgeDemo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge className="bg-green-700">
          <BadgeCheckIcon size={15} /> Verified
        </Badge>
        <Badge className="bg-black rounded-full border border-white">8</Badge>
        <Badge className="bg-black rounded-2xl border border-white">20+</Badge>
      </div>
    </div>
  );
};
