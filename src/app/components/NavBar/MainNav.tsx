import { Logo } from '../Logo/Logo';
import Link from 'next/link';

export const MainNav = () => {
  return (
    <nav className='hidden desktop:flex items-center' >
      <Logo />

      <ul className='flex items-center justify-center text-s uppercase '>
        <Link href='/'
          className='mainNavLinks'>
          home
        </Link >

        <Link href='/shop' className='mainNavLinks'>
          shop
        </Link>

        <Link href='/about' className='mainNavLinks mr-auto'>
          about us
        </Link>
      </ul>
    </nav>
  );
};
