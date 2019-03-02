import React from "react";
import PropType from "prop-types";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

const Inventory = props => {
  return (
    <div className="inventory">
      <h2>Inventory!!!</h2>
      <AddFishForm onAddFish={props.onAddFish} />
      {Object.keys(props.fishes).map(key => (
        <EditFishForm
          key={key}
          onEditFish={props.onEditFish}
          index={key}
          onDeleteFish={props.onDeleteFish}
          fish={props.fishes[key]}
        />
      ))}

      <button onClick={props.onSampleFishes}>Load Sample Fish</button>
    </div>
  );
};

Inventory.propType = {
  onAddFish: PropType.func.isRequired,
  onSampleFishes: PropType.func.isRequired,
  onEditFish: PropType.func.isRequired,
  fishes: PropType.object.isRequired,
  onDeleteFish: PropType.func.isRequired
};

export default Inventory;
