import { SubscribeForm } from "./SubscribeForm";

export const Subscribe = () => {
  return (
    <section
      className="flex flex-col bg-AccentBackground
    px-6 py-[60px] tablet:p-10 tablet:pb-20
    gap-5 tablet:gap-8"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-s tablet:text-sm desktop:text-l font-bold uppercase">
          SUBSCRIBE TO THE NEWSLETTER
        </h1>

        <p className="text-xxxs tablet:text-xxs font-light uppercase">
          Once a month we will send you book reviews, promotional codes and all
          sorts of news
        </p>
      </div>

      <SubscribeForm />
    </section>
  );
};
