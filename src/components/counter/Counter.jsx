import React from "react";
import "./counter.scss";

const Counter = () => {
  return (
    <>
      <div className="counter">
        <div className="container mt-5 mb-5">
          <div className="row text-center">
            <div className="col-md-4 pt-5 pb-5 counter-card">
              <h1> 123456 </h1>
              <p> Today Transactions </p>
            </div>
            <div className="col-md-4 pt-5 pb-5 counter-card">
              <h1> 123456 </h1>
              <p> Monthly Transactions</p>
            </div>
            <div className="col-md-4 pt-5 pb-5 counter-card">
              <h1> 123456 </h1>
              <p> Total Transactions </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
