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
  return (
    <section className="pt-10 pb-20 desktop:pb-[120px]">
      <div className="px-[23px] mb-5 tablet:px-10 tablet:mb-10">
        <h2 className={h2}>About us</h2>
      </div>
      <div className="h-[200px] min-w-[175px] tablet:h-[181px]  tablet:min-w-[744px] desktop:h-[350px] desktop:min-w-[1440px] relative flex justify-center mb-10 desktop:mb-20">
        <Image
          src={bg_about_us}
          alt="bg"
          quality={100}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div>
        <div>
          <div className="flex mb-10 flex-col desktop:flex-row">
            <div className="tablet:w-[436px] desktop:w-[440px] mb-10">
              <h2 className={h2}>
                Welcome to Vartoread!
                <br /> We&apos;re your go-to destination for all things books.
              </h2>
            </div>
            <div>
              <p className="mb-10">
                Our mission is simple: to provide a curated selection of
                captivating reads and exceptional service. With a diverse
                collection spanning genres and formats, we aim to inspire
                readers of all interests. <br />
                By shopping with us, you&apos;re supporting authors, independent
                publishers, and the literary community. <br />
                Join our community of book lovers on social media and explore
                our blog for recommendations and insights.
              </p>
              <p>
                In our store, you will find a wide selection of books for all
                ages and interests: from classic masterpieces to modern
                bestsellers, from children&apos;s fairy tales to popular
                science. We work to ensure that you can find exactly what
                you&apos;re interested in and support you on your bookish
                journey. <br /> May every book you choose bring you joy,
                inspiration, and new knowledge. <br /> We offer a large
                selection of books and magazines as well as stationery and
                gifts.
              </p>
            </div>
          </div>
          <ul>
            {aboutUsInfo.map((info) => {
              return (
                <li key={info.id}>
                  <div>
                    <Image alt="ckpsdc" src={info.image} quality={100} />
                  </div>
                  <p>{info.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
