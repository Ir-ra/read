import Link from 'next/link';
import React from 'react';

type Hidden = {
  isOpen: boolean;
  closeMenu: () => void;
}

export const HiddenMenu: React.FC<Hidden> = ({ isOpen, closeMenu }) => {
  return (
    <div className='relative overflow-x-hidden'>
      <nav className={`fixed top-[65px] left-[-60%] p-6 tablet:p-10 transition-left ease-in-out delay-100 duration-300 bg-Background w-3/6 h-full ${isOpen ? 'left-[0]' : ''}`} >

        <ul className='flex flex-col gap-4 pb-6 text-xsx font-bold uppercase' onClick={closeMenu}>
          <Link href='/'>
            home
          </Link >

          <Link href='/shop'>
            shop
          </Link>

          <Link href='/about'>
            about us
          </Link>

          <Link href='/login'>
            log in
          </Link>
        </ul>

        <ul className='flex flex-col gap-4 text-xxxs pt-6 font-light uppercase border-t border-Grey' onClick={closeMenu}>
          <Link href='/'>
            Payment and delivery
          </Link >

          <Link href='/'>
            Exchange and return
          </Link>

          <Link href='/'>
            Contacts
          </Link>
        </ul>
      </nav>
    </div>
  );
};
