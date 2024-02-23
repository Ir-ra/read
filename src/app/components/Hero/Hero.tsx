
"use client";
import Link from "next/link";
import Image from "next/image";
import Fantasy from "../../assets/img/hero/Book1.png";
import Fiction from "../../assets/img/hero/Book2.png";
import NonFiction from "../../assets/img/hero/Book3.png";
import Mystery from "../../assets/img/hero/Book4.png";
import Drama from "../../assets/img/hero/Book5.png";

import { ShopLink } from "../ShopLink/ShopLink";
import { ArrowRightIcon, ArrowLeftIcon } from "../../components/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState } from "react";

function SampleNextArrow(props: any) {
  const [isHovered, setIsHovered] = useState(false);
  const { onClick } = props;
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      className="ml-[115px] hidden desktop:block"
      aria-label="right"
    >
      <ArrowRightIcon
        className="stroke-current"
        strokeWidth={isHovered ? "2" : "1"}
      />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="desktop:block hidden"
      style={{ position: "absolute", bottom: "0" }}
      aria-label="left"
    >
      <ArrowLeftIcon
        className="stroke-current"
        strokeWidth={isHovered ? "2" : "1"}
      />
    </button>
  );
}

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const h3 =
  "text-xxs uppercase text-AccentYellow font-bold mb-2 tablet:mb-4 tablet:text-xsx desktop:text-sm";
const h2 =
  "text-titleHeroMob uppercase text-Black font-bold mb-4 desktop:text-xl desktop:mb-8";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse tablet:flex-row justify-center pt-10 px-6 pb-20 tablet:pb-0 tablet:px-10 tablet:pt-0">
      <div className=" mx-auto  w-[327px] tablet:mx-0 tablet:w-[322px] desktop:w-[670px] tablet:mt-[120px] tablet:mr-5">
        <Slider {...settings}>
          <div className="pl-[1px]">
            <h3 className={h3}>MORE THAN BOOKSTORE</h3>
            <h1 className={h2} style={{ letterSpacing: "0.48px" }}>
              VartoRead
            </h1>
            <h2 className="mb-10 text-s uppercase font-light tablet:text-sm desktop:text-l desktop:mb-16">
              Connect. Explore. Read.
            </h2>
            <ShopLink />
          </div>

          <div className="pl-[1px]">
            <h3 className={h3}>Sale</h3>
            <h2 className={h2}>
              Sale up to
              <br />
              -40%
            </h2>
            <ShopLink />
          </div>


          <div className="pl-[1px]">
            <h3 className={h3}>unique opportunity</h3>
            <h2 className={h2}>
              add the <br />
              autograph
            </h2>
            <ShopLink />
          </div>
        </Slider>
      </div>
      <div className="flex justify-center">
        <ul className="flex mb-10 tablet:mb-0 tablet:mt-2 desktop:px-10 items-end">
          <li
            style={{ flex: "flex: 1 0 0" }}
            className="h-[336px] tablet:h-[452px] desktop:h-[616px] hoverHeroBooks"
          >
            <Link href="/" className="h-[100%] flex cursor-pointer">
              <Image src={Fantasy} alt="to fantasy" />
            </Link>
          </li>
          <li
            style={{ flexShrink: "0" }}
            className="h-[288px] tablet:h-[380px] desktop:h-[544px] desktop:w-[88px] hoverHeroBooks"
          >
            <Link href="/" className="h-[100%] flex">
              <Image src={Fiction} alt="to fiction" />
            </Link>
          </li>
          <li
            style={{ flex: "flex: 1 0 0" }}
            className="h-[320px] tablet:h-[436px] desktop:h-[600px] hoverHeroBooks"
          >
            <Link href="/" className="h-[100%] flex">
              <Image src={NonFiction} alt="to not-fiction" />
            </Link>
          </li>
          <li
            style={{ flex: "flex: 1 0 0" }}
            className="h-[264px] tablet:h-[324px] desktop:h-[488px] hoverHeroBooks"
          >
            <Link href="/" className="h-[100%] flex">
              <Image src={Mystery} alt="to mystery" />
            </Link>
          </li>
          <li
            style={{ flexShrink: "0" }}
            className="h-[382px] tablet:h-[492px] desktop:h-[656px] w-14 desktop:w-[88px] hoverHeroBooks"
          >
            <Link href="/" className="h-[100%] flex">
              <Image src={Drama} alt="to drama" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};