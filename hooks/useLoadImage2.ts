import { Song } from "@/types";
import { QueryBuilder } from "@mui/icons-material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Query } from "@tanstack/react-query";


const useLoadImage2 = async (song: Song) => {
const supabaseClient = useSupabaseClient();

  if (!song) {
      return null;
  }


  const { data: imageData } = await supabaseClient
    .from('songs')
    .select()
    .eq('vokal', 'bay')
    
  return imageData;
};

export default useLoadImage2