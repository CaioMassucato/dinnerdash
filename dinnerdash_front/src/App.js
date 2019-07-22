import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FormEditUser from "./components/FormEditUser";
import BackLast from "./pages/BackLast";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import PerfildoUsuario from "./pages/PerfildoUsuario";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edituser" component={FormEditUser} />
        <Route path="/last" component={BackLast} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" exact component={Home} />
        <Route path="/userprofile" exact component={PerfildoUsuario} />
      </Switch>
    </Router>
  );
}

export default App;
