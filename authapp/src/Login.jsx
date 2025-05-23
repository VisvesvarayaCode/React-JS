import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
      const data = await response.json();


      if (data.length > 0) {
        localStorage.setItem("userToken", "dummy_token");
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again.");
    }
  };


  return (
    <div style={{ maxWidth: "300px", margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>}
        <button type="submit" style={{ marginTop: "1rem" }}>Login</button>
      </form>
    </div>
  );
}


export default Login;
