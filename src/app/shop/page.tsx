"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { Category } from "../components/Category/Category";

function Shop() {
  const pathname = usePathname();
  const nameBooks = 'Books';

  return (
    <main className="px-6 py-10 tablet:px-10">
      <Breadcrumbs path={pathname} name={nameBooks} />

      <h1 className="mb-5 text-s tablet:text-sm desktop:text-l font-bold uppercase">{nameBooks}</h1>

      <Category />
    </main>
  );
}

export default Shop;