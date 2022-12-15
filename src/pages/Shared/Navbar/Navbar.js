import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(true);

  const menuItems = (
    <>
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
    </>
  );

  return (
    <section className="nav__container">
      <div className="nav__left">
        <div className="logo__title">
          <h2 className="logo__big-title">
            Design <span className="logo__small-title">Agency</span>
          </h2>
        </div>
        <ul>{menuItems}</ul>
      </div>
      {/* mobile and tablet */}
      <div className="nav__icon">
        {isSmallDevice ? (
          <>
            <FaBars
              onClick={() => setIsSmallDevice(false)}
              className="BarsIcons"
            ></FaBars>
          </>
        ) : (
          <>
            <div>
              <AiOutlineClose
                onClick={() => setIsSmallDevice(true)}
                className="BarsIcons"
              />
            </div>

            <ul className="mobile__nav">
              <>{menuItems}</>
              <li>
                <Button classes="btn__call">Schedule A Call</Button>
              </li>
              <li>
                <Button classes="btn__hiring">We are Hiring</Button>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="nav__right">
        <Button classes="btn__call">Schedule A Call</Button>
        <Button classes="btn__hiring">We are Hiring</Button>
      </div>
    </section>
  );
};

export default Navbar;
