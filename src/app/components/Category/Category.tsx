"use client";
import Image from "next/image";
import up from '../../assets/selector_up.svg';
import { useState } from "react";

export const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const categories = [
    'Fiction',
    'Non-fiction',
    'Mystery',
    'Poetry',
    'Drama',
    'Fantasy',
  ];

  const handleOptionClick = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="flex justify-between tablet:justify-start gap-2 items-center w-full mb-2 tablet:mb-6"
      >
        <p className={`text-xxs tablet:text-xsx desktop:text-cartL  ${isOpen === true ? 'font-bold ' : 'font-light'} uppercase hover:font-bold`}>
          Category
        </p>

        <span className={`transition-all duration-300 ease-in-out ${!isOpen ? ' rotate-180' : ''}`}>
          <Image
            src={up}
            alt="up arrow"
          />
        </span>
      </button>

      {isOpen && (
        <div className="flex flex-col tablet:flex-row w-full">
          <ul className="grid grid-cols tablet:grid-cols-2 desktop:grid-cols-3 gap-2 w-full desktop:w-2/5 tablet:justify-between mb-2">
            {categories.map(category => (
              <button
                key={category}
                className="flex text-xxxs uppercase font-light tablet:hover:font-bold"
                onClick={handleOptionClick}
              >
                <p>
                  {category}
                </p>
              </button>
            ))}
          </ul>

          <div className="bg-AccentBackground w-full tablet:w-52 desktop:w-[440px] border border-solid border-AccentBackground p-2">
            <p className="text-[12px] leading-5 font-light uppercase">
              Don't have the category you want? try to find through search
            </p>
          </div>
        </div>
      )}

    </div>
  )
}