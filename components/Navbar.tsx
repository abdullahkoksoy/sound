"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi"
import { BsDot } from "react-icons/bs"
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Libary from "./Libary";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

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

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Anasayfa',
            active: pathname !== '/search',
            href: '/',
        },
        {    
            icon: BsDot,
            label: 'Vokaller',
            active: pathname === '/vocals',
            href: '/vocals',
        },
        {    
            icon: BsDot,
            label: 'Sanatçılar',
            active: pathname === '/artist',
            href: '/artist',
        },
        {    
            icon: BsDot,
            label: 'Beğenilenler',
            active: pathname === '/account',
            href: '/account',
        },
        {    
            icon: BsDot,
            label: 'Profil',
            active: pathname === '/profile',
            href: '/profile',
        },
        {    
            icon: BsDot,
            label: 'İletişim',
            active: pathname === '/contact',
            href: '/contact',
        },
        {    
            icon: BiSearch,
            label: 'Ara',
            active: pathname === '/search',
            href: '/search',
        },
    ], [pathname]);
  
    return (
    <div className={twMerge(`
      flex
      h-full
    `,
      player.activeId && 'h-[calc(100%-80px)]'
    )}>
        <div
            className="
                hidden
                md:flex 
                flex-col
                gap-y-2
                bg-slate-950
                h-full
                w-[200px]
                p-2
            "
        >
            <Box>
                <div
                    className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    "
                >
                    {routes.map((item) => (
                        <SidebarItem 
                          key={item.label}
                          {...item}
                        />
                    ))}
                </div><br />
                <hr />
            </Box>
            <Box className="overflow-y-auto h-full">
                <span className="p-5">Admin</span> 
                <Libary songs={songs}/>
            </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
}

export default Sidebar