import { Contact } from "@/app/components/AboutUs/Contact";

export default function Exchange() {
  return (
    <section>
      <ul>
        <li>
          <h2>Easy Returns Process</h2>
          <p>
            If you&apost;re not satisfied with your purchase, simply initiate a
            return within 14 days of receiving your order. We accept returns for
            any reason, whether it&apos;s due to a change of heart or a product
            defect.
          </p>
        </li>
        <li>
          <h2>Fast Refunds</h2>
          <p>
            Once we receive your returned item(s), we&apos;ll process your
            refund promptly. Expect to see the refund credited back to your
            original payment method within 30 business days.
          </p>
        </li>
        <li>
          <h2>Conditions for Returns</h2>
          <ul>
            <li>
              Items must be returned in their original condition, unused and
              with all tags attached.
            </li>
            <li>
              Returns must be initiated within [number] days of receiving your
              order.
            </li>
            <li>
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
