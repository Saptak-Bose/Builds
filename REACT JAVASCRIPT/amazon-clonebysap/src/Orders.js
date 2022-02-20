import React from "react";
import "./Orders.css";

function Orders() {
  return (
    <div className="Orders">
      <div className="Orders__container">
        <h1>✅ Thank You! Your Order has been placed...</h1>

        <div className="Orders__banner">
          <h2>Please checkout our other products</h2>

          <button onClick={e => history.push("/")}>Home Page</button>
        </div>
      </div>
    </div>
  )
}

export default Orders
