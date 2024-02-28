import Image from "next/image";
import up from '../../assets/selector_up.svg';

import { Category } from "./Category";
import { SortBy } from "./SortBy";
import { Filters } from "./Filters";

export const FiltersContainer = ({ filterName, isOpen, onClick, }: {
  onClick?: () => void;
  isOpen?: boolean;
  filterName?: string;

}) => {

  return (
    <div>
      <div className="flex flex-col tablet:flex-row mb-2 tablet:mb-6 ">
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
        ${isOpen && filterName === 'Sort by' ? `tablet:h-[84px]` : ''} 
        ${isOpen && filterName === 'Category' ? `tablet:h-[80px]` : ''}
        ${isOpen && filterName === 'Filters' ? `tablet:h-[132px]` : ''} 
        mb-2 tablet:mb-0 `
      }>

        <div className="w-full tablet:absolute tablet:left-0">
          {isOpen && filterName === 'Sort by' && <SortBy isOpen={isOpen} />}
          {isOpen && filterName === 'Category' && <Category isOpen={isOpen} />}
          {isOpen && filterName === 'Filters' && <Filters isOpen={isOpen} />}
        </div>
      </div>
    </div>
  )
}
