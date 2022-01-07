import React from "react";

function ShippingDetailsForm(props) {
  const { values, setValues, setStep } = props;

  return (
    <div>
      <form className="shipping-form">
        <p>Fill in your shipping details</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstname}
          onChange={(event) => {
            setValues({ ...values, firstName: event.target.value });
          }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={(event) => {
            setValues({ ...values, lastName: event.target.value });
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={values.email}
          onChange={(event) => {
            setValues({ ...values, email: event.target.value });
          }}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={(event) => {
            setValues({ ...values, address: event.target.value });
          }}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={values.phoneNumber}
          onChange={(event) => {
            setValues({ ...values, phoneNumber: event.target.value });
          }}
        />
      </form>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default ShippingDetailsForm;
