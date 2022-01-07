import React from "react";

function OrderHistory(props) {
  const { orders } = props;

  return (
    <div className="order-history">
      <h1>Order History</h1>
      <div className="order header">
        <div>#</div>
        <div>Order Code</div>
        <div>Amount</div>
      </div>
      {orders.map((item, index) => (
        <div className="order">
          <div>{index + 1}</div>
          <div>{item.code}</div>
          <div>Rs. {item.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
