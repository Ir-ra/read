import React from "react";

import { DOTS, usePagination } from "../../utils/usePagination";

interface PaginationProps {
  onPageChange: (pageNumber: string) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: string;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage: parseInt(currentPage, 10),
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange || +currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    const numericCurrentPage = parseInt(currentPage, 10);
    if (numericCurrentPage !== lastPage) {
      const nextPage = (numericCurrentPage + 1).toString();
      onPageChange(nextPage);
    }
  };

  const onPrevious = () => {
    const numericCurrentPage = parseInt(currentPage, 10);
    if (numericCurrentPage !== 1) {
      const previousPage = (numericCurrentPage - 1).toString();
      onPageChange(previousPage);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex list-none gap-7 tablet:gap-10 desktop:gap-9 justify-center">
      <li
        className="flex px-0 py-2 justify-center items-center gap-2 cursor-pointer"
        onClick={onPrevious}
      >
        <p
          className={`text-xxs desktop:text-cartL font-light uppercase ${
            +currentPage === 1 ? "text-Grey pointer-events-none" : ""
          }`}
        >
          Previous
        </p>
      </li>

      {paginationRange &&
        paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={`${pageNumber}_${i}`}
                className="flex px-0 py-2 justify-center items-center gap-2 text-xxs desktop:text-cartL font-light text-Grey"
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={`flex px-0 py-2 justify-center items-center gap-2 text-xxs desktop:text-cartL font-light cursor-pointer uppercase ${
                pageNumber.toString() === currentPage
                  ? "text-Black"
                  : "text-Grey"
              }`}
              onClick={() => onPageChange(String(pageNumber))}
            >
              <span>{pageNumber}</span>
            </li>
          );
        })}

      <li
        className="flex px-0 py-2 justify-center items-center gap-2 cursor-pointer"
        onClick={onNext}
      >
        <p
          className={`text-xxs desktop:text-cartL font-light uppercase ${
            currentPage.toString() === lastPage.toString()
              ? "text-Grey pointer-events-none"
              : ""
          }`}
        >
          Next
        </p>
      </li>
    </ul>
  );
};

export default Pagination;
