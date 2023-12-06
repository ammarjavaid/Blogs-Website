import React from "react";
import { ServicesData } from "./constant";
import Link from "next/link";
import "./services.scss";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="container services mt-5 mb-5">
        <div className="head">
          <h1> Services </h1>
          <p> Buy, Sell And Exchange Cryptocurrency </p>
        </div>
        <div className="services-cards">
          {ServicesData.map((el, index) => (
            <div className="cards" key={index}>
              <Image src={el.img} alt="" width={100} height={100} />
              <h2> {el.title} </h2>
              <p> {el.description} </p>
              <Link href="#"> Read more </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
