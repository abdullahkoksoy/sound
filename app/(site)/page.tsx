import Link from "next/link";

import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import Button from "@/components/Button";

import PageContent from "./components/PageContent";
import PageContent2 from "./components/PageContent2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
 
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="
      bg-slate-950
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
      <Header>
        <div className="mb-2">
          
        </div>
      </Header>
      <div className="mb-7">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
          <div className="md:flex md:items-center bg-slate-950">

            <div className="md:w-1/2 md:pl-6 order-2 md:order-1">
              <img src="/images/vocal1.jpeg" alt="vocal1" className="rounded-l-full" />
            </div>

            <div className="md:w-1/2 md:pr-6 ml-0 md:ml-20 ">
              <h1 className="text-white text-3xl md:text-4xl mt-10 md:mt-0 font-bold md:font-extrabold text-center md:text-left">
                  Hazır vokalleri keşfedin <br/>  Birinci sınıf vokallerle çalışın.
              </h1>
                <br />
                <button className="mt-3 block mx-auto md:mx-0 text-base font-bold rounded-md border border-white p-2 bg-rose-900 hover:bg-rose-800">
                  <Link href="/vocals">Vokalleri Keşfet </Link>
                </button>
                <p className="text-white text-center md:text-left text-lg font-thin mt-7 ">En iyi hazır vokalleri kullanın <br />
                  Telif haksız gönül rahatlığıyla sahip olun.
                </p>
            </div>

            

          </div>
        </div>
  
        <div className="flex justify-between items-center m-6">
          <h1 className="text-white text-2xl mt-8 md:mt-0 font-semibold">
            Top 10 Vokal
          </h1>
        </div>
        <PageContent2 songs={songs} />
        <div className="flex justify-between items-center m-6 mt-4">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <PageContent songs={songs} />
        <div className="flex justify-center items-center m-6 mt-12">
          <h1 className="text-white text-2xl font-semibold">
            Bize Ulaşmanın Kolay Yolu
          </h1>
        </div>
        <div className="flex justify-center items-center">
        <button 
          className="
            rounded-md
            p-2  
            bg-white
            flex
            items-center
            justify-center
            hover:opacity-75
            transition 
          "
        >
          <BiSolidPhoneCall className="text-rose-900 self-center"/> 
        </button>
        <p className="flex justify-center items-center ml-2 text-sm">Destek iletişim hattı</p>
        </div>
        <div className="flex justify-center items-center mt-3">
          <Button
              //onClick={}
              className="
                border-white
                bg-transparent
                text-white
                py-2
                w-72
                items-center
                rounded-md
              " 
            >
              Hemen Ara
            </Button>
        </div>    

        <div className="flex justify-center items-center mt-10">
        <button 
          className="
            rounded-md
            p-2  
            bg-white
            flex
            items-center
            justify-center
            hover:opacity-75
            transition 
          "
        >
          <BsWhatsapp className="text-rose-900 self-center"/> 
        </button>
        <p className="flex justify-center items-center ml-2 text-sm">7/24 whatsapp destek iletişim hattı</p>
        </div>
        
        <div className="flex justify-center items-center mt-3">
          <Button
              //onClick={}
              className="
                border-white
                bg-transparent
                text-white
                rounded-md
                py-2
                w-72
                items-center
              " 
            >
              Hemen Yaz
            </Button>
        </div>    
      </div>

      <div className="mt-2 mb-7 w-full bg-gradient-to-b from-rose-900">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-4xl font-extrabold mt-12">Vokalini Seç ve Başla</h1>
        </div>
        <div>
          <p className="flex justify-center items-center text-center mt-10 text-xl">En iyi hazır vokalleri kullanın <br />Telif haksız gönül rahatlığıyla sahip olun.</p>
        </div>
      </div>

      <div className="mt-2 mb-7 w-full bg-gradient-to-b from-slate-950">
        <hr />
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
        <div className="justify-center items-center gap-x-2 mt-5 grid">
          <p className="flex justify-center items-center text-center mt-2 text-xs opacity-60 font-light">COPYRİGHT © SparkleSound. TÜM HAKLARI SPARKLE SOUNDE'E AİTTİR. </p>
          <p className="flex justify-center items-center text-center mt-2 text-md text-rose-900">Expo Digital</p>
        </div>
      </div>

    </div>
  )
}
