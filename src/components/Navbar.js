import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button] = useState(true);
  const [username, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            In-Sightz
            <i className="fa-solid fa-square-poll-vertical"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
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
                to="/Analytics"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Analytics
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Schedule"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Alerts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Alerts
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Account"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>

            <li className="nav-item">
              {username ? (
                <Link to="/Login" className="nav-links">
                  {username}
                </Link>
              ) : (
                <Link
                  to="/Login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Log-In
                </Link>
              )}
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Log-In</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
