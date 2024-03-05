import { Contact } from "@/app/components/AboutUs/Contact";

export default function Payment() {
  return (
    <section>
      <ul>
        <li>
          <h2>Secure Payment Options</h2>
          <p>
            We offer a variety of secure payment methods to ensure your
            transactions are safe and protected. Choose from credit/debit card
            payments, PayPal, or other trusted payment gateways.
          </p>
        </li>
        <li>
          <h2>Fast Order Processing</h2>
          <p>
            Once your payment is confirmed, we swiftly process your order to
            minimize any delays. Our efficient system ensures your items are
            ready for dispatch as soon as possible.
          </p>
        </li>
        <li>
          <h2>Reliable Shipping Partners</h2>
          <p>
            We collaborate with reputable shipping partners to guarantee the
            timely delivery of your books. Rest assured, your order is in good
            hands from our warehouse to your doorstep.
          </p>
        </li>
        <li>
          <h2>Tracking and Updates</h2>
          <p>
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
