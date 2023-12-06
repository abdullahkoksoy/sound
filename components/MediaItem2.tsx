"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
  const imageUrl = useLoadImage(data);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClick = () => {
    if (onClick) {
        return onClick(data.id);
    }

    // TODO : Default turn on Player
  }
  return ( 
    <div
      onClick={handleClick}
      className={`
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-slate-950/80 
        ${isMobile ? 'w-64' : 'w-80'}
        p-2 
        rounded-l-2xl
        rounded-r-2xl
      `}
    >
      <div 
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start w-full z-0">
        <p className="flex-1 text-white truncate">
          {data.title}
        </p>
        <p className="flex-1 text-neutral-400 text-sm truncate">
          {data.author}
        </p>
      </div>
    </div>
  );
}

export default MediaItem