"use client";


import DownloadButton from '@/components/DownloadButton';

import React from 'react'
import usePlayer from '@/hooks/usePlayer';



const MP3_FILE_URL = "http://localhost:3000/audio/All-Of-Me.mp3"
const Downloadmp3 = () => {

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
            <div className="">
                <button onClick={() =>{downloadFileAtURL(MP3_FILE_URL)}}>
                  <DownloadButton />
                </button>
            </div>
       </div>
  )
}

export default Downloadmp3