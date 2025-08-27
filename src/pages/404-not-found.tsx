import { Link } from "react-router"

export const Page404 = () => {
    return(
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-white bg-background">
            <img src="/bat icon.png" className="size-20"></img>
            <h1>404</h1>
            <h2>Page not found :(</h2>
            <Link to={"/"} className="px-4 py-3 bg-primary rounded-xl hover:bg-primary/70">Go back to main page</Link>
        </div>
    )
}