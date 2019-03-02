import React from "react";
import PropType from "prop-types";

import { formatPrice } from "./../../utils/helpers";

const Fish = props => {
  const { name, price, status, desc, image } = props.fishes;
  return (
    <li>
      <img src={image} alt={name} />
      <h3>
        {name} <span>{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
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
  })
};

export default Fish;
