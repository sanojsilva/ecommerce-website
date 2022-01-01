import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cartItemsAtom, isCartOpenAtom, userAtom } from "../../state";
import CartItem from "./CartItem";

function Cart(props) {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const [user] = useAtom(userAtom);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const history = useHistory();

  async function getCartItems() {
    if (user) {
      const result = await axios.get(
        `http://localhost:1337/carts?users_permissions_user=${user.id}`,
        { withCredentials: true }
      );
      console.log(result.data);
      setCartItems(result.data);
    }
  }

  function handleCheckout() {
    setIsCartOpen(false);
    history.push("/checkout");
  }

  useEffect(() => {
    getCartItems();
  }, [user]);

  return (
    <div
      className="cart"
      style={{
        position: props.isCheckout ? "relative" : "fixed",
        display: props.isCheckout ? "block" : isCartOpen ? "block" : "none",
        borderLeft: props.isCheckout ? 0 : "1px solid black",
      }}
    >
      {!props.isCheckout && (
        <>
          <button
            className="cart-close-btn"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          >
            X
          </button>
          <h2 className="cart-title">Your Cart</h2>
        </>
      )}
      <legend>You have {cartItems.length} items in your cart</legend>
      {cartItems.map((item) => (
        <CartItem
          cartId={item.id}
          name={item.product.name}
          price={item.price}
          qty={item.qty}
          url={`http://localhost:1337${item.product.mainImage.formats.small.url}`}
        />
      ))}
      {!props.isCheckout && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  );
}

export default Cart;
