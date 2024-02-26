"use client";
export const Category = ({isOpen} : {
  isOpen?: boolean;
}) => {
  const categories = [
    'Fiction',
    'Non-fiction',
    'Mystery',
    'Poetry',
    'Drama',
    'Fantasy',
  ];

  return (
    <>
      {isOpen && (
        <>
         <div className="flex flex-col tablet:flex-row w-full desktop:w-full  tablet:h-[80px]">
          <ul className=" grid grid-cols tablet:grid-cols-2 desktop:grid-cols-3 gap-2 w-full tablet:justify-between mb-2">
            {categories.map(category => (
              <button
                key={category}
                className="flex text-xxxs uppercase font-light tablet:hover:font-bold"
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
        </>
      )}

    </>
  )
}