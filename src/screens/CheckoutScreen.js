import React from "react";
import {Link} from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import useInput from "../hooks/useInput";
import {MdNavigateNext} from "react-icons/md";

export default function CheckoutScreen(props) {
  const [email, setEmail] = useInput("");
  const [phone, setPhone] = useInput("");
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [address, setAddress] = useInput("");
  const [building, setBuilding] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="app-nav-bar">
        <Link to="/">Home</Link>
        <div className="nav-bar-margins">
          <MdNavigateNext />
        </div>
        <Link to="/cart">Cart</Link>
        <div className="nav-bar-margins">
          <MdNavigateNext />
        </div>
        <Link to="/CheckoutScreen">CheckoutScreen</Link>
      </div>
      <div className="flex-row space-evenly ">
        <div className="flex-column checkout-form align-center">
          <form
            className="flex-column checkout-form align-center"
            onSubmit={onSubmitHandler}
          >
            <h2>Contact Information</h2>
            <input
              onChange={setEmail}
              type="email"
              value={email}
              placeholder="Email"
            />
            <input
              onChange={setPhone}
              type="text"
              value={phone}
              placeholder="Phone"
              required
              minLength="8"
            />
            <h2>Shipping Address</h2>
            <input
              onChange={setFirstName}
              type="text"
              value={firstName}
              placeholder="First Name"
              required
            />
            <input
              onChange={setLastName}
              type="text"
              value={lastName}
              placeholder="Last Name"
            />
            <input
              onChange={setAddress}
              type="text"
              value={address}
              placeholder="Address, Area, Street"
              required
            />
            <input
              onChange={setBuilding}
              type="text"
              value={building}
              placeholder="Building, Apartment"
              required
            />
            <button className="checkout-submit">Submit</button>
          </form>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
