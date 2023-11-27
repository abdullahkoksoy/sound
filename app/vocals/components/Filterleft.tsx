"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import VokalFilterButton from "@/components/VokalFilterButton";
import useOnPlay from "@/hooks/useOnPlay";


interface FilterleftProps {
  songs: Song[];
}

const Filterleft: React.FC<FilterleftProps> = ({ songs }) => {
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
    
    <div className="flex flex-col gap-y-2 w-full p-6">
      <div className="flex mb-4 z-20">
        <div className="mr-4">
          <label htmlFor="vokalSelect"></label>
          <select
            id="vokalSelect"
            value={vokalFilter}
            onChange={(e) => setVokalFilter(e.target.value)}
            className="h-6 bg-zinc-900"
          >
            <option value="all">Vokal</option>
            <option value="bay">Bay</option>
            <option value="bayan">Bayan</option>
          </select>
        </div>
        <div className="mr-4">
          <label htmlFor="licenseSelect"></label>
          <select
            id="licenseSelect"
            value={licenseFilter}
            onChange={(e) => setLicenseFilter(e.target.value)}
            className="h-6 bg-zinc-900"
          >
            <option value="all">Lisans</option>
            <option value="exclusive">Exclusive</option>
            <option value="non-exclusive">Non-Exclusive</option>
          </select>
        </div>
        <div className="mb-4 z-10 relative">
          <label htmlFor="artistSelect"></label>
          <div className="artist-select z-10">
            <button
              onClick={() => setIsArtistMenuOpen(!isArtistMenuOpen)}
              className="bg-zinc-900 w-28 h-6 text text-left indent-1 font-normal text-base"
            >
              {isArtistMenuOpen ? "\u2715" : "Sanatçı seç \u25bf"}
            </button>
            {isArtistMenuOpen && (
              <ul className="absolute z-20 w-28 bg-zinc-900 rounded-b-xl text-xs">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={artistFilter.length === 0}
                      onChange={() => setArtistFilter([])}
                      className="z-20" 
                    />
                    Tüm Sanatçılar
                  </label>
                </li>
                {artistOptions.map((artist) => (
                  <li key={artist}>
                    <label>
                      <input
                        type="checkbox"
                        checked={artistFilter.includes(artist)}
                        onChange={() => handleArtistSelect(artist)}
                        className="z-20"
                      />
                      {artist}
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2"
                  >
                    <span className="rounded-full bg-blue-600 p-1 pl-3 pr-3 text-xs">Uygula</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex mb-4 z-10">
        <div className="mb-4 z-10 relative">
          <label htmlFor="genreSelect"></label>
          <div className="genre-select z-10">
            <button
              onClick={() => setIsGenreMenuOpen(!isGenreMenuOpen)}
              className="bg-zinc-900 w-24 h-6 text text-left indent-1 font-normal text-base"
            >
              {isGenreMenuOpen ? "\u2715" : "Tür seç \u25bf"}
            </button>
            {isGenreMenuOpen && (
              <ul className="absolute z-10 w-24 bg-zinc-900 rounded-b-xl text-xs">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={genreFilter.length === 0}
                      onChange={() => setGenreFilter([])}
                      className="z-10"
                    />
                    Tüm Türler
                  </label>
                </li>
                {genreOptions.map((genre) => (
                  <li key={genre}>
                    <label>
                      <input
                        type="checkbox"
                        checked={genreFilter.includes(genre)}
                        onChange={() => handleGenreSelect(genre)}
                        className="z-10"
                      />
                      {genre}
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2"
                  >
                    <span className="rounded-full bg-blue-600 p-1 pl-3 pr-3 text-xs">Uygula</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="mb-4 z-10 ml-4 relative">
          <label htmlFor="keySelect"></label>
          <div className="key-select z-10">
            <button
              onClick={() => setIsKeyMenuOpen(!isKeyMenuOpen)}
              className="bg-zinc-900 w-24 h-6 text text-left indent-1 font-normal text-base"
            >
              {isKeyMenuOpen ? "\u2715" : "Key seç \u25bf"}
            </button>
            {isKeyMenuOpen && (
              <ul className="absolute z-10 w-44 bg-zinc-900 rounded-b-xl text-xs flex flex-wrap justify-between">
                <li className="w-1/3">
                  <label>
                    <input
                      type="checkbox"
                      checked={keyFilter.length === 0}
                      onChange={() => setKeyFilter([])}
                      className="z-10"
                    />
                    Tümü
                  </label>
                </li>
                {keyOptions.map((key) => (
                  <li key={key} className="w-1/3">
                    <label>
                      <input
                        type="checkbox"
                        checked={keyFilter.includes(key)}
                        onChange={() => handleKeySelect(key)}
                        className="z-10"
                      />
                      {key}
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2"
                  >
                    <span className="rounded-full bg-blue-600 p-1 pl-3 pr-3 text-xs">Uygula</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="mb-4 z-10 ml-4 relative">
          <label htmlFor="bpmSelect"></label>
          <div className="bpm-select z-10">
            <button
              onClick={() => setIsBPMMenuOpen(!isBPMMenuOpen)}
              className="bg-zinc-900 w-24 h-6 text text-left indent-1 font-normal text-base"
            >
              {isBPMMenuOpen ? "\u2715" : "BPM seç \u25bf"}
            </button>
            {isBPMMenuOpen && (
              <ul className="absolute z-10 w-24 bg-zinc-900 rounded-b-xl text-xs">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={bpmFilter.length === 0}
                      onChange={() => setBPMFilter([])}
                      className="z-10"
                    />
                    Tüm BPM
                  </label>
                </li>
                {bpmOptions.map((bpm) => (
                  <li key={bpm}>
                    <label>
                      <input
                        type="checkbox"
                        checked={bpmFilter.includes(bpm)}
                        onChange={() => handleBPMSelect(bpm)}
                        className="z-10"
                      />
                      {bpm}
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2"
                  >
                    <span className="rounded-full bg-blue-600 p-1 pl-3 pr-3 text-xs">Uygula</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Filterleft;