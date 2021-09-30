import {getAuth, signOut} from "firebase/auth";
import React from "react";
import {HiOutlineShoppingCart, HiShoppingCart} from "react-icons/hi";
import {Link, useLocation} from "react-router-dom";

export default function HeaderNav(props) {
  const {authenticationUser, handleSignOut, databaseUser} = props;
  // console.log(authenticationUser.reloadUserInfo ? true : false);
  // console.log(user.reloadUserInfo.email);
  console.log(authenticationUser.reloadUserInfo);
  const location = useLocation();
  console.log(location);
  return (
    <nav className="nav-bar flex-row space-between align-center">
      <div className="left-side-header flex-row align-center space-evenly">
        <Link className="brand" to="/">
          Aleef Store
        </Link>
        <div className="header-categories flex-row space-evenly">
          <Link className="header-links" id="cats" to="/cats">
            <h3>Cats</h3>
          </Link>
          <Link className="header-links" id="dogs" to="/dogs">
            <h3>Dogs</h3>
          </Link>
          {authenticationUser.reloadUserInfo &&
          location.pathname !== ("/register" && "/register-location") ? (
            <button className="header-links" onClick={() => handleSignOut()}>
              Sign Out
            </button>
          ) : (
            <Link className="header-links" to="/register">
              <h3>Register</h3>
            </Link>
          )}
          {authenticationUser.reloadUserInfo ? (
            ""
          ) : (
            <Link className="header-links" to="/signin">
              <h3>Sign in</h3>
            </Link>
          )}
          {authenticationUser.reloadUserInfo ? (
            <div className="header-links">
              {authenticationUser.reloadUserInfo?.email}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Link to="/cart">
        <div className="cart-icon flex-row">
          <p className="cart-number">{props.changed}</p>
          {props.changed > 0 ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
        </div>
      </Link>
    </nav>
  );
}
