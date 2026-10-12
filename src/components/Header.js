import { useState } from "react";
import { LOGO_UI } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <img className="logo" alt="app-logo" src={LOGO_UI} />
      <ul className="nav-items">
        <li> Online Status: {onlineStatus ? "✅" : "⛔"}</li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
