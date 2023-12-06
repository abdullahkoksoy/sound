"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Demo from '@/components/Demo'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}


const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {
    const authModal = useAuthModal();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // TODO: reset any playing songs
        router.refresh();

        if (error) {
          toast.error(error.message);
        } else {
          toast.success('Logged out!')
        }
    }


  return (
    <div 
      className={twMerge(`
        h-24 md:h-32
        bg-gradient-to-b
        from-rose-900
        mt-12 md:mt-0
        
      `,
        className
      )}
    >
      <div className="
        w-full
        flex
        items-center
        justify-end
        mb-8
      ">
        <div
            className="
                justify-end
                items-center
                gap-x-4
                mb-8
                hidden md:flex
            "
        >
          {user ? (
            <div className="flex gap-x-4 items-center justify-end mt-8 mr-4">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2"
              >  
                Logout
              </Button>
              <Button
                onClick={() => router.push('/account')}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
            
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                    bg-transparent
                    text-neutral-300
                    font-medium
                  " 
                >
                  
                </Button>
              </div>
              <div className="mt-8 mr-4">
                <Button
                  onClick={authModal.onOpen}
                  className="
                    bg-white
                    px-6
                    py-2
                    
                  " 
                >
                    Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div> 
      {children}
    </div>
  );
}

export default Header