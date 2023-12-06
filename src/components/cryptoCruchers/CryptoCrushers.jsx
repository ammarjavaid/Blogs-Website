import React from "react";
import "./cryptoCruchers.scss";
// import { BitCoin } from "../../../public";
import BitCoin from "../../../public/assets/img/bitcoin.png";
import Button from "@/common/Button";
import Image from "next/image";

const CryptoCrushers = () => {
  return (
    <>
      <div className="container CryptoCrushers mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="img">
              <Image
                src="/assets/img/bitcoin.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <h1> What is CryptoCrushers </h1>
            <p style={{ fontWeight: "bold" }}>
              Bitcoin is an innovative payment network and a new kind of money.
            </p>
            <p>
              Bitcoin is one of the most important inventions in all of human
              history. For the first time ever, anyone can send or receive any
              amount of money with anyone else, anywhere on the planet,
              conveniently and without restriction. It’s the dawn of a better,
              more free world.
            </p>
            <Button className="get-start">Get Started</Button>
            {/* <button className="get-started"> Get Started </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCrushers;
