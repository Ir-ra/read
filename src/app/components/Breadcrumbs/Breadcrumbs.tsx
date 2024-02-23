import Link from "next/link";

export const Breadcrumbs = ({ path, name }: {
  path: string;
  name: string;
}) => {
  console.log(path);

  return (
    <div className="flex gap-1 pb-4 text-Black text-xxxs font-light uppercase">
      <Link href='/'>
        home
      </Link>
      <span>/</span>

      <Link href='/shop'>
        {path.slice(1)}
      </Link>
      <span>/</span>

      <Link href='/shop'>
        {name}
      </Link>

    </div>
  )
}