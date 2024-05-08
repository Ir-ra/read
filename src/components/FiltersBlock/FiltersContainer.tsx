import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import up from "../../../public/img/selector_up.svg";
import { Category } from "./Category";
import { Filters } from "./Filters";
import { SortBy } from "./SortBy";

export const FiltersContainer = ({
  filterName,
  isOpen,
  onClick,
  setCategoryName,
}: {
  onClick?: () => void;
  isOpen?: boolean;
  filterName?: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <div className="flex flex-col tablet:flex-row mb-2 tablet:mb-6 ">
        <button
          onClick={onClick}
          type="button"
          className="flex justify-between items-center w-full tablet:justify-start gap-2  tablet:mb-0"
        >
          <p
            className={`text-xxs tablet:text-xsx desktop:text-cartL ${
              isOpen ? "font-bold " : "font-light"
            } uppercase hover:font-bold`}
          >
            {filterName}
          </p>

          <span
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? " rotate-180" : ""
            }`}
          >
            <Image src={up} alt="up arrow" />
          </span>
        </button>
      </div>

      <div
        className={`
        ${isOpen && filterName === "Sort by" ? `tablet:h-[84px]` : ""} 
        ${isOpen && filterName === "Category" ? `tablet:h-[80px]` : ""}
        ${isOpen && filterName === "Filters" ? `tablet:h-[160px]` : ""} 
        mb-2 `}
      >
        <div className="flex flex-col w-full tablet:absolute tablet:left-0 gap-4">
          {isOpen && filterName === "Sort by" && <SortBy isOpen={isOpen} />}
          {isOpen && filterName === "Category" && (
            <Category isOpen={isOpen} setCategoryName={setCategoryName} />
          )}
          {isOpen && filterName === "Filters" && <Filters isOpen={isOpen} />}
        </div>
      </div>
    </div>
  );
};
