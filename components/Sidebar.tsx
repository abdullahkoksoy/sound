"use client";

import Link from 'next/link';

import { usePathname } from "next/navigation";
import { useState } from 'react';
import { useMemo } from "react";
import SidebarItem from "./SidebarItem";
import Libary from "./Libary";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import Demo from '@/components/Demo'
import SearchInput from './SearchInput';
import SearchBar from '@/app/search/components/SearchBar';


interface SidebarProps {
    children: React.ReactNode;
    songs: Song[]
};

const Sidebar: React.FC<SidebarProps> = ({
    children,
    songs
}) => {
    const pathname = usePathname();
    const player = usePlayer();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const routes = useMemo(() => [
        {    
            label: 'Vokaller',
            active: pathname === '/vocals',
            href: '/vocals',
        },
        {    
            label: 'Sanatçılar',
            active: pathname === '/artist',
            href: '/artist',
        },
        {    
            label: 'Beğenilenler',
            active: pathname === '/account',
            href: '/account',
        },
        {   
            label: 'Profil',
            active: pathname === '/profile',
            href: '/profile',
        },
        {   
            label: 'Admin',
            active: pathname === '/AdminSS',
            href: '/AdminSS',
        },
        {    
            label: 'İletişim',
            active: pathname === '/contact',
            href: '/contact',
        },
      
    ], [pathname]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
    
        <div
        className={twMerge(`
          flex
          flex-col
          h-screen
          
        `,
            player.activeId && 'h-[calc(100%-80px)]'
        )}
    >
        <div className={`bg-slate-950 p-2 ${isMobile ? 'fixed top-0 left-0 right-0 z-50 bg-rose-900' : ''}`}>
            <div className="h-full">
                <div className="flex items-center">
                    {isMobile && (
                        <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="text-white text-xl font-normal"
                    >
                        <Demo />
                    </button>
                    )}

                    <div style={{ flex: '1', textAlign: isMobile ? 'center' : 'left', marginRight: isMobile ? '20px' : '0px'}}>
                        <Link href="/" className="text-white text-center text-xl font-normal">
                            Sound Sparkle
                        </Link>
                    </div>
                    
                    
                    {!isMobile && (
                        <div style={{ flex: '5'}}>
                          <SearchInput />
                        </div>
                    )}

                    {isMobile && (
                        <div className="flex">
                          <SearchBar />
                        </div>
                    )}
                    

                    <div className={`flex gap-x-4 ml-5 mr-5 ${isMobile ? 'hidden' : 'w-4/10'}`}>
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </div>

                {/*
                <div className="flex items-center">
                    <span className="text-white mr-4">Admin</span>
                    <Libary songs={songs} />
                     Add any additional elements or components you want on the right side 
                </div> */}

            </div>
        </div>
  
        <main className="flex-1 overflow-y-auto py-2">
          {children}
        </main>
    </div>
  )
}

export default Sidebar


