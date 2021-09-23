import {collection, onSnapshot} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import db from "../firebase";

export default function LogisticsDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "orders"), (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  }, []);

  console.log(
    orders.map((order) => {
      return order.time ? new Date(order.time.seconds).getMinutes() : "";
    })
  );

  //   let uniqueProducts = [...new Set(cart)];
  // console.log(order.cart.map((product) => {
  //     return <p>{product.title}</p>}))

  return (
    <div>
      {orders.map((order) => {
        return (
          <div>
            <p>{order.id}</p>
            <p>
              {order.cart
                ? console.log(
                    order.cart.map((product) => {
                      return product.title;
                    })
                  )
                : ""}
            </p>
            <p>{}</p>
            <p>{order.id}</p>
          </div>
        );
      })}
    </div>
  );
}
