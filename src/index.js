import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StorePicker from "./components/StorePicker/StorePicker";
import Store from "./components/Store/Store";
import NotFound from "./components/NotFound";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:id" component={Store} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
