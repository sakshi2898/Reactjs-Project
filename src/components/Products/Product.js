// step-28
import { useRef, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import "./Product.css";
import Input from "../UI/Input";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Product = (props) => {
  // step-31
  const amountInputRef = useRef();

  // step-34
  const [amountIsValid, setAmountIsValid] = useState(true); // To throw the error message

  const cartCtx = useContext(CartContext);

  // step-29
  const submitHandler = (event) => {
    event.preventDefault();

    // step-32
    const enteredAmount = amountInputRef.current.value; //It returns string
    const enteredAmountNumber = +enteredAmount; //Convert number into string

    // step-33
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // // step-36
    // props.onAddCartHandler(enteredAmountNumber);
  };

  const addToCartHandler = () => {
    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount; //when click on add to basket button

    // addItem method is defined in context which point addItemToCartHandler function and in this method we have parameter "item"
    // Here, we are passing values like id, title, amount, price in 'item' parameter.
    // When we click on Add to Basket then all the data like id, image, title, amount, price is called by addItem method ot data is saved in addItem method
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      image: props.image,
      title: props.title,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <div>
          <p className="product__price">
            <small>₹</small>
            <strong>{props.price}</strong>
            <button className="productButton" onClick={addToCartHandler}>
              <FavoriteIcon />
            </button>
          </p>
        </div>
      </div>
      <img src={props.image} alt="" />
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="product__star" />
          ))}
      </div>

      {/* step-30 */}
      <form onSubmit={submitHandler}>
        <Input
          // step-32
          ref={amountInputRef}
          label="Quantity"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "0",
          }}
        />
      </form>
      <button className="productCartButton" onClick={addToCartHandler}>
        Add to Cart
      </button>
      {/* step-35 */}
      {!amountIsValid && <p>Please enter a correct quantity.</p>}
    </div>
  );
};

export default Product;
