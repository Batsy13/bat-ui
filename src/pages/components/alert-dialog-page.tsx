import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function AlertDialogPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Alert Dialog</h1>
                <p className="text-description">
                    A collapsible content container that allows users to show or
                    hide sections of information.
                </p>
            </div>

            <PreviewCode
                preview={
                    <>
                        <AlertDialogTrigger className="text-white bg-red-500 cursor-pointer hover:bg-red-600">
                            Delete Account
                        </AlertDialogTrigger>

                        <AlertDialog>
                            <AlertDialogContent>
                                <AlertDialogHeader
                                    title="Are you Sure?"
                                    description="This action cannot be undone. This will exclude all your data."
                                />
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancelar
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continuar
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </>
                }
                code={`import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {

    <AlertDialogTrigger className="text-white bg-red-500 cursor-pointer hover:bg-red-600">
        Delete Account
    </AlertDialogTrigger>

    <AlertDialog>
        <AlertDialogContent>
            <AlertDialogHeader
                title="Are you Sure?"
                description="This action cannot be undone. This will exclude all your data."
            />
            <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Continuar</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
};
                    `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal
                    type="bash"
                    code={"alert-dialog"}
                    library="shadcn@latest"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";`}
                />
                <Terminal
                    type="code"
                    code={`<AlertDialogTrigger className="text-white bg-red-500 cursor-pointer hover:bg-red-600">
    Delete Account
</AlertDialogTrigger>

<AlertDialog>
    <AlertDialogContent>
        <AlertDialogHeader
            title="Are you Sure?"
            description="This action cannot be undone. This will exclude all your data."
        />
        <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
</AlertDialog>`}
                />
            </div>
        </div>
    );
}
