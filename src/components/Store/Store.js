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

  handleSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
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
        <Inventory
          onAddFish={this.handleAddFish}
          onSampleFishes={this.handleSampleFishes}
        />
      </div>
    );
  }
}

export default Store;
