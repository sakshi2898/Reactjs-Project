// step-30
import React from "react";

import "./Input.css";

// Here, we are using forwardRef to pass the ref prop in input custom component. So, that ref prop can be accessible inside input custom component.
// step-31
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Here, using Spread Operator {...props.input} means that object {type="text"}  has been added*/}
      {/* step-32 */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
