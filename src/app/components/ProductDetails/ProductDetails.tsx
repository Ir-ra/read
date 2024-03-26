'use client'
import Image from "next/image";
import plug_book from "../../assets/img/plugs/plug_book.jpg";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import Rating from "../Rating/Rating";
import { Button } from "../Button/Button";

interface State {
  fields?: { value: string }[];
  description?: string;
  image?: string;
  name?: string;
  category_name?: string;
  status?: string;
  id?: number;
  price?: number;
}

export default function ProductDetails({ state, pathname, paramsID, review }: {
  state: State;
  pathname: string;
  paramsID: string;
  review: number;
}) {
  const productsData = [
    {
      id: "1",
      category: "new",
      cover: "",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "2",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "coming soon",
      sale: false,
    },
    {
      id: "3",
      category: "18+",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "coming soon",
      sale: false,
    },
    {
      id: "4",
      category: "18+",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "5",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "6",
      category: "New",
      autor: "Rebecca Yarros",
      bookName: "Fourth Wing",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "7",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "8",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
    {
      id: "9",
      category: "Autograph",
      autor: "Rebecca Yarros",
      bookName: "The subtle art of not giving a fuck",
      price: "36",
      new: "new",
      sale: false,
    },
  ];

  const productT = productsData.filter(p => p.id === paramsID);
  const nameBooks = 'Books';
  return (
    <div>
      <div className="flex flex-col desktop:flex-row gap-[135px]">
        <div className="hidden desktop:flex flex-col flex-1 border border-Black p-4 ">
          <div className="flex mb-2 justify-between">
            <span className="px-1 py[2px] border-Black border flex justify-center items-center text-xxxs tablet:text-cartL font-normal uppercase">
              {productT[0].category}
            </span>
            <button
              type="button"
              className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
              >
                <path
                  d="M18.75 23.25L10 17L1.25 23.25V3.25C1.25 2.58696 1.51339 1.95107 1.98223 1.48223C2.45107 1.01339 3.08696 0.75 3.75 0.75H16.25C16.913 0.75 17.5489 1.01339 18.0178 1.48223C18.4866 1.95107 18.75 2.58696 18.75 3.25V23.25Z"
                  stroke="#1C1C1C"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mb-2 tablet:mb-5 desktop:h-full desktop:w-full">
            <div className={`relative h-[212px] tablet:w-[149px] tablet:h-[220px] desktop:h-full desktop:w-full mx-auto`}>
              <Image
                src={state.image ? `${state.image[0]}` : plug_book}
                alt={state ? state.name ?? productT[0].bookName : ""}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="50vw"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-10">
          <div className="flex flex-col gap-4">
            <Breadcrumbs path={pathname.slice(0, -2)} name={nameBooks} bookName={state ? state.name : productT[0].bookName} id={state.id} />
            <h1 className="text-s tablet:text-sm desktop:text-l font-bold uppercase">
              {state ? state.name : productT[0].bookName}
            </h1>
            <Rating review={review}/>
          </div>

          <div className="border border-Black p-4 desktop:hidden">
            <div className="flex mb-2 justify-between">
              <span className="px-1 py-[2px] border-Black border flex justify-center items-center uppercase text-xxxs tablet:text-cartL font-normal">
                {state.category_name ? state.category_name : 'new'}
              </span>
              <button
                type="button"
                className="border-none w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M18.75 23.25L10 17L1.25 23.25V3.25C1.25 2.58696 1.51339 1.95107 1.98223 1.48223C2.45107 1.01339 3.08696 0.75 3.75 0.75H16.25C16.913 0.75 17.5489 1.01339 18.0178 1.48223C18.4866 1.95107 18.75 2.58696 18.75 3.25V23.25Z"
                    stroke="#1C1C1C"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div id='gg' className="mb-2 tablet:mb-5">
              <div className={`relative h-[212px] tablet:w-[149px] tablet:h-[220px] mx-auto`}>
                <Image
                  src={state.image ? `${state.image[0]}` : plug_book}
                  alt={state ? state.name ?? productT[0].bookName : ""}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="50vw"
                  quality={100}
                  placeholder='blur'
                  blurDataURL='../../assets/img/plugs/plug_book.jpg'
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-m tablet:text-l font-normal uppercase color-Black">
              ${`${Object.keys(state).length > 0 ? state.price : 36}`}
            </p>

            <p className="text-xs tablet:text-cartL font-normal uppercase">
              {state.status === 'active' ? 'in stock' : 'out of stock'}
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
              <p id="autor">{state.fields ? state.fields[0].value : productT[0].autor}</p>
              <p id="Publication_year">{state.fields ? state.fields[1].value : 2014}</p>
              <p id="Format">{state.fields ? state.fields[2].value : 'paper'}</p>
              <p id="Cover">{state.fields ? state.fields[3].value : 'hard'}</p>
              <p id="Pages">{state.fields ? state.fields[4].value : 548}</p>
              <p id="Language">{state.fields ? state.fields[5].value : 'english'}</p>
              {/* <p id="Vendor_code">{Math.floor(Math.random() * 1000000)}</p> */}
              <p id="Vendor_code">{`01023${paramsID}`}</p>
            </div>
          </div>

          <div className="flex flex-col gap-[17px]">
            <h2 className="text-xxs tablet:text-xsx desktop:text-cartL font-bold uppercase">Book description</h2>
            <p className="text-xxxs tablet:text-xxs tracking-tight font-light leading-relaxed ">
              {state.description ? state.description : (
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non obcaecati, eos ipsam laudantium doloribus, voluptatem eligendi iure odio totam nihil earum veritatis nulla vitae voluptate reiciendis laborum esse ipsum cum?'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
