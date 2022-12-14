import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="nav__container">
      <div className="nav__left">
        <div className="logo__title">
          <h2 className="logo__big-title">
            Design <br />
            <span className="logo__small-title">Agency</span>
          </h2>
        </div>
        <ul>
          <li>
            <Link className="nav__item-list">Specialize in</Link>
          </li>
          <li>
            <Link className="nav__item-list">Case Study</Link>
          </li>
          <li>
            <Link className="nav__item-list"> Process</Link>
          </li>
          <li>
            <Link className="nav__item-list">Industries</Link>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <Button classes="btn__call">Schedule A Call</Button>
        <Button classes="btn__hiring">We are Hiring</Button>
      </div>
    </section>
  );
};

export default Navbar;
