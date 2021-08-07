import React from "react";
import "./Nav.css";
import { Button } from "../Button/Button.style";

function Nav() {
  return (
    <div className="nav">
      <div className="left">
        <div className="wrap">
          <a href="#!" className="black">
            Products
          </a>
          <i class="ri-arrow-down-s-line black"></i>
        </div>
        <a href="#!">Collections</a>
        <a href="#!">Gifts</a>
        <a href="#!">Our magazine</a>
      </div>
      <div className="right">
        <i class="ri-search-line"></i>
        <a href="#!" className="black">
          Log In
        </a>
        <Button
          border="none"
          bg1="rgb(255,118,137)"
          bg2="linear-gradient(90deg, rgba(255,118,137,1) 23%, rgba(255,141,81,1) 78%)"
          color="white"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Nav;
