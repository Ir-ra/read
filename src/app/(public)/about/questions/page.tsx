import { Contact } from "@/components/AboutUs/Contact";

const questionStyles =
  "text-xxs font-bold uppercase tablet:text-sm desktop:text-l mb-5 tablet:mb-10 desktop:mb-5";
const textStyles = "text-xxxs font-light uppercase tablet:text-xxs";
export default function FAQ() {
  return (
    <section className="pt-20 px-6 tablet:px-10 flex flex-col desktop:flex-row gap-20 desktop:justify-between">
      <ul className="flex flex-col gap-10 tablet:gap-20">
        <li>
          <h2 className={questionStyles}>How can I track my order?</h2>
          <p className={textStyles}>
            Log into your VartoRead account and navigate to &quot;Order
            History&quot; for detailed tracking information. You&aros;ll also
            receive email notifications with tracking details.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>
            What payment methods do you accept?
          </h2>
          <p className={textStyles}>
            We accept major credit/debit cards, PayPal, and other secure payment
            gateways.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>How long does shipping take?</h2>
          <p className={textStyles}>
            Shipping times vary by location and method selected. Orders are
            typically processed within 2 business days, with standard shipping
            taking 5 business days.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>What is your return policy?</h2>
          <p className={textStyles}>
            Initiate a return within 14 days of receiving your items for a
            refund or exchange. Conditions apply; review our Returns & Exchanges
            policy for details.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>
            Do you offer gift wrapping services?
          </h2>
          <p className={textStyles}>
            Yes, choose gift wrapping during checkout and include a personalized
            message for the recipient.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Can I cancel or modify my order?</h2>
          <p className={textStyles}>Can I cancel or modify my order?</p>
        </li>
      </ul>
      <Contact />
    </section>
  );
}
