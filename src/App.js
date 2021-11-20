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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Categoriesbar />
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
        </Switch>
        <h1>Footer</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
