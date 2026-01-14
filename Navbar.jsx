import { useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>🛍 MiniShop</h2>

      <div>
        <span>🛒 {cartCount}</span>
        <button onClick={logout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
