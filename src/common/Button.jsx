import React from "react";
import "./button.scss";
import Image from "next/image";

const Button = ({ children }) => {
  return (
    <>
      <div className="btn-left">
        <div className="btn-content btn-content-large">{children}</div>
        <Image
          src="/assets/img/btn-right-large.svg"
          alt="thnkrai"
          className="right-svg"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Button;
