"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import VokalFilterButton from "@/components/VokalFilterButton";
import useOnPlay from "@/hooks/useOnPlay";
import { useMediaQuery } from "react-responsive";


interface FilteredContentProps {
  songs: Song[];
}

const FilteredContent: React.FC<FilteredContentProps> = ({ songs }) => {
  const [vokalFilter, setVokalFilter] = useState("all");
  const [licenseFilter, setLicenseFilter] = useState("all");
  const [filteredSongs, setFilteredSongs] = useState(songs); // Initialize with all songs
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);


  useEffect(() => {
    
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    applyFilters(); 
  },[vokalFilter, licenseFilter]);

  function applyFilters() {
    // Apply the filters to the initial songs data
    const filtered = songs.filter((song) => {
      const matchesVokalFilter = vokalFilter === "all" || song.vokal === vokalFilter;
      const matchesLicenseFilter = licenseFilter === "all" || song.lisans === licenseFilter;

      return matchesVokalFilter && matchesLicenseFilter;
    });

    // Update the filtered songs
    setFilteredSongs(filtered);

  }

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    
    <div className={`flex flex-col gap-y-2 pl-6 ${ isMobile ? 'pt-0' : 'pt-1' }`}>
      <div className="flex mb-6 mt-12 z-20">
        <div className="mr-4">
          <label htmlFor="vokalSelect"></label>
          <select
            id="vokalSelect"
            value={vokalFilter}
            onChange={(e) => setVokalFilter(e.target.value)}
            className="h-6 bg-slate-800 rounded-lg"
          >
            <option value="all">Vokal</option>
            <option value="Bay">Bay</option>
            <option value="Bayan">Bayan</option>
          </select>
        </div>
        <div className="mr-4">
          <label htmlFor="licenseSelect"></label>
          <select
            id="licenseSelect"
            value={licenseFilter}
            onChange={(e) => setLicenseFilter(e.target.value)}
            className="h-6 bg-slate-800 rounded-lg"
          >
            <option value="all">Lisans</option>
            <option value="Exclusive">Exclusive</option>
            <option value="Limited edition">Limited edition</option>
            <option value="Non-Exclusive">Non-Exclusive</option>
          </select>
        </div>
      </div>
        {filteredSongs.map((song) => (
          <div key={song.id} className="flex items-center gap-x-4 w-full z-0">
            <div className="flex-1">
              <MediaItem onClick={(id) => onPlay(id)} data={song} />
            </div>
            <VokalFilterButton songId={song.id} />
          </div>
        ))}
    </div>
  );
};

export default FilteredContent;

  
  
  