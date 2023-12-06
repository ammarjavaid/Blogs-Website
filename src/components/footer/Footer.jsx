import React from "react";
import "./footer.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-3">
              <h1> Logo </h1>
              {/* <img src="assets/img/logo.svg" alt="" className="f-logo" /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo. Aenean massa. Cum sociis natoque penatibus et magnis
                dis
              </p>
            </div>
            <div className="col-md-3">
              <h3> Additional Links </h3>
              <ul>
                <li>
                  <Link href="#"> Home </Link>
                </li>
                <li>
                  <Link href="#"> About </Link>
                </li>
                <li>
                  <Link href="#"> Blogs </Link>
                </li>
                <li>
                  <Link href="#"> Profile </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3> Contact us </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor aenean
              </p>
              <p>
                Enean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu.
              </p>
            </div>
            <div className="col-md-3">
              <h3> Subscribe </h3>
              <p>
                Enean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu.
              </p>
              <div className="input-field">
                <input type="text" placeholder="your e-mail" />
                <FaArrowRight className="arrow" />
              </div>
            </div>
          </div>
          <hr style={{ color: "#EFF4FD" }} />
          <div className="footer-bottom">
            <div className="left">
              <p>
                © 2024 <span>CryptoCrunchers</span>, All Rights Reserved
              </p>
            </div>
            <div className="right">
              <p> Privacy Policy Terms & Conditions </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
