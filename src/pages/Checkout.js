import React, { useState } from "react";
import Cart from "../components/Layout/Cart";
import BackButton from "../components/Shared/BackButton";
import "../components/Checkout/Checkout.css";
import ShippingDetailsForm from "../components/Checkout/ShippingDetailsForm";
import axios from "axios";
import CardForm from "../components/Checkout/CardForm";
import { useAtom } from "jotai";
import { cartItemsAtom, userAtom } from "../state";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    city: "",
    email: "",
  });
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [user] = useAtom(userAtom);

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const code = uuidv4();
      let amount = 0;
      cartItems.forEach((item) => {
        amount = amount + item.qty * item.price;
      });

      const result = await axios.post(
        "http://localhost:1337/orders",
        {
          ...values,
          code: code,
          amount: amount,
          users_permissions_user: user.id,
        },
        { withCredentials: true }
      );

      const orderId = result.data.id;

      for (const item of cartItems) {
        await axios.post(
          "http://localhost:1337/orderitems",
          {
            order: orderId,
            product: item.product.id,
            qty: item.qty,
            price: item.price,
          },
          { withCredentials: true }
        );
      }

      for (const item of cartItems) {
        await axios.delete(`http://localhost:1337/carts/${item.id}`, {
          withCredentials: true,
        });
      }

      setCartItems([]);

      alert("Order Placed Successfully");
      history.push("/profile");
    } catch (err) {
      alert("Order Failed");
    }
  }

  return (
    <div className="page-container">
      <BackButton />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Cart isCheckout={true} />
        {step === 0 ? (
          <ShippingDetailsForm
            values={values}
            setValues={setValues}
            setStep={setStep}
          />
        ) : (
          <CardForm setStep={setStep} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default Checkout;
