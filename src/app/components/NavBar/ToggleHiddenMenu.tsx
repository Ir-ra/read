import Image from 'next/image';
import React from 'react';
import Burger from '../../assets/burger.svg';
import Cross from '../../assets/burger-cross.svg';

type Props = {
  openMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
  eclipse: boolean;
}

export const ToggleHiddenMenu: React.FC<Props> = ({ openMenu, closeMenu, isOpen, eclipse }) => {
  return (
    <div className='flex desktop:hidden items-center transition-all duration-2000'>
      {!isOpen ? (
        <button
          type='button'
          aria-label="burgerButton"
          onClick={openMenu}
        >
          <Image 
            src={Burger}
            alt="burger menu"
            width={40}
            quality={100}
          />
        </button>
      ) : (
        <button onClick={closeMenu}>
          <Image 
            src={Cross}
            alt="burger menu"
            width={40}
            quality={100}
          />
        </button>
      )}

      {eclipse && (
        <div
          className={`fixed bottom-0 left-0 w-full h-[calc(100%-64px)] bg-black transition-opacity duration-1000 ease-in-out ${isOpen ? 'opacity-30' : 'opacity-0'}`}
          onClick={closeMenu}>
        </div>
      )}
    </div>
  );
};
