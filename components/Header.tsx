'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const error = await supabaseClient.auth.signOut();
    // TODO: Reset any playing songs
    router.refresh();

    if (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={twMerge(
        ` h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className=' w-full mb-4 flex items-center justify-between'>
        <div className=' hidden md:flex gap-x-2 items-center'>
          <button
            title='left'
            className=' rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            title='right'
            className=' rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className=' flex md:hidden gap-x-2 items-center'>
          <button
            title='home'
            className=' rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'
          >
            <HiHome className='text-black' size={20} />
          </button>
          <button
            title='search'
            className=' rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'
          >
            <BiSearch className='text-black' size={20} />
          </button>
        </div>
        <div className=' flex justify-between items-center gap-x-4'>
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className=' bg-transparent text-neutral-300 font-md'
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                onClick={authModal.onOpen}
                className=' bg-white px-6 py-2'
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
