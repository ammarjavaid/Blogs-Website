"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { FaBars } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Drawer } from "antd";
const Navbar = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      console.log(currentPosition);
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition <= 100 && isScrolled) {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  // Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={isScrolled ? "navigation-scrolled" : "navigation"}>
        <div className="container d-flex align-items-center justify-content-between">
          <div>
            <Image
              src="assets/img/logo.svg"
              alt="CryptoCrunchers"
              width={250}
              height={70}
            />
          </div>
          <ul className="nav-ul">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="#">Profile</Link>
            </li>
            <li>
              <Link href="/pricing">
                <div className="btn-cont">
                  <div className="btn-left">
                    <div className="btn-content">Join Free</div>
                  </div>
                  <div className="btn-right">
                    <div className="btn-content">
                      <AiOutlineArrowRight className="icon" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <div className="bar-icon" onClick={showDrawer}>
            <FaBars className="bar" />
          </div>
        </div>
      </div>

      <Drawer
        title="Cryto Crunchers"
        closable={false}
        onClose={onClose}
        placement="left"
        open={open}
      >
        <ul className="nav-ul-sidebar">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="#">Profile</Link>
          </li>
          <li>
            <Link href="/pricing">
              <div className="btn-cont">
                <div className="btn-left">
                  <div className="btn-content">Join Free</div>
                </div>
                <div className="btn-right">
                  <div className="btn-content">
                    <AiOutlineArrowRight className="icon" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </Drawer>

      {/* <div className={isScrolled ? "navigation-scrolled" : "navigation"}>
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

{
  /* <div className="btn-cont">
                  <div className="btn-left">
                    <div className="btn-content">Join Free</div>
                    <Image
                      src="/assets/img/btn-right.svg"
                      alt="thnkrai"
                      className="right-svg"
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className="btn-right">
                    <Image
                      src="/assets/img/btn-left.svg"
                      alt="thnkrai"
                      className="left-svg"
                      width={100}
                      height={50}
                    />
                    <div className="btn-content">
                      <AiOutlineArrowRight className="icon" />
                    </div>
                  </div>
                </div> */
}
