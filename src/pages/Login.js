import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/Login/Login.css";
import { userAtom } from "../state";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user, setUser] = useAtom(userAtom);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:1337/auth/local/",
        {
          password: password,
          identifier: email,
        },
        {
          withCredentials: true,
        }
      );

      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      setUser(result.data.user);

      alert("User Login successfully");
      setEmail("");
      setPassword("");

      history.push("/profile");
    } catch (err) {
      alert("User Details Invalid");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Fill in the information below</p>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Login</button>
        <Link to="/register" className="bottom-link">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
