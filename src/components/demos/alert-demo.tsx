import { CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertContent, AlertHeader, AlertTitle, AlertDescription, AlertFooter } from "@/components/ui/alert";

export const AlertDemo = () => {
  return (
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
  );
};
