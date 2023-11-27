import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";

import SearchContent from "./components/SearchContent";

export const revalidate = 0;



interface SearchProps {
  searchParams: { title: string, sanatci: string }
  
};

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title, searchParams.sanatci);


  return (
    <div 
      className="
        bg-slate-950 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6 ml-6">
          <h1 className="text-white text-3xl font-semibold">
            Ara
          </h1>
          <div className="w-1/2">
            <SearchInput />
          </div>
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}

export default Search;
