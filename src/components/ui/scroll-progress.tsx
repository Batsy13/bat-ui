import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  containerRef?: React.RefObject<HTMLElement | null>;
}

const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, containerRef, ...props }, ref) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        let scrollTop = 0;
        let scrollHeight = 0;
        let clientHeight = 0;

        if (containerRef && containerRef.current) {
          scrollTop = containerRef.current.scrollTop;
          scrollHeight = containerRef.current.scrollHeight;
          clientHeight = containerRef.current.clientHeight;
        } else {
          scrollTop = window.scrollY;
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        }

        const totalScroll = scrollHeight - clientHeight;
        const currentProgress = totalScroll === 0 ? 0 : (scrollTop / totalScroll) * 100;

        setProgress(currentProgress);
      };

      const target = containerRef?.current || window;
      target.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        target.removeEventListener("scroll", handleScroll);
      };
    }, [containerRef]);

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-0 left-0 z-50 h-1 bg-red-500 transition-all duration-100 ease-out",
          className
        )}
        style={{ width: `${progress}%` }}
        {...props}
      />
    );
  }
);
ScrollProgress.displayName = "ScrollProgress";

export { ScrollProgress };
