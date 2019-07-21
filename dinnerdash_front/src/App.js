import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import FormEditUser from "./components/FormEditUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edituser" component={FormEditUser} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
