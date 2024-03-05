import { Contact } from "@/app/components/AboutUs/Contact";

export default function FAQ() {
  return (
    <section>
      <ul>
        <li>
          <h2>How can I track my order?</h2>
          <p>
            Log into your VartoRead account and navigate to &quot;Order
            History&quot; for detailed tracking information. You&aros;ll also
            receive email notifications with tracking details.
          </p>
        </li>
        <li>
          <h2>What payment methods do you accept?</h2>
          <p>
            We accept major credit/debit cards, PayPal, and other secure payment
            gateways.
          </p>
        </li>
        <li>
          <h2>How long does shipping take?</h2>
          <p>
            Shipping times vary by location and method selected. Orders are
            typically processed within 2 business days, with standard shipping
            taking 5 business days.
          </p>
        </li>
        <li>
          <h2>What is your return policy?</h2>
          <p>
            Initiate a return within 14 days of receiving your items for a
            refund or exchange. Conditions apply; review our Returns & Exchanges
            policy for details.
          </p>
        </li>
        <li>
          <h2>Do you offer gift wrapping services?</h2>
          <p>
            Yes, choose gift wrapping during checkout and include a personalized
            message for the recipient.
          </p>
        </li>
        <li>
          <h2>Can I cancel or modify my order?</h2>
          <p>Can I cancel or modify my order?</p>
        </li>
      </ul>
      <Contact />
    </section>
  );
}
