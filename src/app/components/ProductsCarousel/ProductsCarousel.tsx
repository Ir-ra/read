import { VerticalCard } from "../Card/VerticalCard";

interface ProductsCarouselProps {
  activeCategory: string;
}

const bookData = [{
  category: "new",
  cover: {},
  autor: "Rebecca Yarros",
  bookName: "Fourth Wing",
  price: "36",
  new: true,
  comingSoon: false,
}, {
  category: "Autograph",
  autor: "Rebecca Yarros",
  bookName: "The subtle art of not giving a fuck",
  price: "36",
  new: true,
  comingSoon: false,
},{
  category: "18+",
  autor: "Rebecca Yarros",
  bookName: "Fourth Wing",
  price: "36",
  new: true,
  comingSoon: false,
},{
  category: "18+",
  autor: "Rebecca Yarros",
  bookName: "Fourth Wing",
  price: "36",
  new: true,
  comingSoon: false,
},{
  category: "Autograph",
  autor: "Rebecca Yarros",
  bookName: "The subtle art of not giving a fuck",
  price: "36",
  new: true,
  comingSoon: false,
},{
  category: "New",
  autor: "Rebecca Yarros",
  bookName: "Fourth Wing",
  price: "36",
  new: true,
  comingSoon: false,
},{
  category: "Autograph",
  autor: "Rebecca Yarros",
  bookName: "The subtle art of not giving a fuck",
  price: "36",
  new: false,
  comingSoon: true,
}]

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  activeCategory,
}) => {
  return <section className="pt-5  pb-20 tablet:pb-[62px]">
    <div className="flex justify-between px-6 tablet:px-10 mb-5">
      <button>назад</button>
      <button>вперед</button>
      </div>
      <ul className="py-2 px-6 tablet:px-10 flex overflow-hidden gap-5 justify-center items-center">
        <li>
<VerticalCard/>
        </li>
      </ul>
      </section>;
};
