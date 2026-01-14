import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name && password) {
      localStorage.setItem("username", name); // ✅ save name
      navigate("/home");
    } else {
      alert("Enter name & password");
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" style={{ width: "120px" }} />
      <h2>Login</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "10px" }}>
        New user?
        <span
          style={{ color: "#ff9800", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          {" "}Register
        </span>
      </p>
    </div>
  );
}

export default Login;
