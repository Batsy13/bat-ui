import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface HeroVideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={cn("relative group cursor-pointer overflow-hidden rounded-md", className)}>
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg relative hover:scale-110 transition-transform duration-300">
              <svg width="0" height="0" className="absolute">
                <linearGradient id="play-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop stopColor="#F59E0B" offset="0%" />
                  <stop stopColor="#EF4444" offset="100%" />
                </linearGradient>
              </svg>
              <Play
                className="w-5 h-5 ml-1"
                style={{ fill: "url(#play-gradient)", stroke: "url(#play-gradient)" }}
              />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden border-none text-white aspect-video w-full">
        <iframe
          src={videoSrc}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </DialogContent>
    </Dialog>
  );
}
