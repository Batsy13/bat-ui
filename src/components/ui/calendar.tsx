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
} from "date-fns";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
};

function Calendar({ value, onChange, className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(value || new Date());

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    onChange?.(date);
  };

  return (
    <div className={cn("p-3 bg-black border rounded-md border-zinc-800 w-fit", className)}>
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
          const isSelected = value ? isSameDay(day, value) : false;
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <button
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-8 w-8 p-0 text-sm font-normal rounded-md flex items-center justify-center transition-colors",
                !isCurrentMonth && "text-zinc-600 opacity-50",
                isCurrentMonth && "text-zinc-300 hover:bg-zinc-800 hover:text-white",
                isSelected &&
                "bg-white text-black hover:bg-white hover:text-black font-medium opacity-100"
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
