import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
      });
      alert("Registered: " + res.data.email);
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      alert("Logged in: " + res.data.email);
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleRegister}>Register</button>

      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
