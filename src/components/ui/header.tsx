import { Link } from "react-router"

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-3">
            <div>
                <nav className="flex items-center gap-6 text-[#ffffff]">
                    <img className="size-[32px]" src="/bat icon.png" alt="bat icon"></img>
                    <Link className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" to="/docs">Docs</Link>
                    <Link className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" to="/docs/components">Components</Link>
                    <Link className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" to="/examples">Examples</Link>
                    <Link className="px-4 py-1 bg-transparent hover:bg-[#242424] rounded-[5px] cursor-pointer" to="/themes">Themes</Link>
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