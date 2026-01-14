import { useNavigate } from "react-router-dom";

import phoneImg from "../assets/phone.jpeg";
import laptopImg from "../assets/laptop.png";
import budsImg from "../assets/buds.jpg";


function Home() {
  const navigate = useNavigate();

  const products = [
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
      image:budsImg,
    },
  ];

  return (
    <div className="container">
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid rgb(221, 221, 221)",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px", marginBottom: "10px" }}
          />

          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <button onClick={() => navigate("/cart")}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
