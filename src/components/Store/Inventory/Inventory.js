import React from "react";
import PropType from "prop-types";

import AddFishForm from "./AddFishForm";

const Inventory = props => {
  return (
    <div>
      <h2>Inventory!!!</h2>
      <AddFishForm onAddFish={props.onAddFish} />
    </div>
  );
};

Inventory.propType = {
  onAddFish: PropType.func.isRequired
};

export default Inventory;
