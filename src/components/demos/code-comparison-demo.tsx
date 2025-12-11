import { CodeComparison } from "@/components/ui/code-comparison";

const beforeCode = `function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}`;

const afterCode = `function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-900"
  };

  return (
    <button 
      className={\`rounded px-4 py-2 \${styles[variant]}\`} 
      {...props}
    >
      {children}
    </button>
  )
}`;

export function CodeComparisonDemo() {
  return (
    <div className="w-full max-w-2xl">
      <CodeComparison
        beforeCode={beforeCode}
        afterCode={afterCode}
        language="tsx"
        filename="button.tsx"
      />
    </div>
  );
}
