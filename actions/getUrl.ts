import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Song } from "@/types";

const getUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  }

  const { data: songData } = supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(song.song_path, {download:true});

  return songData.publicUrl;
  
};



export default getUrl;  