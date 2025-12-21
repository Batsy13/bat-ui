import * as React from "react";
import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <Combobox
        options={frameworks}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
        emptyText="No framework found."
      />
    </div>
  );
}
