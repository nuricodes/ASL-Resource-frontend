import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // removes the button and displays it depending on the screensize
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i class="fas fa-american-sign-language-interpreting">
              {" "}
              SignSource
            </i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/*  (create state with click) when not clicked menu icon clicked menu bar*/}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile/learningpath"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/join"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Join
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Join</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
