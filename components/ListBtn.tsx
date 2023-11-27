"use client";

import Link from 'next/link';
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";

interface ListBtnProps {
  children: React.ReactNode;
  className?: string;
}


const ListBtn: React.FC<ListBtnProps> = ({
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
  <div>
    <ul className="mt-8 ml-5 text-base">
      <li className='mb-5'>
        <Link href="/">Ana Sayfa</Link>
      </li>
      <li className='mb-5'>
        <Link href="/vocals">Vokaller</Link>
      </li>
      <li className='mb-5'>
        <Link href="/artist">Sanatçılar</Link>
      </li>
      <li className='mb-5'>
        <Link href="/account">Beğenilenler</Link>
      </li>
      <li className='mb-5'>
        <Link href="/profile">Profil</Link>
      </li>
      <li className='mb-5'>
        <Link href="/contact">İletişim</Link>
      </li>
        
    </ul>
    <div
    className="
        justify-start
        items-center
        gap-x-4
        mb-8
        flex
        ml-5
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
      <div>
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
  )
}

export default ListBtn