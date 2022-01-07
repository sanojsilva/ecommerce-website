import axios from "axios";
import { useAtom } from "jotai";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { cartItemsAtom, isCartOpenAtom, userAtom } from "../../state";

function Navbar() {
  const [user, setUser] = useAtom(userAtom);
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const history = useHistory();
  const [cartItems] = useAtom(cartItemsAtom);

  async function handleLogout() {
    await axios.post(
      "http://localhost:1337/auth/logout",
      {},
      { withCredentials: true }
    );
    sessionStorage.clear();
    setUser(null);
    history.push("/");
  }

  return (
    <div className="navbar">
      <div className="navbar-callus">Call Us : 0114 55 88 28</div>
      <div className="navbar-logo">
        <Link to="/">Avenue</Link>
      </div>
      <div className="navbar-btns">
        {!user && (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
        {user && (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            {user.username}
          </Link>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="nav-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div
          className="cart-count-container"
          onClick={() => {
            setIsCartOpen(!isCartOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nav-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="cart-count">{cartItems.length}</span>
        </div>
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar;
