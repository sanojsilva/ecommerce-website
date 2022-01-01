import React, { useState } from "react";
import Cart from "../components/Layout/Cart";
import BackButton from "../components/Shared/BackButton";
import "../components/Checkout/Checkout.css";
import ShippingDetailsForm from "../components/Checkout/ShippingDetailsForm";
import axios from "axios";

function Checkout() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    city: "",
    email: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:1337/auth/local/register", {});

      alert("User Registered successfully");
    } catch (err) {
      alert("User Details Invalid");
    }
  }

  return (
    <div className="page-container">
      <BackButton />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Cart isCheckout={true} />
        <ShippingDetailsForm values={values} setValues={setValues} />
      </div>
    </div>
  );
}

export default Checkout;
