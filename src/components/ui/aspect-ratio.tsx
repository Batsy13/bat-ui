import { ReactNode } from "react"
import { cn } from "../../lib/utils";

type AspectRatioProps = {
    ratio: `${number}/${number}`;
    children: ReactNode;
    className?: string;
}

const AspectRatio = ({ ratio, children, className }: AspectRatioProps) => {
    return (
        <div
            style={{ '--aspect-ratio': ratio } as React.CSSProperties}
            className={cn('aspect-[var(--aspect-ratio)]', className)}
        >
            {children}
        </div>
    )
}

export { AspectRatio }