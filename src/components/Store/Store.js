import React, { Component } from "react";

import Header from "./Header";
import Fish from "./Fish";
import Order from "./Order";
import Inventory from "./Inventory/Inventory";

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

  render() {
    return (
      <div>
        <Header tagline="Freash Seafood Market" />
        <ul>
          {Object.keys(this.state.fishes).map(key => (
            <Fish key={key} fishes={this.state.fishes[key]} />
          ))}
        </ul>

        <Order />
        <Inventory onAddFish={this.handleAddFish} />
      </div>
    );
  }
}

export default Store;
