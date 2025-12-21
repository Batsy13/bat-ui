import * as React from "react";
import { Minus } from "lucide-react";
import { cn } from "../../lib/utils";

interface InputOTPContextValue {
  value: string;
  maxLength: number;
  isFocused: boolean;
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null);

const useInputOTP = () => {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error("useInputOTP must be used within an InputOTP component");
  }
  return context;
};

interface InputOTPProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
}

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ className, value, onChange, maxLength, children, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    React.useImperativeHandle(ref, () => inputRef.current!);

    return (
      <InputOTPContext.Provider value={{ value, maxLength, isFocused }}>
        <div
          className={cn(
            "relative flex items-center gap-2 cursor-text select-none",
            className
          )}
          onClick={() => inputRef.current?.focus()}
          {...props}
        >
          <div className="flex items-center gap-2">{children}</div>
          <input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="absolute inset-0 opacity-0 cursor-pointer -z-10 disabled:cursor-not-allowed"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </InputOTPContext.Provider>
    );
  }
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { value, maxLength, isFocused } = useInputOTP();
  const isActive = isFocused && (value.length === index || (value.length === maxLength && index === maxLength - 1));
  const char = value[index] || "";

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-border min-h-10 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {isActive && value.length !== maxLength && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-4 bg-foreground animate-caret-blink" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus className="h-4 w-4" />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
