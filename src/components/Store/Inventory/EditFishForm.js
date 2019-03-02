import React from "react";
import PropType from "prop-types";

const EditFishForm = props => {
  const handleChange = event => {
    const udatedFish = {
      ...props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    props.onEditFish(props.index, udatedFish);
  };
  const { name, price, status, desc, image } = props.fish;
  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        value={name}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        placeholder="Price"
        value={price}
      />
      <select name="status" onChange={handleChange} value={status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea
        type="text"
        name="desc"
        onChange={handleChange}
        placeholder="Description"
        value={desc}
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        placeholder="Image"
        value={image}
      />
      <button onClick={() => props.onDeleteFish(props.index)}>
        Remove Fish
      </button>
    </div>
  );
};

EditFishForm.propType = {
  fish: PropType.shape({
    name: PropType.string.isRequired,
    price: PropType.number.isRequired,
    status: PropType.string.isRequired,
    desc: PropType.string.isRequired,
    image: PropType.string.isRequired
  }),
  index: PropType.number.isRequired,
  onEditFish: PropType.func.isRequired,
  onDeleteFish: PropType.func.isRequired
};

export default EditFishForm;
