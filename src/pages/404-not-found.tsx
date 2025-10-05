import { Link } from "react-router"

type Page404Props = {
  buttonDescription?: string;
  url?: string;
}

export const Page404 = ({buttonDescription, url}: Page404Props) => {
    return(
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-white bg-background">
            <img src="/bat icon.png" className="size-20"></img>
            <h1>404</h1>
            <h2>Page not found :(</h2>
            <Link to={url || "/"} className="px-4 py-3 bg-primary rounded-xl hover:bg-primary/70">{buttonDescription || "Go back to main page"}</Link>
        </div>
    )
}