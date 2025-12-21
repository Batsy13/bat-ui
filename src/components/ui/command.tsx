import React, {
    createContext,
    useContext,
    useState,
    forwardRef,
    Children,
    isValidElement,
    cloneElement,
    SetStateAction,
    Dispatch,
} from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface CommandContextType {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

const CommandContext = createContext<CommandContextType | null>(null);

const useCommand = () => {
    const context = useContext(CommandContext);
    if (!context) {
        throw new Error("useCommand must be used within a Command component");
    }
    return context;
};

const Command = forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <CommandContext.Provider value={{ searchValue, setSearchValue }}>
            <div
                ref={ref}
                className={cn(
                    "flex h-fit w-full flex-col  overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-md",
                    className
                )}
                {...props}
            />
        </CommandContext.Provider>
    );
});
Command.displayName = "Command";

const CommandInput = forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
    const { searchValue, setSearchValue } = useCommand();

    return (
        <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
                ref={ref}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={cn(
                    "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                {...props}
            />
        </div>
    );
});
CommandInput.displayName = "CommandInput";

const CommandEmpty = forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>((props, ref) => (
    <div ref={ref} className="py-6 text-center text-sm" {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

interface CommandItemProps
    extends Omit<React.ComponentProps<"div">, "onSelect"> {
    value: string;
    onSelect?: (value: string) => void;
    disabled?: boolean;
}

const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
    ({ className, children, value, onSelect, disabled, ...props }, ref) => {
        const { setSearchValue } = useCommand();

        const handleSelect = () => {
            if (disabled) return;
            if (onSelect) onSelect(value);
            setSearchValue("");
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                    !disabled && "cursor-pointer hover:bg-border",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
                onClick={handleSelect}
                data-disabled={disabled}
                {...props}
            >
                {children}
            </div>
        );
    }
);
CommandItem.displayName = "CommandItem";

interface CommandGroupProps extends React.ComponentProps<"div"> {
    heading: string;
}

const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
    ({ className, heading, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("overflow-hidden p-1", className)} {...props}>
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {heading}
                </div>
                {children}
            </div>
        );
    }
);
CommandGroup.displayName = "CommandGroup";

const CommandSeparator = forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
    />
));
CommandSeparator.displayName = "CommandSeparator";

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    );
};
CommandShortcut.displayName = "CommandShortcut";

const CommandList = forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
    const { searchValue } = useCommand();
    let totalItemCount = 0;

    const filteredChildren = Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        if (child.type === CommandEmpty) {
            return null;
        }

        if (child.type === CommandGroup) {
            const groupChildren = Children.toArray(
                (child.props as { children?: React.ReactNode }).children
            ) as React.ReactElement[];

            const filteredGroupItems = groupChildren.filter((item) => {
                if (isValidElement(item) && item.type === CommandItem) {
                    const itemValue = (item.props as CommandItemProps).value;
                    const isMatch = itemValue
                        .toLowerCase()
                        .includes(searchValue.toLowerCase().trim());
                    if (isMatch) totalItemCount++;
                    return isMatch;
                }
                return item.type === CommandSeparator;
            });

            if (filteredGroupItems.length > 0) {
                return cloneElement(
                    child as React.ReactElement<CommandGroupProps>,
                    {
                        children: filteredGroupItems,
                    }
                );
            }
            return null;
        }

        if (child.type === CommandSeparator) {
            return child;
        }

        return null;
    });

    const emptyComponent = Children.toArray(children).find(
        (child) => isValidElement(child) && child.type === CommandEmpty
    );

    return (
        <div
            ref={ref}
            className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
            {...props}
        >
            {totalItemCount > 0 ? filteredChildren : emptyComponent}
        </div>
    );
});
CommandList.displayName = "CommandList";

export { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandSeparator, CommandShortcut, CommandList }