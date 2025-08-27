import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import useAccordionStore from "../../store/accordion-store";
import {
    AccordionProps,
    AccordionItemProps,
    AccordionTriggerProps,
    AccordionContentProps,
} from "../../types/accordion";
import { useState } from "react";

const Accordion = ({ children, defaultOpen, className }: AccordionProps) => {
    useAccordionStore.setState({ openItem: defaultOpen ?? null });

    return <div className={cn("flex flex-col", className)}>{children}</div>;
};

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
    return (
        <div data-accordion-item-value={value} className={className}>
            {children}
            <hr className="text-[#262626] my-2" />
        </div>
    );
};

const AccordionTrigger = ({
    children,
    value,
    className,
}: AccordionTriggerProps) => {
    const { openItem, setOpenItem } = useAccordionStore();
    const [isHovered, setIsHovered] = useState(false);
    const isOpen = openItem === value;

    const handleToggle = () => {
        setOpenItem(isOpen ? null : value);
    };

    return (
        <button
            onClick={handleToggle}
            className={cn(
                "flex justify-between w-full hover:underline py-2",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}

            <ChevronDown
                className={cn(
                    "ease-in-out transition-all duration-300",
                    isHovered ? "text-white" : "text-[#838383]",
                    isOpen ? "rotate-180 text-white" : ""
                )}
            />
        </button>
    );
};

const AccordionContent = ({
    children,
    value,
    className,
}: AccordionContentProps) => {
    const { openItem } = useAccordionStore();
    const isOpen = openItem === value;

    return (
        <div
            className={cn(
                "transition-all ease-in-out duration-300 overflow-hidden text-[#BEBEBE]",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 ",
                className
            )}
        >
            {children}
        </div>
    );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
