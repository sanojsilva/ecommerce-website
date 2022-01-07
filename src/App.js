import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Topbar from "./components/Layout/Topbar";
import "./components/Layout/Layout.css";
import Navbar from "./components/Layout/Navbar";
import Categoriesbar from "./components/Layout/Categoriesbar";
import Profile from "./pages/Profile";
import { useAtom } from "jotai";
import { userAtom } from "./state";
import { useEffect } from "react";
import Cart from "./components/Layout/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Footer from "./components/Layout/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    if (sessionUser) {
      setUser(sessionUser);
    }
  }, []);

  return (
    <div>
      <Toaster position="bottom-right" />
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Categoriesbar />
        <Cart isCheckout={false} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/product-details/:id" exact>
            <ProductDetails />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
