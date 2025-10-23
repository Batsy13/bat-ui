import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { cn } from "../../lib/utils";

interface CollapsibleContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible");
  }
  return context;
};

const Collapsible = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <CollapsibleContext.Provider value={value}>
      <div className="w-full">{children}</div>
    </CollapsibleContext.Provider>
  );
}

const CollapsibleTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useCollapsible();
  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(className)}
      aria-expanded={isOpen}
    >
      {children}
    </button>
  );
}

const CollapsibleContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen } = useCollapsible();

  return (
    <div hidden={!isOpen} className={cn(className)}>
      {children}
    </div>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }