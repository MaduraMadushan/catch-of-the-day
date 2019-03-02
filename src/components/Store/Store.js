import React, { Component } from "react";

import Header from "./Header";
import Fish from "./Fish";
import Order from "./Order";
import Inventory from "./Inventory/Inventory";

class Store extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fish />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default Store;
