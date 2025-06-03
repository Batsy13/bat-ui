export const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-3">
            <div>
                <nav className="flex items-center gap-6 text-[#ffffff]">
                    <div className="size-[32px] bg-red-500 rounded-[5px]"></div>
                    <a className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" href="/docs">Docs</a>
                    <a className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" href="/docs/components">Components</a>
                    <a className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" href="/examples">Examples</a>
                    <a className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" href="/themes">Themes</a>
                </nav>
            </div>
            <div className="flex gap-4">
                <div className="size-[20px] bg-red-500 rounded-[5px]"></div>
                <hr className="bg-[#363636] h-[20px] w-[1px]"/>
                <div className="size-[20px] bg-red-500 rounded-[5px]"></div>
            </div>
        </header>
    )
}