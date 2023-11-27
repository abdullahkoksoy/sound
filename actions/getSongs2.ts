import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export enum SongColumn {
  Vokal = 'vokal',
  Tur = 'tur',
  Song_path = 'song_path',
  Title = 'title',
  Key = 'key',
  Sanatci = 'sanatci',
  BPM = 'BPM',
  Lisans = 'lisans',
  // Diğer sütunlar
}

export const getSongs2 = async (filterColumn: SongColumn, filterValue: any): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from('songs')
    .select()
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  // Veriyi belirli bir sütuna göre filtreleme
  const filteredData = data.filter((song: Song) => {
    return song[filterColumn] === filterValue;
  });

  return filteredData || [];
};
