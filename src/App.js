import Header from "./components/Header/Header";
import ProductItem from "./components/Products/ProductItem";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import SignIn from "./components/SignIn/SignIn";
import Wishlist from "./components/WishList/wishlist";
import Register from "./components/Register/Register";

// Step-7
import CartProvider from "./components/Store/CartProvider";

function App() {
  return (
    // Step-8 - Wrap CartProvider Component as a root element
    <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <ProductItem />
            </Fragment>
          }
        />
        <Route
          path="/cart"
          element={
            <Fragment>
              <Header />
              <Cart />
            </Fragment>
          }
        />
        <Route
          path="/SignIn"
          element={
            <Fragment>
              <SignIn />
            </Fragment>
          }
        />
        <Route
          path="/Register"
          element={
            <Fragment>
              <Register />
            </Fragment>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Fragment>
              <Header />
              <Wishlist />
            </Fragment>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
