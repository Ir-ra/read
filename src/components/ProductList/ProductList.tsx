import { Product } from "@/types/Product";

import { VerticalCard } from "../Card/VerticalCard";

export default function ProductList({
  currentTableData,
  onBookClick,
}: {
  currentTableData: Product[];
  onBookClick: (product: Product) => void;
}) {
  return (
    <>
      <ul className="grid grid-cols-2 desktop:grid-cols-4 gap-5 scroll-smooth">
        {currentTableData.map((product) => (
          <li key={product.id} className="flex m-auto w-full tablet:w-min">
            <VerticalCard product={product} onBookClick={onBookClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
