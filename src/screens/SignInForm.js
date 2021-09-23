import React, {useState} from "react";
import useInput from "../hooks/useInput";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

export default function SignInForm(props) {
  const {handleSignIn} = props;
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password, setError);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
            <button className="checkout-submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
