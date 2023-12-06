import React from "react";
import "./whyUs.scss";
import { Data } from "./constant";
import Image from "next/image";

const WhyUs = () => {
  return (
    <>
      <div className="why-us">
        <div className="container pt-5 pb-5">
          <div className="head mb-5">
            <h1> Why Us! </h1>
            <p> The Best In The crypto Industry </p>
          </div>
          <div className="row">
            {Data.map((el, index) => (
              <div className="col-md-4 mb-4 card-data" key={index}>
                <Image src={el.img} alt="" width={100} height={50} />
                <div className="title-description">
                  <h2> {el.title} </h2>
                  <p> {el.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
