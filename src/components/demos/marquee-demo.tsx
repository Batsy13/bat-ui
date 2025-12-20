import { Marquee } from "@/components/ui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Component,
  Moon,
  Zap,
  Shield,
  Smartphone,
  Layout,
  Type,
  Palette,
} from "lucide-react";

const features = [
  {
    title: "Components",
    description: "40+ native components",
    icon: Component,
  },
  {
    title: "Dark Mode",
    description: "First-class dark mode",
    icon: Moon,
  },
  {
    title: "Fast",
    description: "Built on Vite & React",
    icon: Zap,
  },
  {
    title: "Type Safe",
    description: "Written in TypeScript",
    icon: Shield,
  },
  {
    title: "Responsive",
    description: "Mobile-first design",
    icon: Smartphone,
  },
  {
    title: "Layouts",
    description: "Flexible grid & flex",
    icon: Layout,
  },
  {
    title: "Typography",
    description: "Beautiful clean fonts",
    icon: Type,
  },
  {
    title: "Theming",
    description: "Easy customization",
    icon: Palette,
  },
];

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <Card className="w-64 cursor-pointer hover:bg-zinc-900 border-zinc-800 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
          <Icon className="h-6 w-6 text-red-500" />
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
