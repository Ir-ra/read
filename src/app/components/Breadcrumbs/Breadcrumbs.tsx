import Link from "next/link";

export const Breadcrumbs = ({ path, name, bookName, id }: {
  path: string;
  name?: string;
  bookName?: string;
  id?: number;
}) => {

  return (
    <div className="flex gap-1 text-Black text-xxxs font-light uppercase">
      <Link href='/'>
        home
      </Link>
      <span>/</span>

      <Link href='/shop'>
        {path.slice(1)}
      </Link>

      {id && (
        <div>
          {`/ ${bookName}`}
        </div>
      )}


    </div>
  )
}