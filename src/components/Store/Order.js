import React from "react";
import { formatPrice } from "./../../utils/helpers";
import PropType from "prop-types";

const Order = props => {
  const renderOrder = key => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }

    return (
      <li key={key}>
        {count} lbs {fish.name} {formatPrice(count * fish.price)}
        <button onClick={() => props.onRemoveOrder(key)}>&times;</button>
      </li>
    );
  };

  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (isAvailable) return prevTotal + count * fish.price;
    return prevTotal;
  }, 0);
  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <ul>{orderIds.map(renderOrder)}</ul>
      <div className="total">
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propType = {
  fishes: PropType.shape({
    name: PropType.string.isRequired,
    price: PropType.number.isRequired,
    status: PropType.string.isRequired,
    desc: PropType.string.isRequired,
    image: PropType.string.isRequired
  }),
  order: PropType.object.isRequired
};

export default Order;
