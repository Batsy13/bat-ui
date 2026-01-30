import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router";

const features = [
    {
        title: "Modern Design",
        description: "Crafted with a focus on aesthetics and user experience.",
    },
    {
        title: "Responsive",
        description: "Looks great on any device, from mobile to desktop.",
    },
    {
        title: "Customizable",
        description: "Built with Tailwind CSS for easy customization.",
    },
];

const technologies = [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Vite",
];

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-svh bg-background text-foreground flex flex-col">
            <section className="flex flex-col items-center justify-center py-32 text-center gap-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Badge variant="secondary" className="px-4 py-1 text-sm text-white">
                    v1.0 Released
                </Badge>
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-white">
                        My personal UI library
                    </h1>
                    <p className="text-xl text-description max-w-2xl mx-auto">
                        A comprehensive library of components designed to help you study and build modern web applications with speed and style.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Button size="lg" className="h-12 px-8 text-base text-white" onClick={() => navigate("/docs/components")}>
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base text-white" onClick={() => window.open("https://github.com/Batsy13/bat-ui", "_blank")}>
                        Github
                    </Button>
                </div>
            </section>

            <section className="py-12 border-y bg-border/20">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="mx-8 font-semibold text-xl text-description/80 flex items-center gap-2"
                        >
                            <span>{tech}</span>
                        </div>
                    ))}
                </Marquee>
            </section>

            <section className="container mx-auto py-24 px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-card/50 backdrop-blur-sm border-white/10">
                            <CardHeader>
                                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="container mx-auto pb-24 px-6 md:px-12">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            Component Showcase
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Explore some of the powerful components available in Bat UI.
                        </p>
                    </div>

                    <Tabs defaultValue="calendar" className="w-full max-w-4xl flex flex-col items-center">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="calendar">Calendar</TabsTrigger>
                            <TabsTrigger value="cards">Cards</TabsTrigger>
                            <TabsTrigger value="buttons">Buttons</TabsTrigger>
                        </TabsList>

                        <div className="w-full min-h-[400px] bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex items-center justify-center">
                            <TabsContent value="calendar" className="mt-0">
                                <div className="p-4 border border-zinc-800 rounded-lg bg-black">
                                    <Calendar mode="single" className="rounded-md border-0" />
                                </div>
                            </TabsContent>

                            <TabsContent value="cards" className="mt-0 w-full max-w-md">
                                <Card className="w-full border-zinc-800 bg-black">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                                                <span className="text-xl">🦇</span>
                                            </div>
                                            <div>
                                                <CardTitle>Notifications</CardTitle>
                                                <CardDescription>You have 3 unread messages.</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <div className="px-6 pb-6 pt-2 space-y-4">
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-white">Project Update</p>
                                                <p className="text-xs text-zinc-500">2 hours ago</p>
                                            </div>
                                            <Badge>New</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-white">Meeting Reminder</p>
                                                <p className="text-xs text-zinc-500">5 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            <Button className="w-full text-white">Mark all as read</Button>
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>

                            <TabsContent value="buttons" className="mt-0">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                                    <Button className="text-white">Default Button</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline" className="text-white">Outline</Button>
                                    <Button variant="ghost" className="text-white">Ghost</Button>
                                    <Button variant="link" className="text-white">Link Button</Button>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};
