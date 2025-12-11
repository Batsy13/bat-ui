import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function SwitchDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" checked={checked} onCheckedChange={setChecked} />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  );
}
