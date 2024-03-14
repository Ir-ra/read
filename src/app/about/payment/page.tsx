import { Contact } from "@/app/components/AboutUs/Contact";
const questionStyles =
  "text-xxs font-bold uppercase tablet:text-sm desktop:text-l mb-5 tablet:mb-10 desktop:mb-5";
const textStyles = "text-xxxs font-light uppercase tablet:text-xxs";
export default function Payment() {
  return (
    <section className="pt-20 px-6 tablet:px-10 flex flex-col desktop:flex-row gap-20 desktop:justify-between">
      <ul className="flex flex-col gap-10 tablet:gap-20">
        <li>
          <h2 className={questionStyles}>Secure Payment Options</h2>
          <p className={textStyles}>
            We offer a variety of secure payment methods to ensure your
            transactions are safe and protected. Choose from credit/debit card
            payments, PayPal, or other trusted payment gateways.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Fast Order Processing</h2>
          <p className={textStyles}>
            Once your payment is confirmed, we swiftly process your order to
            minimize any delays. Our efficient system ensures your items are
            ready for dispatch as soon as possible.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Reliable Shipping Partners</h2>
          <p className={textStyles}>
            We collaborate with reputable shipping partners to guarantee the
            timely delivery of your books. Rest assured, your order is in good
            hands from our warehouse to your doorstep.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Tracking and Updates</h2>
          <p className={textStyles}>
            Keep track of your order every step of the way with our easy-to-use
            tracking system. Receive real-time updates on the status of your
            delivery, so you know exactly when to expect your package.
          </p>
        </li>
      </ul>
      <Contact />
    </section>
  );
}
