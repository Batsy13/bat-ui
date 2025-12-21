import { ChevronDown, ChevronRight, FileIcon as FileIconLucide, Folder as FolderIconLucide, FolderOpen } from "lucide-react";
import React, { createContext, useContext, useState } from "react";

import { cn } from "@/lib/utils";

const TreeContext = createContext<{
  expandedItems: string[];
  setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

function useTree() {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a Tree");
  }
  return context;
}

interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  initialExpanded?: string[];
  initialSelected?: string;
}

const FileTree = React.forwardRef<HTMLDivElement, TreeProps>(
  ({ className, children, initialExpanded = [], initialSelected = null, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(initialExpanded);
    const [selectedItem, setSelectedItem] = useState<string | null>(initialSelected);

    return (
      <TreeContext.Provider value={{ expandedItems, setExpandedItems, selectedItem, setSelectedItem }}>
        <div ref={ref} className={cn("p-2", className)} {...props}>
          {children}
        </div>
      </TreeContext.Provider>
    );
  }
);
FileTree.displayName = "FileTree";

interface FolderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  name: string;
}

const Folder = React.forwardRef<HTMLDivElement, FolderProps>(
  ({ className, value, name, children, ...props }, ref) => {
    const { expandedItems, setExpandedItems } = useTree();
    const isExpanded = expandedItems.includes(value);

    const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isExpanded) {
        setExpandedItems((prev) => prev.filter((item) => item !== value));
      } else {
        setExpandedItems((prev) => [...prev, value]);
      }
    };

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <div
          className={cn(
            "flex w-full items-center gap-1 rounded-sm px-2 py-1 hover:bg-zinc-800 cursor-pointer text-sm select-none",
          )}
          onClick={handleToggle}
        >
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-zinc-500" />
          ) : (
            <ChevronRight className="h-4 w-4 text-zinc-500" />
          )}
          {isExpanded ? (
            <FolderOpen className="h-4 w-4 text-red-400" />
          ) : (
            <FolderIconLucide className="h-4 w-4 text-red-400" />
          )}
          <span className="ml-1 text-zinc-200">{name}</span>
        </div>
        {isExpanded && <div className="ml-4 border-l border-zinc-800 pl-2">{children}</div>}
      </div>
    );
  }
);
Folder.displayName = "Folder";

interface FileProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  name: string;
}

const File = React.forwardRef<HTMLDivElement, FileProps>(
  ({ className, value, name, ...props }, ref) => {
    const { selectedItem, setSelectedItem } = useTree();
    const isSelected = selectedItem === value;

    const handleSelect = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedItem(value);
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-sm px-2 py-1 text-sm cursor-pointer select-none",
          isSelected ? "bg-zinc-800 text-zinc-50" : "hover:bg-zinc-800/50 text-zinc-400",
          className
        )}
        onClick={handleSelect}
        {...props}
      >
        <FileIconLucide className="h-4 w-4 ml-6" />
        <span>{name}</span>
      </div>
    );
  }
);
File.displayName = "File";

export { FileTree, Folder, File };
