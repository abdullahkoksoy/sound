import React from 'react'
import { Song } from "@/types"
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const Download2 = (song: Song) => {
    const supabaseclient = useSupabaseClient();

    if (!song) {
        return '';
      }
    
    const { data: songData } = supabaseclient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path, {download: true,})
  
    return songData.publicUrl
    
}

export default Download2