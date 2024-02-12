"use client"

import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Link from 'next/link';
import { ScrollBToTop } from '../ScrollToTop/ScrollToTop';
import Image from 'next/image';


export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='px-6 py-10 tablet:px-10 bottom-0 w-full bg-Background p-10'>
      <ScrollBToTop />

      <Link href='/' className='flex justify-center tablet:justify-start text-[26px] leading-10 tablet:text-sm font-medium tablet:font-bold mb-8 desktop:hidden uppercase'
        onClick={scrollToTop}>
        Vartoread
      </Link>

      <div className='flex flex-col tablet:flex-row items-center tablet:items-start justify-center tablet:justify-between mb-10 tablet:mb-8 gap-7'>
        <Link id='desk' href='/' className='text-s font-bold hidden desktop:block uppercase w-full' onClick={scrollToTop}>
          Vartoread
        </Link>

        <div className='footerBoxes'>
          <h3 className='footerCols'>
            About us
          </h3>

          <ul className='footerListStiles'>
            <Link href='/about' className='footerlinkStyles' onClick={scrollToTop}>About us</Link>
            <Link href='#' className='footerlinkStyles'>terms and Conditions</Link>
            <Link href='#' className='footerlinkStyles'>Privacy Policies</Link>
            <Link href='#' className='footerlinkStyles'>Contacts</Link>
          </ul>
        </div>

        <div className='footerBoxes'>
          <h3 className='footerCols'>
            To clients
          </h3>

          <ul className='footerListStiles'>
            <Link href='#' className='footerlinkStyles'>All products</Link>
            <Link href='#' className='footerlinkStyles'>Payment and delivery</Link>
            <Link href='#' className='footerlinkStyles'>Exchange and return</Link>
            <Link href='#' className='footerlinkStyles'>FAQ</Link>
          </ul>
        </div>

        <div className='footerBoxes'>
          <h3 className='footerCols'>
            Follow us
          </h3>

          <ul className='flex items-center text-xxxs font-light gap-6'>
            <Link href='#'>
              <Image
                src={Instagram}
                alt="instagram"
                width={32}
                className='h-full instagram-link'
              />
            </Link>
            <Link href='#'>
              <Image
                src={Facebook}
                alt="facebook"
                width={32}
                className='h-full facebook-link'
              />
            </Link>
          </ul>
        </div>
      </div>

      <p className='flex justify-center tablet:justify-start text-xxxs font-light uppercase'>
        © 2024 All rights reserved.
      </p>
    </footer>
  );
};
