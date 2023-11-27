"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/Button"; 
import { Song } from "@/types";

interface FilterProps {
  data: (Song)[];
  tur: string;
  lisans: string;
};

const Filter: React.FC<FilterProps> = ({
  data,
  tur,
  lisans,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(lisans);
  
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [lisans]: id
    };

    if (current[lisans] === id) {
      query[lisans] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return ( 
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {lisans}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((songs) => (
          <div key={songs.lisans} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === songs.lisans && 'bg-black text-white'
              )}
              onClick={() => onClick(songs.lisans)}
            >
              {songs.lisans}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;