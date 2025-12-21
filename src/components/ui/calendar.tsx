import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
  isBefore,
  isAfter,
} from "date-fns";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export type CalendarProps = {
  className?: string;
} & (
    | {
      mode?: "single";
      value?: Date;
      onChange?: (date: Date | undefined) => void;
    }
    | {
      mode: "range";
      value?: DateRange;
      onChange?: (range: DateRange | undefined) => void;
    }
  );

function Calendar({ className, mode = "single", ...props }: CalendarProps) {
  const { value, onChange } = props as any;
  const [currentMonth, setCurrentMonth] = useState(
    (mode === "single" ? value : value?.from) || new Date()
  );

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    if (mode === "single") {
      onChange?.(date);
    } else {
      const range = value as DateRange | undefined;
      if (!range?.from || (range.from && range.to)) {
        onChange?.({ from: date, to: undefined });
      } else if (isBefore(date, range.from)) {
        onChange?.({ from: date, to: range.from });
      } else {
        onChange?.({ from: range.from, to: date });
      }
    }
  };

  return (
    <div
      className={cn(
        "p-3 bg-black border rounded-md border-zinc-800 w-fit",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-white">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="w-7 h-7 p-0 text-zinc-400 hover:text-white hover:bg-zinc-800"
            onClick={previousMonth}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            className="w-7 h-7 p-0 text-zinc-400 hover:text-white hover:bg-zinc-800"
            onClick={nextMonth}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <span key={day} className="text-[0.8rem] text-zinc-500 font-medium">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          let isSelected = false;
          let isRangeStart = false;
          let isRangeEnd = false;
          let isRangeMiddle = false;

          if (mode === "single") {
            isSelected = value ? isSameDay(day, value) : false;
          } else {
            const range = value as DateRange | undefined;
            if (range?.from) {
              isRangeStart = isSameDay(day, range.from);
              if (range.to) {
                isRangeEnd = isSameDay(day, range.to);
                isRangeMiddle =
                  isAfter(day, range.from) && isBefore(day, range.to);
              }
            }
            isSelected = isRangeStart || isRangeEnd;
          }

          const isCurrentMonth = isSameMonth(day, currentMonth);
          const range = value as DateRange | undefined;

          return (
            <button
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-8 w-8 p-0 text-sm font-normal flex items-center justify-center transition-colors rounded-md",
                !isCurrentMonth && "text-zinc-600 opacity-50",
                isCurrentMonth &&
                !isSelected &&
                !isRangeMiddle &&
                "text-zinc-300 hover:bg-zinc-800 hover:text-white",
                isSelected &&
                "bg-white text-black hover:bg-white hover:text-black font-medium opacity-100 z-10",
                isRangeMiddle &&
                "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-none",
                isRangeStart && range?.to && "rounded-r-none",
                isRangeEnd && range?.from && "rounded-l-none"
              )}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
