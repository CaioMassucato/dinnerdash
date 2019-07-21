import React, { Component } from "react";
import FormSignIn from "../../components/FormSignIn";
import SignImg from "../../components/SignImg";
import "./style.css";

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-flex">
        <SignImg />
        <FormSignIn />
      </div>
    );
  }
}
