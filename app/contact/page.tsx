import { BiSolidPhoneCall } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import Button from "@/components/Button"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import Header from "@/components/Header"

const page = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b
        from-rose-900">
      <div>
        <div>
          <h1 className="flex text-white text-2xl font-semibold mb-4 mt-20 justify-center items-center">
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
        <div className="mt-2 mb-7 w-full ">
          <div className="flex justify-center items-center ">
            <h1 className="text-white text-4xl font-extrabold mt-12 ">Vokalini Seç ve Başla</h1>
          </div>
          <div>
            <p className="flex justify-center items-center text-center mt-10 text-xl">En iyi hazır vokalleri kullanın <br />Telif haksız gönül rahatlığıyla sahip olun.</p>
          </div>
        </div>

        <div className="mt-2 mb-7 w-full">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-xl font-normal mt-12">Sparkle Sound</h1>
          </div>
          <div>
            <p className="flex justify-center items-center text-center mt-2 text-md opacity-60">Sparkle Sound En İyi Vokallerle <br /> Her Zaman Yanınızda </p>
          </div>
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
            <FaFacebook className="text-white self-center"/> 
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
          <p className="flex justify-center items-center text-center mt-2 text-xs opacity-60 font-light">COPYRİGHT © SparkleSound. TÜM HAKLARI SOUND SPARKLE AİTTİR. </p>
          <p className="flex justify-center items-center text-center mt-2 text-md text-rose-900">Expo Digital</p>
        </div>
      </div>
    </div> 
   

  )
}

export default page

