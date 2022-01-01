import axios from "axios";
import { useAtom } from "jotai";
import React from "react";
import { cartItemsAtom } from "../../state";

function CartItem(props) {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  async function updateCart(type) {
    const newItems = [];

    if (props.qty === 1 && type === "minus") {
      await axios.delete(`http://localhost:1337/carts/${props.cartId}`, {
        withCredentials: true,
      });
      cartItems.forEach((item) => {
        if (item.id === props.cartId) {
          //  newItems.push(result.data);
        } else {
          newItems.push(item);
        }
      });
    } else {
      const result = await axios.put(
        `http://localhost:1337/carts/${props.cartId}`,
        {
          qty: type === "plus" ? props.qty + 1 : props.qty - 1,
        },
        { withCredentials: true }
      );

      cartItems.forEach((item) => {
        if (item.id === props.cartId) {
          newItems.push(result.data);
        } else {
          newItems.push(item);
        }
      });
    }

    setCartItems(newItems);
  }

  return (
    <div className="cart-item">
      <img src={props.url} alt="" />
      <div className="cart-item-info">
        <h3>{props.name}</h3>
        <p>Price: {props.price}</p>
        <p>Qty: {props.qty}</p>
        <p>Total: {props.price * props.qty}</p>
        <div>
          <button className="cart-btn" onClick={() => updateCart("plus")}>
            +
          </button>
          <button className="cart-btn" onClick={() => updateCart("minus")}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
