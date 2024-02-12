import Image from 'next/image';
import Up from '../../assets/arrow-up.svg';

export const ScrollBToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='flex m-auto mb-10 arrow-up transition ease-in-out' onClick={scrollToTop}>
      <Image src={Up} alt="arrow up" />
    </button>
  );
};
