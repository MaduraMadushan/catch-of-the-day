import React from "react";
import PropType from "prop-types";

const AddFishForm = props => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descriptionRef = React.createRef();
  const imageRef = React.createRef();

  const handleCreateFish = event => {
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descriptionRef.current.value,
      image: imageRef.current.value
    };
    props.onAddFish(fish);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleCreateFish}>
      <input type="text" name="name" placeholder="Name" ref={nameRef} />
      <input type="text" name="price" placeholder="Price" ref={priceRef} />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea
        type="text"
        name="desc"
        placeholder="Description"
        ref={descriptionRef}
      />
      <input type="text" name="image" placeholder="Image" ref={imageRef} />
      <button type="submit">Add Fish</button>
    </form>
  );
};

AddFishForm.propType = {
  onAddFish: PropType.func.isRequired
};

export default AddFishForm;
