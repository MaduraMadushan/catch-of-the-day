import React, { Component } from "react";

import Header from "./Header";
import Fish from "./Fish";
import Order from "./Order";
import Inventory from "./Inventory/Inventory";
import sampleFishes from "./../../utils/sample-fishes";

class Store extends Component {
  state = {
    fishes: {},
    order: {}
  };

  handleAddFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now}()`] = fish;
    this.setState({ fishes });
  };

  handleEditFish = (id, updatedfish) => {
    const fishes = { ...this.state.fishes };
    fishes[id] = updatedfish;
    this.setState({ fishes });
  };

  handleDeleteFish = id => {
    const fishes = { ...this.state.fishes };
    delete fishes[id];
    this.setState({ fishes });
  };

  handleSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  handleAddToOrder = id => {
    const order = { ...this.state.order };
    order[id] = order[id] + 1 || 1;
    this.setState({ order });
  };

  handleRemoveOrder = id => {
    const order = { ...this.state.order };
    delete order[id];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Freash Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                fishes={this.state.fishes[key]}
                onAddToOrder={this.handleAddToOrder}
                index={key}
              />
            ))}
          </ul>
        </div>

        <Order
          order={this.state.order}
          fishes={this.state.fishes}
          onRemoveOrder={this.handleRemoveOrder}
        />
        <Inventory
          onAddFish={this.handleAddFish}
          onSampleFishes={this.handleSampleFishes}
          onEditFish={this.handleEditFish}
          onDeleteFish={this.handleDeleteFish}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default Store;
