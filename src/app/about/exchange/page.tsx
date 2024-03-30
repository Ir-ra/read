import { Contact } from "@/app/components/AboutUs/Contact";

export default function Exchange() {
  const questionStyles =
    "text-xxs font-bold uppercase tablet:text-sm desktop:text-l mb-5 tablet:mb-10 desktop:mb-5";
  const textStyles = "text-xxxs font-light uppercase tablet:text-xxs";
  return (
    <section className="pt-20 px-6 tablet:px-10 flex flex-col desktop:flex-row gap-20 desktop:justify-between">
      <ul className="flex flex-col gap-10 tablet:gap-20">
        <li>
          <h2 className={questionStyles}>Easy Returns Process</h2>
          <p className={textStyles}>
            If you&apost;re not satisfied with your purchase, simply initiate a
            return within 14 days of receiving your order. We accept returns for
            any reason, whether it&apos;s due to a change of heart or a product
            defect.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Fast Refunds</h2>
          <p className={textStyles}>
            Once we receive your returned item(s), we&apos;ll process your
            refund promptly. Expect to see the refund credited back to your
            original payment method within 30 business days.
          </p>
        </li>
        <li>
          <h2 className={questionStyles}>Conditions for Returns</h2>
          <ul className="list-disc">
            <li className={textStyles}>
              Items must be returned in their original condition, unused and
              with all tags attached.
            </li>
            <li className={textStyles}>
              Returns must be initiated within [number] days of receiving your
              order.
            </li>
            <li className={textStyles}>
              Personalized or customized items are not eligible for return
              unless they are defective or damaged upon receipt.
            </li>
          </ul>
        </li>
      </ul>
      <Contact />
    </section>
  );
}
