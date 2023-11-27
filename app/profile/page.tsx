import Image from "next/image";

import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
  <div className="bg-slate-900">
      <div className="mb-6">
        <h1 
          className="
            text-white
            text-2xl
            font-semibold
            ml-6
            pt-14
          "
        >
          Satın Alınan Vokalleriniz
        </h1>
      </div>
    <div>
      <LikedContent songs={songs} />
    </div>
    <div className="mt-2 w-full bg-gradient-to-b from-slate-950">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-xl font-normal mt-12">Sparkle Sound</h1>
        </div>
        <div>
          <p className="flex justify-center items-center text-center mt-2 text-md opacity-60">Sparkle Sound En İyi Vokallerle <br /> Her Zaman Yanınızda </p>
        </div>
        <div className="flex justify-center items-center gap-x-2 mt-5">
          <button 
            className="
              rounded-md
              p-2  
              bg-rose-900
              flex
              items-center
              justify-center
              hover:opacity-75
              transition 
            "
          >
            <FaFacebookF className="text-white self-center"/> 
          </button>
          <button 
            className="
              rounded-md
              p-2  
              bg-rose-900
              flex
              items-center
              justify-center
              hover:opacity-75
              transition 
            "
          >
            <FaTwitter className="text-white self-center"/> 
          </button>
          <button 
            className="
              rounded-md
              p-2  
              bg-rose-900
              flex
              items-center
              justify-center
              hover:opacity-75
              transition 
            "
          >
            <FaInstagram className="text-white self-center"/> 
          </button>
        </div> 
        <div className="justify-center items-center gap-x-2 grid">
          <p className="flex justify-center items-center text-center mt-2 text-xs opacity-60 font-light">COPYRİGHT © SparkleSound. TÜM HAKLARI SPARKLE SOUNDE'E AİTTİR. </p>
          <p className="flex justify-center items-center text-center mt-2 text-md text-rose-900">Expo Digital</p>
        </div>
      </div>  
  </div>
  );
}

export default Liked;
