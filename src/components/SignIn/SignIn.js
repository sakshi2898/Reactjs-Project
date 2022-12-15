import { Link } from "react-router-dom";
import { useState } from "react";

import "./SignIn.css";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const InputEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(event.target.value);
  };

  const InputPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
  };

  const SignInHandler = (event) => {
    event.preventDefault();
  };

  const RegisterSignInHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signIn">
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="signIn__logo">ReactMart</h1>
      </Link>

      <div className="signIn_container">
        <h2>Sign-in</h2>

        <form>
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

        <button className="signIn__signInButton" onClick={SignInHandler}>
          Sign In
        </button>

        <p>
          By continuing, you agree for ReactMart Conditions for use and Privacy
          Notice.
        </p>
        <h5>Need Help!</h5>

        <button
          className="SignIn__registerButton"
          onClick={RegisterSignInHandler}
        >
          <Link style={{ textDecoration: "none" }} to="/Register">
            {" "}
            Create your ReactMart Account{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
