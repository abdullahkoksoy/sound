"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import { useMediaQuery } from "react-responsive";

interface LikedContentProps {
  songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full px-6 
          text-neutral-400
          ml-6
        "
      >
        No liked songs.
      </div>
    )
  }

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return ( 
    <div className={`flex flex-col gap-y-2 pl-6 mt-14 ${ isMobile ? 'pt-0' : 'pt-6' }`}>
      {songs.map((song: any) => (
        <div 
          key={song.id} 
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
 
export default LikedContent;