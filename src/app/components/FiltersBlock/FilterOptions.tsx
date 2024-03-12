'use client'

import { ChangeEvent } from "react";

export default function FilterOptions({ item, selectedFilter, handleClick, i, type, selectedCategory }: {
  item: string;
  type: string;
  selectedFilter: string;
  handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
  i: number;
  selectedCategory?: boolean;
}) {

  return (
    <>
      <button key={item} className="flex text-xxxs uppercase font-light hover:font-bold">
        <input
          type="checkbox"
          value={item}
          id={`${type}Checkbox${i}`}
          checked={selectedFilter === item}
          onChange={handleClick}
          className="hidden"
          data-type={type}
        />

        <label
          htmlFor={`${type}Checkbox${i}`}
          className={`
            ${type === 'category' ? '' : `before:content-[''] before:inline-block before:w-4 before:h-4 before:line-height-20 before:text-center before:border-[1px] before:border-solid before:border-Black before:mr-5 before:bg-White before:text-transparent before:text-white`}
            ${selectedCategory && 'font-bold'}
            ${type === 'sort' ? 'before:rounded-lg' : ''}
            ${type !== 'category' && selectedFilter === item ? 'before:border-Black before:border-[5px] ' : ''}
            flex items-center
          `}
        >
          {item}
        </label>
      </button >
    </>
  )
}
