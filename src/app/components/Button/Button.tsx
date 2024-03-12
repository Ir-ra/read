import React from 'react';
import {getAllCategories} from '../../../services/getAPI';

type ButtonProps = {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  const buttonType = title === 'Subscribe' ? 'submit' : 'button';
  const handleCategory = async () => {
    try {
      const category = await getAllCategories();

      console.log(category.data)
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <button
      type={buttonType}
      className='flex justify-center bg-Black py-4 px-8
      text-Background text-s tablet:text-sm desktop:text-m w-full font-normal uppercase
      box-border border border-Black
      transition duration-300 ease-in-out
      hover:bg-White hover:text-Black
      active:bg-White active:text-Black'
      onClick={handleCategory}
    >
      {title}
    </button>
  );
};
