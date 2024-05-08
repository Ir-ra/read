"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { useShop } from "@/app/context/ShopContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import FilterOptions from "./FilterOptions";

export const Category = ({
  isOpen,
  setCategoryName,
}: {
  isOpen?: boolean;
  setCategoryName: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedCategory, setSelectedCategory] = useLocalStorage(
    "selectedCategory",
    ""
  );

  const categories = [
    { category_name: "Mystery", category_id: "1" },
    { category_name: "Fiction", category_id: "2" },
    { category_name: "Romance", category_id: "3" },
    { category_name: "Science Fiction", category_id: "4" },
    { category_name: "Poetry", category_id: "5" },
    { category_name: "Non-fiction", category_id: "6" },
  ];

  const categoryNames = categories.map(({ category_name }) => category_name);
  const { setCategory } = useShop();

  const handleCategoryChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = event.target;
    const type = dataset.type;

    if (type === "category") {
      setSelectedCategory(value);
      setCategoryName(value);
      setCategory(getIdByCategoryName(value));
    }
  };

  const getIdByCategoryName = (categoryName: string) => {
    return categories.find((el) => el.category_name === categoryName)
      ?.category_id;
  };

  return (
    <>
      {isOpen && (
        <div className="flex flex-col tablet:flex-row w-full desktop:w-full  tablet:h-[80px]">
          <ul className=" grid grid-cols tablet:grid-cols-2 desktop:grid-cols-3 gap-2 w-full tablet:justify-between mb-2">
            {categoryNames?.map((category, i) => (
              <div
                key={category}
                className="flex text-xxxs uppercase font-light tablet:hover:font-bold"
              >
                <FilterOptions
                  key={category}
                  item={category}
                  selectedFilter={selectedCategory}
                  handleClick={handleCategoryChange}
                  i={i}
                  type={"category"}
                  selectedCategory={selectedCategory === category}
                />
              </div>
            ))}
          </ul>

          <div className="bg-AccentBackground w-full tablet:w-52 desktop:w-[440px] border border-solid border-AccentBackground p-2">
            <p className="text-[12px] leading-5 font-light uppercase">
              {`Don't have the category you want? try to find through search`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
