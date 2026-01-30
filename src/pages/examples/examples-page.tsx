import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginExample } from "./login-example";
import { DashboardExample } from "./dashboard-example";

export function ExamplesPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Examples</h1>
        <p className="text-muted-foreground text-description">
          Check out some examples of what you can build with Bat UI components.
        </p>
      </div>

      <Tabs defaultValue="login" className="space-y-4">
        <TabsList>
          <TabsTrigger value="login">Login Page</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="min-h-[60vh] h-full flex items-center justify-center border rounded-lg p-6 bg-zinc-950/50">
          <LoginExample />
        </TabsContent>
        <TabsContent value="dashboard" className="min-h-[60vh] h-full border rounded-lg p-1 bg-zinc-950/50">
          <DashboardExample />
        </TabsContent>
      </Tabs>
    </div>
  );
}
