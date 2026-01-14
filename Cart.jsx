import { useNavigate } from "react-router-dom";

import phoneImg from "../assets/phone.jpeg";
import laptopImg from "../assets/laptop.png";
import budsImg from "../assets/buds.jpg";


function Cart() {
  const navigate = useNavigate();
  

  const cartItems = [
    {
      id: 1,
      name: "Mobile Phone",
      price: "₹10,000",
      image: phoneImg,
    },
    {
      id: 2,
      name: "Laptop",
      price: "₹45,000",
      image: laptopImg,
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹2,000",
      image: budsImg,
    },
  ];

  return (
    <div className="container">
      <h2>Cart Page</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ff6a00",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "120px" }}
          />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}

      <button onClick={() => navigate("/checkout")}>
        Proceed to Buy
      </button>
    </div>
  );
}

export default Cart;
