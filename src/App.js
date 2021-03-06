import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <Router exact={true} patch="/" component={HomePage} />
      <Router exact={true} patch="/" component={HatsPage} /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
