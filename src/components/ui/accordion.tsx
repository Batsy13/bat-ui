import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { useState, createContext, useContext, ReactNode } from "react";

type AccordionProps = {
    children: ReactNode;
    defaultOpenValues?: string[];
    className?: string;
};

type AccordionItemProps = {
    children: ReactNode;
    value: string;
    className?: string;
};

type AccordionTriggerProps = {
    children: ReactNode;
    value: string;
    className?: string;
};

type AccordionContentProps = {
    children: ReactNode;
    value: string;
    className?: string;
};

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "AccordionTrigger and AccordionContent must be used within an Accordion"
    );
  }
  return context;
};

const Accordion = ({
  children,
  defaultOpenValues,
  className,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenValues ?? []);

  const toggleItem = (value: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(value)
        ? prevOpenItems.filter((item) => item !== value)
        : [...prevOpenItems, value]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <div data-accordion-item-value={value} className={className}>
      {children}
      <hr className="text-border my-2" />
    </div>
  );
};

const AccordionTrigger = ({
  children,
  value,
  className,
}: AccordionTriggerProps) => {
  const { openItems, toggleItem } = useAccordionContext();
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = openItems.includes(value);

  const handleToggle = () => {
    toggleItem(value);
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
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        "transition-all ease-in-out duration-300 overflow-hidden text-[#BEBEBE]",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };