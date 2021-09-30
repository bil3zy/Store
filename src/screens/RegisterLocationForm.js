import React, {useState} from "react";
import {Link, Redirect, useParams} from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import useInput from "../hooks/useInput";
import {MdNavigateNext} from "react-icons/md";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../firebase.js";
import {AiOutlineDown} from "react-icons/ai";

export default function RegisterLocationForm(props) {
  const {
    authenticationUser,
    cart,
    returnToInitialState,
    newDocFirebaseDatabaseUser,
  } = props;

  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [area, setArea] = useInput("");
  const [street, setStreet] = useInput("");
  const [building, setBuilding] = useInput("");
  const [extra, setExtra] = useInput("");

  const [redirect, setRedirect] = useState(false);

  const [showDeliveryDropDown, setShowDeliveryDropDown] = useState(false);
  const [chosenDeliveryDropDownOption, setChosenDeliveryDropDownOption] =
    useState("Delivery Times");
  const [deliveryTimes, setDeliveryTimes] = useState([
    "Day: 9AM to 12PM",
    "Night: 6PM to 9PM",
  ]);

  const [showPaymentDropDown, setShowPaymentDropDown] = useState(false);
  const [chosenPaymentDropDownOption, setChosenPaymentDropDownOption] =
    useState("Payment Type");
  const [paymentType, setPaymentType] = useState([
    "Pay by card",
    "Pay by cash",
  ]);

  console.log(authenticationUser.uid);
  const handleDeliveryDropDown = () => {
    setShowDeliveryDropDown(!showDeliveryDropDown);
  };

  const handlePaymentDropDown = () => {
    setShowPaymentDropDown(!showPaymentDropDown);
  };
  const docRef = doc(db, "users", authenticationUser.uid);
  const payload = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    area: area,
    street: street,
    building: building,
    extra: extra,
    deliveryTime: chosenDeliveryDropDownOption,
    paymentType: chosenPaymentDropDownOption,
    time: serverTimestamp(),
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    newDocFirebaseDatabaseUser(docRef, payload, setDoc);
    setRedirect(true);
    returnToInitialState();
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
              onChange={setPhone}
              type="text"
              value={phone}
              placeholder="Phone number"
              required
            />
            <input
              onChange={setArea}
              type="text"
              value={area}
              placeholder="Area"
              required
            />
            <input
              onChange={setStreet}
              type="text"
              value={street}
              placeholder="Street"
              required
            />
            <input
              onChange={setBuilding}
              type="text"
              value={building}
              placeholder="Building, Apartment"
              required
            />
            <input
              onChange={setExtra}
              type="text"
              value={extra}
              placeholder="Extra Landmarks"
            />
            <h2>Delivery Preferance</h2>
            <div className="drop-down-options">
              {chosenDeliveryDropDownOption}
              <AiOutlineDown onClick={() => handleDeliveryDropDown()} />
            </div>
            <div className="flex-column">
              {deliveryTimes.map((el) => {
                return showDeliveryDropDown ? (
                  <button
                    key={el}
                    onClick={(e) => {
                      e.preventDefault();
                      setChosenDeliveryDropDownOption(el);
                      setShowDeliveryDropDown(false);
                    }}
                  >
                    {el}
                  </button>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="drop-down-options">
              {chosenPaymentDropDownOption}
              <AiOutlineDown onClick={() => handlePaymentDropDown()} />
            </div>
            <div className="flex-column">
              {paymentType.map((el) => {
                return showPaymentDropDown ? (
                  <button
                    key={el}
                    onClick={(e) => {
                      e.preventDefault();
                      setChosenPaymentDropDownOption(el);
                      setShowPaymentDropDown(false);
                    }}
                  >
                    {el}
                  </button>
                ) : (
                  ""
                );
              })}
            </div>
            <button className="checkout-submit">
              {redirect ? <Redirect to="/"></Redirect> : ""}
              Finish Registering
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
