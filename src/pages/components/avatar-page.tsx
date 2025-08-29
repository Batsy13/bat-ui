import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";
import { Avatar } from "../../components/ui/avatar";

export default function AvatarPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Avatar</h1>
                <p className="text-description">An Image element with fallack for the username</p>
            </div>

            <PreviewCode
                preview={
                    <div className="flex items-center gap-2">
                        <Avatar name="Ren Amamiya" img="https://i.redd.it/unicurnujpqc1.jpeg"/>
                        <Avatar name="Ren Amamiya" img="link aleatorio que nao funfa"/>
                        <Avatar name="Ren Amamiya" img="https://www.denofgeek.com/wp-content/uploads/2020/03/neil-gaiman-the-sandman.jpg?resize=400%2C400"/>
                    </div>
                }
                code={`import { Avatar } from "@/components/ui/avatar";

    export function AvatarDemo() {
        return (
            <div className="flex items-center gap-2">
                <Avatar name="Ren Amamiya" img="https://i.redd.it/unicurnujpqc1.jpeg"/>
                <Avatar name="Ren Amamiya" img="link aleatorio que nao funfa"/>
                <Avatar name="Sandman" img="https://www.denofgeek.com/wp-content/uploads/2020/03/neil-gaiman-the-sandman.jpg?resize=400%2C400"/>
            </div>
        )
    }
                    `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal type="bash" code={"avatar"} library="shadcn@latest" />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import { Avatar } from "@/components/ui/avatar";`}
                />
                <Terminal
                    type="code"
                    code={`<Avatar name="FallBack Name" img="imageURL"/>`}
                />
            </div>
        </div>
    );
}
