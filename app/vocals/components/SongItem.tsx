"use client";

import getSongs from "@/actions/getSongs";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import PlayButton from "@/components/PlayButton";
import useLoadImage2 from "@/hooks/useLoadImage2";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void 
};

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
  const imagePath = useLoadImage(data);
  
  

  return (
  <div>
    <div
      className="
        h-24
        relative
        group
        flex
        flex-row
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-slate-400/10
        cursor-pointer
        hover:shadow-lg
        hover:shadow-emerald-600
        transition
        p-3
      "
    >
      <div 
        className="
          relative
          aspect-square
          w-24
          h-full
          rounded-md
          overflow-hidden
        "
      >
        <Image 
          className="object-cover"
          src={imagePath || '/images/liked.png'}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {data.title}
        </p>
        <p 
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {data.author}
        </p>
      </div>
      <div onClick={() => onClick(data.id)} className="
        absolute
        bottom-6
        right-20
      ">
        <PlayButton />
      </div>
      <div  className="
        absolute
        bottom-6
        right-5
      ">
        
      </div>
    </div>
  </div>  
  )
}

export default SongItem