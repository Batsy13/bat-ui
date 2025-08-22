import { ReactNode } from "react";

type AccordionProps = {
    children: ReactNode;
    defaultOpen?: string;
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

export type {
    AccordionProps,
    AccordionItemProps,
    AccordionTriggerProps,
    AccordionContentProps,
};
