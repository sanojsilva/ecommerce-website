import axios from "axios";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { cartItemsAtom, userAtom } from "../../state";
import toast from "react-hot-toast";

function ProductInfo(props) {
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [user] = useAtom(userAtom);

  async function handleAdd() {
    if (!user) {
      alert("Please log in");
      return;
    }

    const item = cartItems.find((item) => {
      return item.product.id === props.id;
    });

    if (item) {
      toast.error("Item is already in the cart");
      return;
    }

    const result = await axios.post(
      "http://localhost:1337/carts",
      {
        product: props.id,
        qty: parseInt(qty),
        price: parseFloat(props.price),
        users_permissions_user: user.id,
      },
      { withCredentials: true }
    );

    setCartItems([...cartItems, result.data]);

    console.log(result.data);
    toast.success("Item added Successfully");
  }

  return (
    <div className="product-info">
      <h2>{props.name}</h2>
      <div>Rs. {props.price}</div>
      <p>{props.description}</p>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductInfo;
