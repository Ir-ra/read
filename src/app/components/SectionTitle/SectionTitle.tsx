import Link from "next/link";

interface SectionTitleProps {
  title: string;
  link: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, link }) => {
  return (
    <div className="flex justify-center items-center h-[104px] px-6 py-4 border-t border-b border-Black tablet:px-10 desktop:py-5">
      <div className="flex">
        <h2 className="text-xsx text-Black font-bold text-center uppercase tablet:text-sm desktop:text-l mr-2">
          {title}
        </h2>
        <Link
          href={link}
          className="text-xxs text-Black uppercase font-light hover:font-bold active:font-bold"
        >
          all
        </Link>
      </div>
    </div>
  );
};
