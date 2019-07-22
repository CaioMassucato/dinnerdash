import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FormEditUser from "./components/FormEditUser";
import BackLast from "./pages/BackLast";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import EdicaodeRefeicao from "./pages/EdicaodeRefeicao"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edituser" component={FormEditUser} />
        <Route path="/last" component={BackLast} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" exact component={Home} />
        <Route path="/editar/refeicao" exact component={EdicaodeRefeicao} />
      </Switch>
    </Router>
  );
}

export default App;
