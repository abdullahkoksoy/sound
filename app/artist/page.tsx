import Header from "@/components/Header";
import FilteredContent from "./components/FilteredContent"; 
import getSongs from "@/actions/getSongs";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'



export default  async function Artist() {
  const songs = await getSongs();
  

  return (
    <div className="bg-slate-900 ">
        <div className="">
          <h1 
            className="
              text-white
              text-2xl
              font-semibold
              ml-6
              pt-14
            "
          >
            Sanatçıları Keşfet
          </h1>
        </div> 
      <div className="min-h-screen">
        <FilteredContent songs={songs} />
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
          <p className="flex justify-center items-center text-center mt-2 text-xs opacity-60 font-light">COPYRİGHT © SparkleSound. TÜM HAKLARI SOUND SPARKLE AİTTİR. </p>
          <p className="flex justify-center items-center text-center mt-2 text-md text-rose-900">Expo Digital</p>
        </div>
      </div>  
    </div>
  );
}