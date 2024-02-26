import Image from "next/image";
import up from '../../assets/selector_up.svg';

import { Category } from "./Category";
import { SortBy } from "./SortBy";
import { Filters } from "./Filters";
import { useEffect, useRef, useState } from "react";

export const FilterButton = ({ filterName, isOpen, onClick }: {
  onClick?: () => void;
  isOpen?: boolean;
  filterName?: string;
}) => {
  const [blockHeight, setBlockHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current?.clientHeight) {
      const height = contentRef.current.clientHeight;
      setBlockHeight(height);
    } else {
      setBlockHeight(0);
    }
  }, [isOpen]);

  console.log('blockHeight', blockHeight);


  return (
    <div>
      <div id='1' className="flex flex-col tablet:flex-row mb-2 tablet:mb-6 ">
        <button
          onClick={onClick}
          type="button"
          className="flex justify-between items-center w-full tablet:justify-start gap-2  tablet:mb-0"
        >
          <p className={`text-xxs tablet:text-xsx desktop:text-cartL ${isOpen ? 'font-bold ' : 'font-light'} uppercase hover:font-bold`}>
            {filterName}
          </p>
          <span className={`transition-all duration-300 ease-in-out ${isOpen ? ' rotate-180' : ''}`}>
            <Image
              src={up}
              alt="up arrow"
            />
          </span>
        </button>
      </div>

      <div className={`
      ${isOpen ? `tablet:h-[${blockHeight}px]` : ''}  mb-2 tablet:mb-0 `} id="3">

        <div className="w-full tablet:absolute tablet:left-0" ref={contentRef} id="4" >
          {isOpen && filterName === 'Sort by' && <SortBy isOpen={isOpen} />}
          {isOpen && filterName === 'Category' && <Category isOpen={isOpen} />}
          {isOpen && filterName === 'Filters' && <Filters isOpen={isOpen} />}
        </div>
      </div>


    </div>
  )
}