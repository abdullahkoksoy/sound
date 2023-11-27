"use client";

import React from 'react'
import { FiDownload } from "react-icons/fi";

interface DownloadsongProps {
    songUrl: string;
  }
const Downloadsong: React.FC<DownloadsongProps> = ({ songUrl }) => {
    const downloadFileAtURL= (url: any) =>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute("download",fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
      }
    

  return (
    <div>
        <button onClick={() =>{downloadFileAtURL(songUrl)}}>
            <FiDownload className="text-2xl text-rose-600 justify-center items-center"/>
          </button>
    </div>
  )
}

export default Downloadsong