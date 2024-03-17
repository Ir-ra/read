import Image from "next/image";
import about_us_1 from "../../assets/img/about_us/about_us_1.png";
import about_us_2 from "../../assets/img/about_us/about_us_2.png";
import about_us_3 from "../../assets/img/about_us/about_us_3.png";
import bg_about_us from "../../assets/img/about_us/bg_about_us.png";

const aboutUsInfo = [
  {
    id: "1",
    image: about_us_1,
    text: "In 2020, we decided to expand our horizons and started our own production of unique stationery and souvenirs. With the help of leading modern designers, we create not only notebooks and notebooks, envelopes and bookmarks, but also stylish eco-bags and unusual badges to give you even more joy and inspiration.",
  },
  {
    id: "2",
    image: about_us_2,
    text: "Vartoread organizes online meetings with famous writers and journalists, publishers and critics, academics and journalists to give you a deeper insight into the book world.",
  },
  {
    id: "3",
    image: about_us_3,
    text: "The Vartoread team actively promotes the development of children's literature. This team not only responsibly maintains the shelves of the children's department, but also frequently organizes creative workshops for children and teenagers.",
  },
];

export const AboutUsInfo = () => {
  const h2 = "text-s tablet:text-sm desktop:text-l font-bold uppercase";
  const p = "text-xxxs tablet:text-xxs font-light small-caps";
  return (
    <section className="pt-10 pb-20 desktop:pb-[120px]">
      <div className="px-[23px] mb-5 tablet:px-10 tablet:mb-10">
        <h2 className={h2}>About us</h2>
      </div>
      <div className="h-[200px] min-w-[175px] tablet:h-[181px]  tablet:min-w-[744px] desktop:h-[350px] desktop:min-w-[1440px] relative flex justify-center">
        <Image
          src={bg_about_us}
          alt="bg"
          quality={100}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="px-6 tablet:px-10 pt-10 desktop:pt-20">
        <div className="flex mb-10 flex-col desktop:flex-row desktop:gap-[135px] desktop:justify-between">
          <div>
            <h2 className="mb-10 desktop:mb-0 tablet:w-[436px] desktop:w-[440px] block text-s tablet:text-sm desktop:text-l uppercase font-bold">
              Welcome to Vartoread!
              <br /> We&apos;re your go-to destination for all things books.
            </h2>
          </div>
          <div className="desktop:w-[670px]">
            <p className={p} style={{ marginBottom: "40px" }}>
              Our mission is simple: to provide a curated selection of
              captivating reads and exceptional service. With a diverse
              collection spanning genres and formats, we aim to inspire readers
              of all interests. <br />
              By shopping with us, you&apos;re supporting authors, independent
              publishers, and the literary community. <br />
              Join our community of book lovers on social media and explore our
              blog for recommendations and insights.
            </p>
            <p className={p}>
              In our store, you will find a wide selection of books for all ages
              and interests: from classic masterpieces to modern bestsellers,
              from children&apos;s fairy tales to popular science. We work to
              ensure that you can find exactly what you&apos;re interested in
              and support you on your bookish journey. <br /> May every book you
              choose bring you joy, inspiration, and new knowledge. <br /> We
              offer a large selection of books and magazines as well as
              stationery and gifts.
            </p>
          </div>
        </div>
        <ul>
          {aboutUsInfo.map((info) => {
            return (
              <li key={info.id} className="desktop:flex desktop:gap-5 items-center justify-end max-w-[327px] tablet:min-w-[436px] desktop:min-w-full mx-auto desktop:mx-0">
                <div className="flex justify-center">
                  <Image alt="ckpsdc" src={info.image} quality={100} />
                </div>
                <div className="desktop:w-[670px]">
                  <p className={p}>{info.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
