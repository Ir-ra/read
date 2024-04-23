"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export const Breadcrumbs = ({
  path,
  categoryName,
  bookName,
  id,
  setCategoryName,
}: {
  path: string;
  categoryName?: string;
  bookName?: string;
  id?: number;
  setCategoryName: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex gap-1 text-Black text-xxxs font-light uppercase">
      <Link href="/">home</Link>
      <span>/</span>

      <Link href="/shop" onClick={() => setCategoryName("")}>
        {path.slice(1)}
      </Link>
      {categoryName && <div>{`/ ${categoryName}`}</div>}

      {id && <div>{`/ ${bookName}`}</div>}
    </div>
  );
};
