import React, { useEffect, useState } from "react";
import { SongColumn, getSongs2 } from "@/actions/getSongs2";
import { Song } from "@/types";

type filter2Props = {
    onFilter: (filteredSongs: Song[]) => void;
};

function Filter2({ onFilter }: filter2Props) {
  useEffect(() => {
    const selectElement = document.getElementById('selectElement');
    
    const fetchData = async () => {
      if (selectElement) {
        selectElement.addEventListener('change', async (event) => {
          if (event.target instanceof HTMLSelectElement) {
            const selectedValue = event.target.value;
            const filteredSongs = await getSongs2(SongColumn.Vokal, selectedValue);
            onFilter(filteredSongs);
          }
        });
      }
    };

    fetchData(); // fetchData işlemini çağır
  }, []);

  return null;
}

export default Filter2;