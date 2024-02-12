import Link from 'next/link';
import LOGO from '../../assets/Logo.svg';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='pr-8'>
      <Link href='/'>
        <Image
          src={LOGO}
          alt='logo VARTOREAD'
          width={48}
          height={48}
        />
      </Link>
    </div>
  );
};
