import {collection, onSnapshot} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {db} from "../firebase.js";

export default function LogisticsDashboard() {
  const [orders, setOrders] = useState([]);

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
  //   ordersWithProducts
  //     .map((order) => {
  //       return order.quantity;
  //     })
  //     .forEach((product) => {
  //       console.log(product);
  //     });

  console.log(ordersWithProducts);

  // for (const [key, value] of Object.entries(order.quantity)) {
  //   console.log(`${key} ${value}`);
  //   }
  //   ordersWithProducts.map((order) => {
  //     return order.cart.map((cart) => {
  //       return (
  //         <div>
  //           <p>{order.cart.title}</p>
  //           <p>{order.databaseUser.firstName}</p>
  //           <p>{}</p>
  //           <p>{}</p>
  //         </div>
  //       );
  //     });
  //   })}
  //   ordersWithProducts.map((order) => {

  //   });

  console.log(orders);

  //   let uniqueProductsInCart = [...new Set]
  //   const cartProductsArray = ordersWithProducts.cart.map((product) => {
  //     return product.title;
  //   });
  //   const eachOrder = ordersWithProducts.map((order) => {
  //     return order.cart;
  //   });
  //   const [a, b] = ordersWithProducts;
  //   console.log(a.cart);
  //   .map((product) => {
  //     return product.title;
  //   });
  //   const eachOrderProductsArray = eachOrder.map((product, index, array) => {
  //     return product;
  //   });
  //   console.log(eachOrderProductsArray);
  //     const eachOrderProductsArrays = eachOrderProductsArray.map((product) => {
  //       return product;
  //     });

  //     const productsOfOrder = eachOrderProductsArray.map((element) => {
  //       return element.brand;
  //     });
  //     console.log(ordersWithProducts);
  //     console.log(productsOfOrder);
  //     console.log(eachOrder);
  //     console.log(eachOrderProductsArray[0]);
  //     console.log(
  //       eachOrderProductsArrays[1].map((product) => {
  //         return product.title;
  //       })
  //     );

  //     console.log(orders);
  let products = [];
  return (
    <div className="flex-column align-center">
      {ordersWithProducts.map((order) => {
        return (
          <div className="flex-row dashboard-row">
            <p>{order.databaseUser.firstName}</p>
            <p>{order.databaseUser.area}</p>
            <p>{order.deliveryTime}</p>
            <p>{order.paymentType}</p>
            {console.log(order)}
            {Object.entries(order.quantity).flatMap((value) => {
              return <p>{value}</p>;
            })}
          </div>
        );
      })}
      {/* {ordersWithProducts
        .map((order) => {
          return order.quantity;
        })
        .map((product) => {
          return <p>{product}</p>;
        })} */}
    </div>
  );
}
