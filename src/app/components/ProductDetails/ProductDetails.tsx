'use client'
import Image from "next/image";
import plug_book from "../../assets/img/plugs/plug_book.jpg";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import Rating from "../Rating/Rating";
import { Button } from "../Button/Button";
import { Product } from "@/app/types/Product";
import fav from "../../assets/favourite.svg";

export default function ProductDetails({ state, pathname, paramsID, review }: {
  state: Product;
  pathname: string;
  paramsID: string;
  review: number;
}) {
  const publicationYear = state.fields?.find(p => p.lable_name === "Publication year")?.value;
  const format = state.fields?.find(p => p.lable_name === "Format")?.value;
  const cover = state.fields?.find(p => p.lable_name === "Cover")?.value;
  const lang = state.fields?.find(p => p.lable_name === "Language")?.value;
  const author = state.fields?.find(p => p.lable_name === "Author")?.value;
  const pages = state.fields?.find(p => p.lable_name === "Pages")?.value;

  const {
    category_name,
    name,
    image,
    price,
    special_price,
    status,
    fields,
    description,
    id
  } = state;

  const nameBooks = 'Books';
  return (
    <section className="px-6 py-10 tablet:px-10">
      <div className="flex flex-col desktop:flex-row gap-[135px]">
        <div className="hidden desktop:flex flex-col flex-1 border border-Black p-4 ">
          <div className="flex mb-2 justify-between">
            <span className="px-1 py[2px] border-Black border flex justify-center items-center text-xxxs tablet:text-cartL font-normal uppercase">
              {category_name}
            </span>
            <button
              type="button"
              className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
            >
              <Image src={fav} alt="add to favourite" priority={false}/>
            </button>
          </div>

          <div className="mb-2 tablet:mb-5 desktop:h-full desktop:w-full">
            <div className={`relative h-[212px] tablet:w-[149px] tablet:h-[220px] desktop:h-full desktop:w-full mx-auto`}>
              <Image
                src={image ? `${image[0]}` : plug_book}
                alt={state && name}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-10">
          <div className="flex flex-col gap-4">
            <Breadcrumbs path={pathname.slice(0, -2)} name={nameBooks} bookName={state && name} id={+id} />

            <h1 className="text-s tablet:text-sm desktop:text-l font-bold uppercase">
              {state && name}
            </h1>

            <Rating review={review} />
          </div>

          <div className="border border-Black p-4 desktop:hidden">
            <div className="flex mb-2 justify-between">
              <span className="px-1 py-[2px] border-Black border flex justify-center items-center uppercase text-xxxs tablet:text-cartL font-normal">
                {category_name ? category_name : 'new'}
              </span>
              <button
                type="button"
                className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
              >
                <Image src={fav} alt="add to favourite" priority={false}/>
              </button>
            </div>

            <div className="relative mb-2 tablet:mb-5">
              <div className={`relative h-[212px] tablet:w-[149px] tablet:h-[220px] mx-auto`}>
                <Image
                  src={image ? `${image[0]}` : plug_book}
                  alt={state ? name : ""}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", margin: 'auto' }}
                  sizes="50vw"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-m tablet:text-l font-normal uppercase color-Black">
              {special_price > 0 ? (
                <div className="flex gap-3 tablet:gap-4">
                  <p className="text-m tablet:text-l uppercase font-normal text-AccentRed">
                    ${special_price}
                  </p>
                  <p className="text-m tablet:text-l uppercase font-normal line-through">
                    ${price}
                  </p>
                </div>
              ) : (
                <p className="text-m tablet:text-l uppercase font-normal">
                  ${price}
                </p>
              )}
            </div>

            <p className="text-xs tablet:text-cartL font-normal uppercase">
              {status === 'active' ? 'in stock' : 'out of stock'}
            </p>

            <Button title='add to cart' />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 text-xxs tablet:text-xsx desktop:text-cartL font-bold uppercase">
              <p>autor</p>
              <p>Publication year</p>
              <p>Format</p>
              <p>Cover</p>
              <p>Pages</p>
              <p>Language</p>
              <p>Vendor code</p>
            </div>
            <div className="flex flex-col gap-2 text-xxs tablet:text-xsx desktop:text-cartL font-light uppercase">
              <p id="autor">{fields ? author : 'author'}</p>
              <p id="Publication_year">{fields ? publicationYear : 2014}</p>
              <p id="Format">{fields ? format : 'paper'}</p>
              <p id="Cover">{fields ? cover : 'hard'}</p>
              <p id="Pages">{fields ? pages : 548}</p>
              <p id="Language">{fields ? lang : 'english'}</p>
              <p id="Vendor_code">{`01023${paramsID}`}</p>
            </div>
          </div>

          <div className="flex flex-col gap-[17px]">
            <h2 className="text-xxs tablet:text-xsx desktop:text-cartL font-bold uppercase">Book description</h2>
            <p className="text-xxxs tablet:text-xxs tracking-tight font-light leading-relaxed ">
              {description ? description : (
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non obcaecati, eos ipsam laudantium doloribus, voluptatem eligendi iure odio totam nihil earum veritatis nulla vitae voluptate reiciendis laborum esse ipsum cum?'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
