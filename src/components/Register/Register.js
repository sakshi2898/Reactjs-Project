import { Link } from "react-router-dom";
import { useState } from "react";

import "./Register.css";

const Register = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");

  const InputEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(event.target.value);
  };

  const InputPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
  };

  const InputFirstNameHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const InputLastNameHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const InputPhoneNumberHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };

  const RegisterSignInHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register">
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="register__logo">ReactMart</h1>
      </Link>

      <div className="register_container">
        <h2>Create Account</h2>

        <form>
          <label>First Name</label>
          <input
            type="text"
            value={enteredFirstName}
            onChange={InputFirstNameHandler}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={InputLastNameHandler}
          />
          <label>Mobile Number</label>
          <input
            type="number"
            value={enteredPhoneNumber}
            onChange={InputPhoneNumberHandler}
          />
          <label>Email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={InputEmailHandler}
          />

          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={InputPasswordHandler}
          />
        </form>
        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </p>
        <button
          className="register__registerButton"
          onClick={RegisterSignInHandler}
        >
          Continue
        </button>
        <h4>Already have an account</h4>
        <Link style={{ textDecoration: "none" }} to="/SignIn">
          Sign In
        </Link>

        <p>
          By creating an account or logging in, you agree to ReactMart'a
          Conditions of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
