import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BackLast from "./pages/BackLast";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/last" component={BackLast} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
