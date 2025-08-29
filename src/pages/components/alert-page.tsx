import { AlertCircle, CheckCircle2 } from "lucide-react";
import {
    Alert,
    AlertContent,
    AlertDescription,
    AlertFooter,
    AlertHeader,
    AlertTitle,
} from "../../components/ui/alert";
import { PreviewCode } from "../../components/ui/preview-code";
import { Terminal } from "../../components/ui/terminal";

export default function AlertPage() {
    return (
        <div className="flex flex-col w-full max-w-2xl gap-12 mx-auto text-white md:px-0 lg:py-14">
            <div className="flex flex-col gap-2">
                <h1>Alert</h1>
                <p className="text-description">
                    A non-disruptive message box used to provide feedback to the
                    user
                </p>
            </div>

            <PreviewCode
                preview={
                    <div className="flex flex-col w-full gap-6">
                        <Alert>
                            <AlertContent>
                                <AlertHeader>
                                    <AlertTitle>
                                        <CheckCircle2 />
                                        Your changes have been saved
                                    </AlertTitle>
                                    <AlertDescription className="ml-8">
                                        Poggers description
                                    </AlertDescription>
                                </AlertHeader>
                            </AlertContent>
                        </Alert>
                        <Alert variant="destructive">
                            <AlertContent>
                                <AlertHeader>
                                    <AlertTitle>
                                        <AlertCircle />
                                        An error has been occured!
                                    </AlertTitle>
                                </AlertHeader>
                            </AlertContent>
                        </Alert>
                        
                        <Alert variant="destructive">
                            <AlertContent>
                                <AlertHeader>
                                    <AlertTitle>
                                        <AlertCircle />
                                        An error has been occured!
                                    </AlertTitle>
                                </AlertHeader>
                                <AlertFooter className="ml-8 text-destructive/65">
                                    <p>Please verify your credentials</p>
                                    <ul className="ml-4 list-disc">
                                        <li>Email</li>
                                        <li>Password</li>
                                        <li>Name / user</li>
                                    </ul>
                                </AlertFooter>
                            </AlertContent>
                        </Alert>
                    </div>
                }
                code={`import {
    Alert,
    AlertContent,
    AlertDescription,
    AlertFooter,
    AlertHeader,
    AlertTitle,
} from "@/components/ui/alert;

export function AlertDemo() {

    <div className="flex flex-col w-full gap-6">
        <Alert>
            <AlertContent>
                <AlertHeader>
                    <AlertTitle>
                        <CheckCircle2 />
                        Your changes have been saved
                    </AlertTitle>
                    <AlertDescription className="ml-8">
                        Poggers description
                    </AlertDescription>
                </AlertHeader>
            </AlertContent>
        </Alert>
        <Alert variant="destructive">
            <AlertContent>
                <AlertHeader>
                    <AlertTitle>
                        <AlertCircle />
                        An error has been occured!
                    </AlertTitle>
                </AlertHeader>
            </AlertContent>
        </Alert>     
        <Alert variant="destructive">
            <AlertContent>
                <AlertHeader>
                    <AlertTitle>
                        <AlertCircle />
                        An error has been occured!
                    </AlertTitle>
                </AlertHeader>
                <AlertFooter className="ml-8 text-destructive/65">
                    <p>Please verify your credentials</p>
                    <ul className="ml-4 list-disc">
                        <li>Email</li>
                        <li>Password</li>
                        <li>Name / user</li>
                    </ul>
                </AlertFooter>
            </AlertContent>
        </Alert>
    </div>
};
                    `}
            />

            <div className="flex flex-col gap-2">
                <h2>Installing</h2>
                <Terminal
                    type="bash"
                    code={"alert"}
                    library="shadcn@latest"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2>Usage</h2>
                <Terminal
                    type="code"
                    code={`import {
    Alert,
    AlertContent,
    AlertDescription,
    AlertFooter,
    AlertHeader,
    AlertTitle,
} from "@/components/ui/alert;`}
                />
                <Terminal
                    type="code"
                    code={`<Alert variant="default | destructive">
  <AlertTitle>Alert!</AlertTitle>
  <AlertDescription>
    This is an example of an Alert
  </AlertDescription>
</Alert>`}
                />
            </div>
        </div>
    );
}
