"use client";
import Image from "next/image";
import up from '../../assets/selector_up.svg';
import { Category } from "./Category";
import { SortBy } from "./SortBy";
import { Filters } from "./Filters";
import { useEffect, useState } from "react";

export const FilterButton = ({ filterName, isOpen, onClick }: {
  onClick?: (filterName: string) => void;
  isOpen?: boolean;
  filterName?: string;
}) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

  }, [isOpenCategory, isOpenSort, isOpenFilter]);

  const handleClick = () => {
    if (isActive && isOpen) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    // setIsActive(!isActive); // Toggle isActive state

    // Toggle the corresponding filter state based on filterName
    if (filterName === 'Category') {
      setIsOpenCategory(!isOpenCategory);
      setIsOpenSort(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Sort by') {
      setIsOpenSort(!isOpenSort);
      setIsOpenCategory(false);
      setIsOpenFilter(false);
    } else if (filterName === 'Filters') {
      setIsOpenFilter(!isOpenFilter);
      setIsOpenCategory(false);
      setIsOpenSort(false);
    }

    if (onClick) {
      onClick(filterName || '');
    }
  };


  return (
    <div >
      <div id='1' className="flex flex-col tablet:flex-row">
        <div id='2' className="">
          <button
            onClick={handleClick}
            type="button"
            className="flex justify-between items-center w-full mb-2 tablet:justify-start gap-2  tablet:mb-6"

          >
            <p className={`text-xxs tablet:text-xsx desktop:text-cartL  ${isActive ? 'font-bold ' : 'font-light'} uppercase hover:font-bold`}>
              {filterName}
            </p>
            <span className={`transition-all duration-300 ease-in-out ${isActive ? ' rotate-180' : ''}`}>
              <Image
                src={up}
                alt="up arrow"
              />
            </span>
          </button>
        </div>
      </div>

      <div className={`
      ${isActive && filterName === 'Category' ? 'tablet:h-[85px]' : ''}
       ${isActive && filterName === 'Sort by' ? 'tablet:h-[70px]' : ''}
        ${isActive && filterName === 'Filters' ? 'tablet:h-[40px]' : ''}
        `} id="3">

        <div className="w-full tablet:absolute tablet:left-0 " id="4" >

          {isOpen && filterName === 'Category' && <Category isOpen={isOpenCategory} />}
          {isOpen && filterName === 'Sort by' && <SortBy isOpen={isOpenSort} />}
          {isOpen && filterName === 'Filters' && <Filters isOpen={isOpenFilter} />}

        </div>
      </div>


    </div>
  )
}