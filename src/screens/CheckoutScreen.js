import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import useInput from "../hooks/useInput";
import {MdNavigateNext} from "react-icons/md";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {db} from "../firebase.js";
import {AiOutlineDown} from "react-icons/ai";

export default function CheckoutScreen(props) {
  const {authenticationUser, databaseUser, cart, returnToInitialState} = props;

  // console.log(authenticationUser);

  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [phone, setPhone] = useInput("");
  const [area, setArea] = useInput("");
  const [street, setStreet] = useInput("");
  const [building, setBuilding] = useInput("");
  const [extra, setExtra] = useInput("");

  const [productQuantity, setProductQuantity] = useState([]);
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

  // useEffect(() => {
  //   const products = [];
  //   cart.forEach((product) => {
  //     products[product.title] = (products[product.title] || 0) + 1;
  //   });
  //   setProductQuantity(products);
  // }, [cart]);

  // console.log(productQuantity);
  let products = [];
  let quantity = {};
  cart.forEach((product) => {
    return products.push(product.title);
  });
  console.log(products);

  for (const product of products) {
    quantity[product + " x"] = quantity[product + " x"]
      ? quantity[product + " x"] + 1
      : 1;
  }
  console.log(quantity);
  let total = cart
    .map((product) => {
      return parseInt(product.price, 10);
    })
    .reduce((acc, val) => acc + val, 15);

  let subtotal = cart
    .map((product) => {
      return parseInt(product.price, 10);
    })
    .reduce((acc, val) => acc + val, 0);

  // console.log(subtotal);
  // console.log(total);
  let finalQuantity = [];
  // for (const [key, value] of Object.entries(quantity)) {
  //   console.log(key, value);
  // }
  // console.log(FinalQuantity);

  const handleDeliveryDropDown = () => {
    setShowDeliveryDropDown(!showDeliveryDropDown);
  };

  const handlePaymentDropDown = () => {
    setShowPaymentDropDown(!showPaymentDropDown);
  };

  // const newDocFirebase = async () => {
  //   const docRef = doc(db, "users", authenticationUser.uid);
  //   const payload = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     phone: phone,
  //     area: area,
  //     street: street,
  //     building: building,
  //     extra: extra,
  //     deliveryTime: chosenDeliveryDropDownOption,
  //     paymentType: chosenPaymentDropDownOption,
  //     time: serverTimestamp(),
  //   };
  //   await setDoc(docRef, payload);
  // };
  const newDocFirebaseOrder = async () => {
    await addDoc(collection(db, "orders"), {
      databaseUser: databaseUser,
      quantity: quantity,
      deliveryTime: chosenDeliveryDropDownOption,
      paymentType: chosenPaymentDropDownOption,
      total: total,
      subtotal: subtotal,
      time: serverTimestamp(),
    });
  };
  // console.log(products);
  console.log(quantity);

  // let uniqueProducts = [...new Set(cart.title)];
  // console.log(uniqueProducts);

  // const productQuantity = products.reduce((product, allProducts) => {

  // });

  // console.log(productQuantity);

  // let quantity = products.reduce((prev, curr) => {
  // return prev === curr
  // })

  // let uniqueProducts = [...new Set(products)];
  // console.log(uniqueProducts);
  // console.log(products);
  // let quantity = products.filter((val) => val === cart.title).length;
  // console.log(quantity);
  // console.log(quantity);
  // console.log(cart);
  // console.log(databaseUser);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // newDocFirebase(authenticationUser.uid);
    newDocFirebaseOrder();
    setRedirect(true);
    returnToInitialState();
  };

  console.log(databaseUser);

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
          {Object.keys(databaseUser).length > 0 ? (
            <form
              className="flex-column checkout-form align-center"
              onSubmit={onSubmitHandler}
            >
              <div>
                <h2>Hello, {databaseUser.firstName} confirm your address</h2>
                <p>area: {databaseUser.area}</p>
                <p>street: {databaseUser.street}</p>
                <p>building: {databaseUser.building}</p>
                <p>area: {databaseUser.area}</p>
              </div>
              <h2>Delivery Options</h2>
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
                Submit
              </button>
            </form>
          ) : (
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
              <h2>Delivery Options</h2>
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
                Submit
              </button>
            </form>
          )}
        </div>
        <OrderSummary total={total} subtotal={subtotal} />
      </div>
    </div>
  );
}
