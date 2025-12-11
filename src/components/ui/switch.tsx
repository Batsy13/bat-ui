import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked: controlledChecked, onCheckedChange, disabled, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(false);

    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const toggle = () => {
      if (disabled) return;

      const newChecked = !checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={toggle}
        ref={ref}
        className={cn(
          "peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-white" : "bg-zinc-800",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
            checked ? "translate-x-4 bg-black" : "translate-x-0 bg-zinc-400"
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
