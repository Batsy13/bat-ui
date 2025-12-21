import { DatePicker } from "@/components/ui/date-picker";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar, DateRange } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="flex flex-col gap-4 items-center">
      <DatePicker
        date={date}
        setDate={setDate}
        className="w-[280px]"
      />
      <div className="text-sm text-zinc-500">
        Selected: {date ? date.toDateString() : "None"}
      </div>
    </div>
  );
}

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 4, 29),
    to: new Date(2025, 11, 5),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            value={date}
            onChange={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}