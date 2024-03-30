interface TitleProps {
  title: string;
};

export default function Title({title} : TitleProps) {
  return (
    <div className="flex justify-center items-center h-[104px] px-6 py-4 border-t border-b border-Black tablet:px-10 desktop:py-5">
      <div className="flex pr-6 tablet:pr-10 desktop:pr-20 py-2.5">
        <p className="text-xsx text-Black text-center uppercase tablet:text-sm desktop:text-l mr-2 font-bold">
          {title}
        </p>
      </div>
    </div>
  )
}
