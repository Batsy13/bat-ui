import { AspectRatio } from "../ui/aspect-ratio";

export const AspectRatioDemo = () => {
  return (
    <AspectRatio ratio="16/9">
      <div className="w-[600px] h-[350px] bg-linear-to-br from-red-500/30 to-red-500 rounded-xl"></div>
    </AspectRatio>
  );
};
