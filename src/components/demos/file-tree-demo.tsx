import { File, FileTree, Folder } from "@/components/ui/file-tree";

export function FileTreeDemo() {
  return (
    <div className="w-full max-w-sm rounded-md border border-zinc-800 bg-zinc-950 p-4">
      <FileTree initialExpanded={["src", "components"]}>
        <Folder value="src" name="src">
          <Folder value="components" name="components">
            <Folder value="ui" name="ui">
              <File value="button.tsx" name="button.tsx" />
              <File value="input.tsx" name="input.tsx" />
              <File value="slider.tsx" name="slider.tsx" />
            </Folder>
            <File value="header.tsx" name="header.tsx" />
            <File value="footer.tsx" name="footer.tsx" />
          </Folder>
          <Folder value="lib" name="lib">
            <File value="utils.ts" name="utils.ts" />
            <File value="components-data.ts" name="components-data.ts" />
          </Folder>
          <File value="main.tsx" name="main.tsx" />
          <File value="App.tsx" name="App.tsx" />
        </Folder>
        <File value="package.json" name="package.json" />
        <File value="README.md" name="README.md" />
        <File value="tsconfig.json" name="tsconfig.json" />
      </FileTree>
    </div>
  );
}
