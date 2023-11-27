import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = () => {
  return ( 
    <button
      className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-emerald-700
        p-4 
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-110
      "
    >
      <AiOutlineDownload className="text-white" />
    </button>
   );
}
 
export default DownloadButton;