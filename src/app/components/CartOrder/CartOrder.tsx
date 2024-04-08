
export default function CartOrder() {
  return (
    <div>
    <div className="flex">
      <p>Total order</p>
      <p>$16</p>
    </div>

    <div>
      <h2>Promo Code</h2>
      <div className="flex">
        <input type="text" />
        <button>add</button>
      </div>
    </div>

    <div>
      <div className="flex">
        <p>Total order</p>
        <p>-$16</p>
      </div>

      <h2>Total to pay</h2>
      <div className="flex">
        <p>1pc</p>
        <p>$16</p>
      </div>

      <button>submit order</button>
    </div>
  </div>
  )
}
