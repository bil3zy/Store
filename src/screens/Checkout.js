import React from "react";
import OrderSummary from "../components/OrderSummary";
import useInput from "../hooks/useInput";

export default function Checkout() {
  const [email, setEmail] = useInput("");
  const [phone, setPhone] = useInput("");
  const [firstName, setFirstName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [address, setAddress] = useInput("");
  const [building, setBuilding] = useInput("");
  console.log(email, phone, firstName, lastName, address, building);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-row ">
      <div className="flex-column align-center">
        <h2 className="flex-column title align-center">Checkout</h2>
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
          <button>Submit</button>
        </form>
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
}
