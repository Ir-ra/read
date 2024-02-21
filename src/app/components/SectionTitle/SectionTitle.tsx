import Link from "next/link";

interface SectionTitleProps {
  title1: string;
  link1: string;
  title2?: string;
  link2?: string;
  setActiveCategory?: Function;
  activeCategory?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title1,
  link1,
  title2,
  link2,
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <div className="flex justify-center items-center h-[104px] px-6 py-4 border-t border-b border-Black tablet:px-10 desktop:py-5">
      {title1 === "bestsellers" ? (
        <div className="flex">
          <h2 className="text-xsx text-Black font-bold text-center uppercase tablet:text-sm desktop:text-l mr-2">
            {title1}
          </h2>
          <Link
            href={link1}
            className="text-xxs text-Black uppercase font-light hover:font-bold active:font-bold"
          >
            all
          </Link>
        </div>
      ) : (
        <div className="flex">
          <div className="flex pr-6 tablet:pr-10 desktop:pr-20 py-2.5">
            <button
              onClick={() => {
                setActiveCategory && setActiveCategory("new");
              }}
              className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2"
              style={
                activeCategory === "new"
                  ? { fontWeight: "700" }
                  : { fontWeight: "300" }
              }
            >
              {title1}
            </button>
            <Link
              href={link1}
              className="text-xxs text-Black uppercase font-light hover:font-bold active:font-bold"
            >
              all
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="64"
            viewBox="0 0 2 64"
            fill="none"
          >
            <line x1="1" y1="64" x2="1" stroke="#1C1C1C" />
          </svg>
          <div className="flex pl-6 tablet:pl-10 desktop:pl-20 py-2.5">
            <button
              onClick={() => {
                setActiveCategory && setActiveCategory("coming soon");
              }}
              className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2 "
              style={
                activeCategory === "coming soon"
                  ? { fontWeight: "700" }
                  : { fontWeight: "300" }
              }
            >
              {title2}
            </button>
            {link2 && (
              <Link
                href={link2}
                className="text-xxs text-Black uppercase font-light hover:font-bold active:font-bold"
              >
                all
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
