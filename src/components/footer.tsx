import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center text-center w-full py-12 text-[#BEBEBE]">
            <div>
                Built by{" "}
                <Link
                    to="https://github.com/Batsy13"
                    className="font-bold hover:text-red-500"
                    target="_blank"
                >
                    {" "}
                    @Batsy
                </Link>
                . Only for studies.
            </div>
        </footer>
    );
};

export { Footer }