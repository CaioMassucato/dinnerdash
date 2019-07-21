import React, { Component } from "react";
import FormSignUp from "../../components/FormSignUp";
import SignImg from "../../components/SignImg";
import "./style.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-flex">
        <SignImg />
        <FormSignUp />
      </div>
    );
  }
}
