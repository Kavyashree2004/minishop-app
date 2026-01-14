function Checkout() {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <input placeholder="Address" />
      <br /><br />
      <input placeholder="Phone Number" />
      <br /><br />
      <button onClick={() => alert("Order Successful 🎉")}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;


