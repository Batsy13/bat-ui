import { useEffect, useState } from "react";

type AvatarProps = {
  name: string;
  img?: string;
};

function getInitials(name: string) {
  name = name.trim();

  if (name.length <= 3) return name;

  return name
    .split(/\s+/)
    .map((w) => [...w][0])
    .splice(0, 3)
    .join("");
}

const Avatar = ({ name, img }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const fallbackName = getInitials(name);

  useEffect(() => {
    setImageError(false);
  }, [img]);

  const showImage = img && !imageError;

  return (
    <div className="flex items-center justify-center rounded-full size-12 overflow-hidden bg-secondary flex-none">
      {showImage ? (
        <img
          src={img}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        fallbackName
      )}
    </div>
  );
};

export { Avatar };
