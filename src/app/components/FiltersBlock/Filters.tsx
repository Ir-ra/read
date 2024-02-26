export const Filters = ({ isOpen }: {
  isOpen?: boolean;
}) => {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col tablet:flex-row w-full">
          Filters content
        </div>
      )}
    </>
  )
}