"use-client";

import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
    songs: Song[]
}

const Libary: React.FC<LibraryProps> = ({
  songs
}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onPlay = useOnPlay(songs);

    const onClick = () => {
      if (!user) {
        return authModal.onOpen();
      }
      // TODO: Check for subcription

      return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
        <div
            className="
                flex
                items-center
                justify-between
                px-5
                pt-4
            "
        >
            <div
                className="
                    inline-flex
                    items-center
                    gap-x-2
                "
            >
                <TbPlaylist className="text-neutral-400" size={26}/>
                <p
                    className="
                        text-neutral-400
                        font-medium
                        text-md
                    "
                >
                    Şarkı Yükle 
                </p>
            </div>
            <AiOutlinePlus 
                onClick={onClick}
                size={20}
                className="
                    text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                    ml-2
                "
            />
        </div>
    </div>
  );
}

export default Libary