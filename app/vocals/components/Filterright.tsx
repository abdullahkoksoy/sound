"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import VokalFilterButton from "@/components/VokalFilterButton";
import useOnPlay from "@/hooks/useOnPlay";


interface FilterrightProps {
  songs: Song[];
}

const Filterright: React.FC<FilterrightProps> = ({ songs }) => {
  const [vokalFilter, setVokalFilter] = useState("all");
  const [licenseFilter, setLicenseFilter] = useState("all");
  const [artistFilter, setArtistFilter] = useState<string[]>([]);
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [keyFilter, setKeyFilter] = useState<string[]>([]);
  const [bpmFilter, setBPMFilter] = useState<string[]>([]);
  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false);
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
  const [isKeyMenuOpen, setIsKeyMenuOpen] = useState(false);
  const [isBPMMenuOpen, setIsBPMMenuOpen] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState(songs); // Initialize with all songs
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  // Define the artistOptions array here
  const artistOptions = [
    "tarkan",
    "yalın",
    "ebru gündeş",
    "sefo",
    "hadise",
    "koray avcı",
    "keremcem",
    "rihanna",
    "murat boz",
    "antonio",
  ];

  const genreOptions = [
    "House",
    "Deep House",
    "Chill House",
    "Tech House",
    "Slap House",
    "Trap",
    "Pop",
    "EDM",
  ];

  const keyOptions = [
    "Bmin",
    "Bmaj",
    "Cmin",
    "Cmaj",
    "C#min",
    "C#maj",
    "Dmin",
    "Dmaj",
    "D#min",
    "D#maj",
    "Amin",
    "Amaj",
    "A#min",
    "A#maj",
    "Gmin",
    "Gmaj",
    "G#min",
    "G#maj",
    "Fmin",
    "Fmaj",
    "F#min",
    "F#maj",
    "Emin",
    "Emaj",
  ];

  const bpmOptions = [
    "1-60",
    "61-80",
    "81-100",
    "101-120",
    "121-140",
    "141-160",
    "161-180",
    "181-200",
    "200+",
  ];

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const applyFilters = () => {
    // Apply the filters to the initial songs data
    const filtered = songs.filter((song) => {
      const matchesVokalFilter =
        vokalFilter === "all" || song.vokal === vokalFilter;
      const matchesLicenseFilter =
        licenseFilter === "all" || song.lisans === licenseFilter;
      const matchesArtistFilter =
        artistFilter.length === 0 || artistFilter.includes(song.sanatci);
      const matchesGenreFilter =
        genreFilter.length === 0 || genreFilter.includes(song.tur);
      const matchesKeyFilter =
        keyFilter.length === 0 || keyFilter.includes(song.key);
      const matchesBPMFilter =
        bpmFilter.length === 0 || bpmFilter.includes(song.BPM);
      return matchesVokalFilter && matchesLicenseFilter && matchesArtistFilter && matchesGenreFilter && matchesKeyFilter && matchesBPMFilter;
    });

    // Update the filtered songs
    setFilteredSongs(filtered);
    setIsArtistMenuOpen(false);
    setIsGenreMenuOpen(false);
    setIsKeyMenuOpen(false);
    setIsBPMMenuOpen(false);

  };

  const handleArtistSelect = (artist: string) => {
    if (artistFilter.includes(artist)) {
      setArtistFilter(artistFilter.filter((selectedArtist) => selectedArtist !== artist));
    } else {
      setArtistFilter([...artistFilter, artist]);
    }
  };

  const handleGenreSelect = (genre: string) => {
    if (genreFilter.includes(genre)) {
      setGenreFilter(genreFilter.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setGenreFilter([...genreFilter, genre]);
    };
  };

  const handleKeySelect = (key: string) => {
    if (keyFilter.includes(key)) {
      setKeyFilter(keyFilter.filter((selectedKey) => selectedKey !== key));
    } else {
      setKeyFilter([...keyFilter, key]);
    };
  };  

  const handleBPMSelect = (bpm: string) => {
    if (bpmFilter.includes(bpm)) {
      setBPMFilter(bpmFilter.filter((selectedBPM) => selectedBPM !== bpm));
    } else {
      setBPMFilter([...bpmFilter, bpm]);
    };
  };

  return (
    <div>
      {filteredSongs.map((song) => (
      <div key={song.id} className="flex items-center gap-x-4 w-full z-0">
        <div className="flex-1">
          <MediaItem onClick={(id) => onPlay(id)} data={song} />
        </div>
        <VokalFilterButton songId={song.id} />
      </div>
      ))}
    </div>
  )
};

export default Filterright;