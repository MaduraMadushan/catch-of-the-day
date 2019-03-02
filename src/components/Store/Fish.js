import React from "react";
import PropType from "prop-types";

import { formatPrice } from "./../../utils/helpers";

const Fish = props => {
  const { name, price, status, desc, image } = props.fishes;
  const isAvailable = status === "available";
  return (
    <li>
      <img src={image} alt={name} />
      <h3>
        {name} <span>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        onClick={() => props.onAddToOrder(props.index)}
        disabled={!isAvailable}
      >
        {isAvailable ? "Add To Order" : "Sold Out!"}
      </button>
    </li>
  );
};

Fish.propType = {
  fishes: PropType.shape({
    name: PropType.string.isRequired,
    price: PropType.number.isRequired,
    status: PropType.string.isRequired,
    desc: PropType.string.isRequired,
    image: PropType.string.isRequired
  }),
  index: PropType.number.isRequired,
  onAddToOrder: PropType.func.isRequired
};

export default Fish;
