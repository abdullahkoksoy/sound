"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import VokalFilterButton from "@/components/VokalFilterButton";
import useOnPlay from "@/hooks/useOnPlay";
import { FiDownload } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


interface FilteredContentProps {
  songs: Song[];
  songUrl: string;
}

const FilteredContent: React.FC<FilteredContentProps> = ({ songs, songUrl }) => {
  const [vokalFilter, setVokalFilter] = useState<string[]>([]);
  const [artistFilter, setArtistFilter] = useState<string[]>([]);
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [keyFilter, setKeyFilter] = useState<string[]>([]);
  const [bpmFilter, setBPMFilter] = useState<string[]>([]);
  const [licenseFilter, setLicenseFilter] = useState<string[]>([]);
  const [isArtistMenuOpen, setIsArtistMenuOpen] = useState(false);
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
  const [isKeyMenuOpen, setIsKeyMenuOpen] = useState(false);
  const [isBPMMenuOpen, setIsBPMMenuOpen] = useState(false);
  const [isLicenseMenuOpen, setIsLicenseMenuOpen] = useState(false);
  const [isVokalMenuOpen, setIsVokalMenuOpen] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState(songs); // Initialize with all songs
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Define the artistOptions array here
  const artistOptions = [
    "Tarkan",
    "Yalın",
    "Ebru Gündeş",
    "Sefo",
    "Hadise",
    "Koray avcı",
    "Keremcem",
    "Rihanna",
    "Murat boz",
    "Antonio",
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

  const licenseOptions = [
    "Exclusive",
    "Non-Exclusive",
    "Limited edition"
  ];

  const vokalOptions = [
    "Bay",
    "Bayan",
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
        vokalFilter.length === 0 || vokalFilter.includes(song.vokal);
      const matchesLicenseFilter =
        licenseFilter.length === 0 || licenseFilter.includes(song.lisans);
      const matchesArtistFilter =
        artistFilter.length === 0 || artistFilter.includes(song.sanatci);
      const matchesGenreFilter =
        genreFilter.length === 0 || genreFilter.includes(song.tur);
      const matchesKeyFilter =
        keyFilter.length === 0 || keyFilter.includes(song.key);
      const matchesBPMFilter =
        bpmFilter.length === 0 || bpmFilter.includes(song.BPM);

      return matchesVokalFilter && matchesLicenseFilter && matchesArtistFilter && matchesGenreFilter && matchesKeyFilter && matchesBPMFilter && matchesLicenseFilter && matchesVokalFilter;
    });

    // Update the filtered songs
    setFilteredSongs(filtered);
    setIsArtistMenuOpen(false);
    setIsGenreMenuOpen(false);
    setIsKeyMenuOpen(false);
    setIsBPMMenuOpen(false);
    setIsLicenseMenuOpen(false);
    setIsVokalMenuOpen(false);

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

  const handleLicenseSelect = (license: string) => {
    if (licenseFilter.includes(license)) {
      setLicenseFilter(licenseFilter.filter((selectedLicense) => selectedLicense !== license));
    } else {
      setLicenseFilter([...licenseFilter, license]);
    };
  };

  const handleVokalSelect = (vokal: string) => {
    if (vokalFilter.includes(vokal)) {
      setVokalFilter(vokalFilter.filter((selectedVokal) => selectedVokal !== vokal));
    } else {
      setVokalFilter([...vokalFilter, vokal]);
    };
  };

  const downloadFileAtURL= (url: any) =>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute("download",fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  
  };

  return (
    
    <div className="flex flex-row w-full">
      <div className={`${isMobile && !isSidebarOpen ? 'w-0' : 'w-1/5'} ${isMobile && isSidebarOpen ? 'w-80 h-full fixed top-0 left-0 right-0 z-50 bg-rose-900' : ''}`}>
      {isMobile && isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="bg-rose-900 text-2xl rounded-md w-8 text-white p-2 mt-10 ml-64"
        >
          <IoMdClose />
        </button>
      )}
        <div className="mb-4 z-20">
          <label htmlFor="vokalSelect"></label>
          <div className="vokal-select z-10 mt-10">
            
            <button
              onClick={() => setIsVokalMenuOpen(!isVokalMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center justify-between">
                {isVokalMenuOpen ? null : "Vokal"}
                {!isVokalMenuOpen ? <FaChevronDown className="ml-40 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isVokalMenuOpen && (
              <ul className={`z-20 rounded-b-xl text-xs ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={vokalFilter.length === 0}
                      onChange={() => setVokalFilter([])}
                      className="z-20 mb-5 ml-6 mt-5" 
                    />
                    <span className="ml-3 font-semibold text-sm">Tüm Vokaller</span> 
                  </label>
                </li>
                {vokalOptions.map((vokal) => (
                  <li key={vokal}>
                    <label>
                      <input
                        type="checkbox"
                        checked={vokalFilter.includes(vokal)}
                        onChange={() => handleVokalSelect(vokal)}
                        className="z-20 mb-5 ml-6 mt-2"
                      />
                      <span className="ml-3 font-semibold text-sm">{vokal}</span>
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={`mb-4 z-20 divide-y ${ isMobile ? 'divide-rose-700' : 'divide-slate-700'}`}>
          <label htmlFor="licenseSelect"></label>
          <div className="license-select z-10 mt-10 ">
            
            <button
              onClick={() => setIsLicenseMenuOpen(!isLicenseMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center mt-10">
                {isLicenseMenuOpen ? null : "Lisans"}
                {!isLicenseMenuOpen ? <FaChevronDown className="ml-39 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isLicenseMenuOpen && (
              <ul className={`z-20 rounded-b-xl text-xs ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={licenseFilter.length === 0}
                      onChange={() => setLicenseFilter([])}
                      className="z-20 mb-5 ml-6 mt-5" 
                    />
                    <span className="ml-3 font-semibold text-sm">Tüm Lisanslar</span>
                  </label>
                </li>
                {licenseOptions.map((license) => (
                  <li key={license}>
                    <label>
                      <input
                        type="checkbox"
                        checked={licenseFilter.includes(license)}
                        onChange={() => handleLicenseSelect(license)}
                        className="z-20 mb-5 ml-6 mt-2"
                      />
                      <span className="ml-3 font-semibold text-sm">{license}</span>
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={`mb-4 z-20 divide-y ${ isMobile ? 'divide-rose-700' : 'divide-slate-700'}`}>
          <label htmlFor="artistSelect"></label>
          <div className="artist-select z-10 mt-10 ">
            
            <button
              onClick={() => setIsArtistMenuOpen(!isArtistMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center mt-10">
                {isArtistMenuOpen ? null : "Sanatçı"}
                {!isArtistMenuOpen ? <FaChevronDown className="ml-37 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isArtistMenuOpen && (
              <ul className={`z-20 rounded-b-xl text-xs ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={artistFilter.length === 0}
                      onChange={() => setArtistFilter([])}
                      className="z-20 mb-5 ml-6 mt-5" 
                    />
                    <span className="ml-3 font-semibold text-sm">Tüm Sanatçılar</span>
                  </label>
                </li>
                {artistOptions.map((artist) => (
                  <li key={artist}>
                    <label>
                      <input
                        type="checkbox"
                        checked={artistFilter.includes(artist)}
                        onChange={() => handleArtistSelect(artist)}
                        className="z-20 mb-5 ml-6"
                      />
                      <span className="ml-3 font-semibold text-sm">{artist}</span>
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={`mb-4 z-20 divide-y ${ isMobile ? 'divide-rose-700' : 'divide-slate-700'}`}>
          <label htmlFor="genreSelect"></label>
          <div className="genre-select z-10 mt-10">
          
            <button
              onClick={() => setIsGenreMenuOpen(!isGenreMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center mt-10">
                {isGenreMenuOpen ? null : "Tür"}
                {!isGenreMenuOpen ? <FaChevronDown className="ml-45 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isGenreMenuOpen && (
              <ul className={`z-20 rounded-b-xl text-xs ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={genreFilter.length === 0}
                      onChange={() => setGenreFilter([])}
                      className="z-10 mb-5 ml-6 mt-5"
                    />
                    <span className="ml-3 font-semibold text-sm">Tüm Türler</span>
                  </label>
                </li>
                {genreOptions.map((genre) => (
                  <li key={genre}>
                    <label>
                      <input
                        type="checkbox"
                        checked={genreFilter.includes(genre)}
                        onChange={() => handleGenreSelect(genre)}
                        className="z-10 mb-5 ml-6"
                      />
                      <span className="ml-3 font-semibold text-sm">{genre}</span>
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={`mb-4 z-20 divide-y ${ isMobile ? 'divide-rose-700' : 'divide-slate-700'}`}>
          <label htmlFor="keySelect"></label>
          <div className="key-select z-10 mt-10">
          
            <button
              onClick={() => setIsKeyMenuOpen(!isKeyMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center mt-10">
                {isKeyMenuOpen ? null : "Key"}
                {!isKeyMenuOpen ? <FaChevronDown className="ml-44.5 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isKeyMenuOpen && (
            <ul>
              <ul className={`rounded-b-xl text-xs flex flex-wrap justify-between ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li className="w-1/2">
                  <label>
                    <input
                      type="checkbox"
                      checked={keyFilter.length === 0}
                      onChange={() => setKeyFilter([])}
                      className={`z-10 ml-2 ${ isMobile? 'mt-2' : 'mt-5'}`}
                    />
                    <span className="ml-3 font-semibold text-sm">Tümü</span>
                  </label>
                </li>
                {keyOptions.map((key) => (
                  <li key={key} className={`w-1/2 ${ isMobile? 'mt-2':'mt-5'}`}>
                    <label>
                      <input
                        type="checkbox"
                        checked={keyFilter.includes(key)}
                        onChange={() => handleKeySelect(key)}
                        className={`z-10 ml-2 ${ isMobile? 'mb-0' : 'mb-5'}`}
                      />
                      <span className="ml-3 font-semibold text-sm">{key}</span>
                    </label>
                  </li>
                ))}
              </ul>
                <li>
                  <button
                    onClick={applyFilters}
                    className="bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
            </ul>
            )}
          </div>
        </div>
        <div className={`mb-4 z-20 divide-y ${ isMobile ? 'divide-rose-700' : 'divide-slate-700'}`}>
          <label htmlFor="bpmSelect"></label>
          <div className="bpm-select z-10 mt-10">
          
            <button
              onClick={() => setIsBPMMenuOpen(!isBPMMenuOpen)}
              className={`w-full h-6 text-left flex items-center justify-between indent-6 font-semibold text-base ${
                isMobile ? 'bg-rose-900' : 'bg-slate-900'
              }`}
            >
              <span className="flex items-center mt-10">
                {isBPMMenuOpen ? null : "BPM"}
                {!isBPMMenuOpen ? <FaChevronDown className="ml-43 opacity-40 hidden md:inline-block" /> : <FaChevronUp  className="ml-56 opacity-40 hidden md:inline-block"/> }
              </span>
            </button>
            {isBPMMenuOpen && (
              <ul className={`z-20 rounded-b-xl text-xs ${
                isMobile ? 'bg-rose-900 w-80' : 'bg-slate-900 w-96'
              }`}
              >
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={bpmFilter.length === 0}
                      onChange={() => setBPMFilter([])}
                      className="z-10 mb-5 ml-6 mt-5"
                    />
                    <span className="ml-3 font-semibold text-sm">Tüm BPM</span>
                  </label>
                </li>
                {bpmOptions.map((bpm) => (
                  <li key={bpm}>
                    <label>
                      <input
                        type="checkbox"
                        checked={bpmFilter.includes(bpm)}
                        onChange={() => handleBPMSelect(bpm)}
                        className={`z-10 ml-6 ${ isMobile? 'mb-2' : 'mb-5'}`}
                      />
                      <span className="ml-3 font-semibold text-sm">{bpm}</span>
                    </label>
                  </li>
                ))}
                <li>
                  <button
                    onClick={applyFilters}
                    className="w-full bg-primary-500 text-white py-2 flex ml-6"
                  >
                    <span className={`rounded-full  p-1 pl-3 pr-3 text-xs ${ isMobile ? 'bg-slate-800' : 'bg-rose-900'}`}>Uygula </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={` ${isMobile ? 'w-full border-none' : 'w-4/5 '} bg-slate-900 border-l-2 border-slate-700`}>
        <div className="mb-14 m-10">
          <h1 
            className=
              {`${ isMobile ? 'mt-20' : 'mt-0'} 
              text-white
              text-2xl
              font-extrabold
              tracking-wider`}
            >
            Vokalleri Keşfet
          </h1>
          <div>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="bg-slate-700 rounded-md text-white p-2 w-full mt-10"
            >
            {isSidebarOpen ? "X" : "Filtreleme"}
            </button>
          )}
          </div>
        </div>
        
        <div className="flex items-center w-full z-0 text-sm mb-4">
          
          
          {!isMobile && (
            <>
              <div className="flex-1 ml-16">TITLE</div>
              <div className="flex-1 ml-2">SANATÇI</div>
              <div className="flex-1 ml-4">TÜR</div>
              <div className="flex-1 mr-3">BPM</div>
              <div className="flex-1 mr-20">KEY</div>
            </>
          )}
        </div>
      {filteredSongs.map((song) => (
        <div key={song.id} className="flex items-center w-full z-0 ">
          <div className={`flex-1 ${isMobile ? 'ml-5' : 'ml-0'}`}>
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <div>
            <button onClick={() =>{downloadFileAtURL(songUrl)}}>
              <FiDownload className="text-2xl text-rose-600 justify-center items-center"/>
            </button>
          </div>
          <VokalFilterButton songId={song.id} />
        </div>
      ))}
      </div>
    </div>
  );
};
export default FilteredContent;

  
  
