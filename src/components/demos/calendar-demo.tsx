import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        value={date}
        onChange={setDate}
        className="rounded-md border"
      />
      <div className="text-sm text-zinc-500">
        Selected: {date ? date.toLocaleDateString() : "None"}
      </div>
    </div>
  );
}
