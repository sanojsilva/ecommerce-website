import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/Register/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      await axios.post("http://localhost:1337/auth/local/register", {
        username: name,
        password: password,
        email: email,
      });

      alert("User Registered successfully");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      history.push("/login");
    } catch (err) {
      alert("User Details Invalid");
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Fill in the information below</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
        <Link to="/login" className="bottom-link">
          Already have an account? Login from here
        </Link>
      </form>
    </div>
  );
}

export default Register;
