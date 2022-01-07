import React, { useState } from "react";

function CardForm(props) {
  const { setStep, handleSubmit } = props;
  const [values, setValues] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  return (
    <div>
      <form className="card-form">
        <p>Enter Your Card Details</p>
        <input
          className="name-on-card"
          type="text"
          name="nameOnCard"
          placeholder="Name On Card"
          value={values.nameOnCard}
          onChange={(event) => {
            setValues({ ...values, nameOnCard: event.target.value });
          }}
        />
        <div className="card-form-middle-row">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={values.cardNumber}
            onChange={(event) => {
              setValues({ ...values, cardNumber: event.target.value });
            }}
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            value={values.expirationDate}
            onChange={(event) => {
              setValues({ ...values, expirationDate: event.target.value });
            }}
          />
        </div>
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={values.cvv}
          onChange={(event) => {
            setValues({ ...values, cvv: event.target.value });
          }}
        />
      </form>
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          setStep(0);
        }}
      >
        Back
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CardForm;
