import Image from "next/image";
import contact from "../../assets/img/about_us/contact.png";

export const Contact = () => {
  const normal =
    "text-center text-xxs tablet:text-xsx desktop:text-cartL font-light uppercase";
  const bold =
    "text-center text-xxs tablet:text-xsx desktop:text-cartL font-bold uppercase";
  return (
    <div className="flex flex-col tablet:flex-row desktop:flex-col gap-5 desktop:10 tablet:w-[664px] desktop:w-full tablet:mx-auto desktop:mx-0 items-center">
      <div className="max-w-[208px] desktop:mix-w-[325px]">
        <Image src={contact} width={208} height={102} alt="contacts" />
      </div>

      <div className="flex gap-4 flex-col max-w-[322px] desktop:max-w-[325px] items-center">
        <h3 className={normal}>
          For any questions you can always contact us via post
        </h3>
        <p className={bold}>hello@email.com</p>
        <p className={normal}>or via phone</p>
        <p className={bold}>0800-500-50-80</p>
      </div>
    </div>
  );
};
