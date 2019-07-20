import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BackLast from "./pages/BackLast";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/last" component={BackLast} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
