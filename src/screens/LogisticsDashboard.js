import {collection, onSnapshot} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {db} from "../firebase.js";
import useInput from "../hooks/useInput";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Redirect} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function LogisticsDashboard() {
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user.uid === "qWPKmmaKDjf1APwemrawPPdoMmB2") {
          setAdmin(true);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
  };

  console.log(error);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    onSnapshot(collection(db, "orders"), (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  }, []);
  //   console.log(orders);
  const ordersWithProducts = orders.filter((order) => {
    if (order.quantity) {
      return order;
    }
  });
  const quantityEntries = (array) => {
    Object.entries(array)
      .flat()
      .map((value) => {
        return <p>{value}</p>;
      });
  };

  console.log(ordersWithProducts);

  const orderss = ordersWithProducts.forEach((order) => {
    console.log(order.time);
  });

  ordersWithProducts.sort((a, b) => {
    if (a.time.seconds < b.time.seconds) {
      return 1;
    }
    if (a.time.seconds > b.time.seconds) {
      return -1;
    }
    return 0;
  });

  return admin ? (
    <div className="flex-column align-center space-evenly">
      <h2>Good Morning Kilani</h2>
      <h3>{new Date().toString().slice(0, 21)}</h3>
      <div className="flex-row dashboard-row justify-center align-center">
        <h3>First Name</h3>
        <h3>Delivery Time</h3>
        <h3>Payment Type</h3>
        <h3>Phone</h3>
        <h3>Area</h3>
        <h3>Street</h3>
        <h3>Building</h3>
        <h3>Order Time</h3>
        <h3>Products</h3>
      </div>
      {ordersWithProducts.map((order) => {
        const time = new Date(order.time.seconds * 1000)
          .toString()
          .slice(0, 21);

        const products = Object.entries(order.quantity).flatMap((value) => {
          return (
            <div className="flex-row">
              <p>{value}</p>
            </div>
          );
        });

        return (
          <div className="flex-row dashboard-row justify-center align-center">
            <p>{order.databaseUser.firstName}</p>
            <p>{order.deliveryTime}</p>
            <p>{order.paymentType}</p>
            <p>{order.databaseUser.phone}</p>
            <p>{order.databaseUser.area}</p>
            <p>{order.databaseUser.street}</p>
            <p>{order.databaseUser.building}</p>
            <p>{time}</p>
            <div className="flex-column align-center dashboard-products">
              {products}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <div className="flex-row space-evenly ">
        <div className="flex-column checkout-form align-center">
          <form
            className="flex-column checkout-form align-center"
            onSubmit={handleSubmit}
          >
            <h2>Sign In</h2>
            <input
              onChange={setEmail}
              type="text"
              value={email}
              placeholder="Email"
              required
            />
            <input
              onChange={setPassword}
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              required
            />
            {showPassword ? (
              <AiFillEyeInvisible onClick={() => handleShowPassword()} />
            ) : (
              <AiFillEye onClick={() => handleShowPassword()} />
            )}
            {error ? error : ""}
            <button className="checkout-submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
