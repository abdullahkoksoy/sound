"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);

  useEffect(() => {
    if (enterKeyPressed) {
      const query = {
      title: debouncedValue,
      sanatci: debouncedValue
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query
    });

    router.push(url);
    setEnterKeyPressed(false);
    }
  }, [debouncedValue, router, enterKeyPressed]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEnterKeyPressed(true);
    }
  };

  return ( 
    <Input 
      placeholder="Vokalleri Ara"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className="p-2 w-full bg-gray-800 border border-gray-700 text-white rounded-md"
    />
  );
}
 
export default SearchInput;