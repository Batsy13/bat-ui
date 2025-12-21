import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <HeroVideoDialog
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          thumbnailSrc="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000043147/684bd8b00abcbf6dd122727a27c01a337f667bef825f4f4662efad9854b72fd4"
          thumbnailAlt="Music Video"
        />
      </div>
    </div>
  );
}
