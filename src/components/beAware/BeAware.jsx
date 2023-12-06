import React from "react";
import "./beAware.scss";
import Link from "next/link";

const BeAware = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row box-container">
          <div className="col-md-6">
            <h2> Subscribe to our Newsletter </h2>
            <p>
              Sign up for our weekly industry updates, insider perspectives and
              in-depth market analysis.
            </p>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" placeholder="Your email" />
              <Link href="#">SUBSCRIBE</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeAware;
