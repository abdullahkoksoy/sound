import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import getSongs from "./getSongs";

const getSongsByTitle = async (title:string, sanatci: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title && !sanatci) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const queryTitle = supabase
  .from('songs')
  .select('*')
  .ilike('title', `%${title}%`)
  .order('created_at', {ascending: false });

  const querySanatci = supabase
  .from('songs')
  .select('*')
  .ilike('sanatci', `%${sanatci}%`)
  .order('created_at', {ascending: false });

  const { data: dataTitle, error: errorTitle } = await queryTitle;
  const { data: dataSanatci, error: errorSanatci } = await querySanatci;

  if (errorTitle || errorSanatci) {
  console.log(errorTitle || errorSanatci);
  }

  const combinedData = [...(dataTitle || []), ...(dataSanatci || [])];

  return combinedData;
}
export default getSongsByTitle