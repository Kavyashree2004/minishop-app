import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name && email && password) {
      alert("Registered Successfully 🎉");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" style={{ width: "120px" }} />
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p style={{ marginTop: "10px" }}>
        Already have an account?
        <span
          style={{ color: "#ff9800", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {" "}Login
        </span>
      </p>
    </div>
  );
}

export default Register;
