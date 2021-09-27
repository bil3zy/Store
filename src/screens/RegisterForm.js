import React, {useState} from "react";
import useInput from "../hooks/useInput";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Link, Redirect} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import db from "../firebase";

export default function RegisterForm(props) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmedPassword, setConfirmedPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const {authenticationUser, handleSignIn} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      setError("Password does not match");
    } else if (password.length < 8) {
      setError("Password has to be atleast 8 characters");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode);
          setError(`Error ${errorCode}`);
        })
        .then(
          setTimeout(() => {
            handleSignIn(email, password, setError);
          }, 2000)
        );
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  const handleProceedToAddress = () => {
    setRedirect(true);
  };

  // console.log(authenticationUser.uid);
  // console.log(redirect);
  return (
    <div>
      <div className="flex-row space-evenly ">
        <div className="flex-column checkout-form align-center">
          <form
            className="flex-column checkout-form align-center"
            onSubmit={handleSubmit}
          >
            <h2>Register</h2>
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
            <input
              onChange={setConfirmedPassword}
              type={showConfirmedPassword ? "text" : "password"}
              value={confirmedPassword}
              placeholder="Confirm Password"
              required
            />
            {showConfirmedPassword ? (
              <AiFillEyeInvisible
                onClick={() => handleShowConfirmedPassword()}
              />
            ) : (
              <AiFillEye onClick={() => handleShowConfirmedPassword()} />
            )}
            {error ? error : ""}
            {authenticationUser.reloadUserInfo ? (
              ""
            ) : (
              <button className="checkout-submit">Submit</button>
            )}
            {authenticationUser.reloadUserInfo ? (
              <button
                className="checkout-submit"
                onClick={() => handleProceedToAddress()}
              >
                {redirect ? <Redirect to="/register-location"></Redirect> : ""}
                Proceed to Address
              </button>
            ) : (
              ""
            )}
          </form>
          <h2>
            Already have an account? <Link to="/signin">Sign In</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
