import React from "react";
import { getFunName } from "./../../utils/helpers";

const StorePicker = props => {
  const storeInput = React.createRef();
  const goToStore = event => {
    event.preventDefault();
    const storeName = storeInput.current.value;
    props.history.push(`/store/${storeName}`);
  };
  return (
    <form onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        required
        defaultValue={getFunName()}
        placeholder="Store Name"
        ref={storeInput}
      />
      <button type="submit">Visit Store</button>
    </form>
  );
};

export default StorePicker;
