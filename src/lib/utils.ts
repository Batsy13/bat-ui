import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes and resolves conflicts.
 * Uses `clsx` for conditional class joining and `tailwind-merge` for merging conflicting Tailwind classes.
 *
 * @param inputs - A list of class names, which can be strings, objects, arrays, or a combination of these.
 * @returns A single string with all the classes merged and deduplicated.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
