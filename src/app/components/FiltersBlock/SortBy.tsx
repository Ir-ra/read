"use client";
import { ChangeEvent, useState } from "react";

export const SortBy = ({ isOpen }: {
  isOpen?: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const sortByItems = ['Newest first', 'Popular first', 'Top rated', 'Price: high to low', 'Price: Low to high'];

  return (
    <>
      {isOpen && (
        <div className=" grid grid-cols tablet:grid-cols-2 gap-2 w-full tabled:w-2/5 desktop:w-full tablet:justify-between mb-2">
          {sortByItems.map((item, i) => (
            <button key={item} className="flex text-xxxs uppercase font-light hover:font-bold">

              <input
                type="checkbox"
                value={item}
                id={`customCheckbox_${i}`}
                checked={selectedOption === item}
                onChange={handleCheckboxChange}
                className="hidden"
              />

              <label
                htmlFor={`customCheckbox_${i}`}
                className={`before:content-[''] before:inline-block before:w-4 before:h-4 before:line-height-20 before:text-center before:border-[1px] before:border-solid before:border-Black before:mr-5 before:bg-White before:rounded-lg before:text-transparent before:text-white
               ${selectedOption === item ? 'before:border-Black before:border-[5px] ' : ''} flex items-center`}
              >
                {item}
              </label>
            </button>
          ))}
        </div>
      )}
    </>
  )
}