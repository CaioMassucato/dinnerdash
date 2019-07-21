import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import { login } from "../../api";

export default class FormSignIn extends Component {
  state = {
    email: "",
    password: "",
    register: false
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  updateRegister = event => {
    this.setState({ register: true });
  };

  send = event => {
    event.preventDefault();

    login(this.state.email, this.state.password)
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.register) {
      return <Redirect to="/signup" />;
    }
    return (
      <div className="login-container">
        <div className="menu">
          <h1>dinnerdash</h1>
        </div>
        <br />

        <form className="sign-form" onSubmit={this.send}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              onChange={this.updateEmail}
              value={this.state.email}
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted" />
          </div>

          <div className="form-group">
            <label htmlFor="InputPassword">Senha</label>
            <input
              onChange={this.updatePassword}
              value={this.state.password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            fazer login
          </button>

          <div className="linha">
            <hr />
          </div>

          <div className="form-group2">
            <span>Não possui conta?</span>
          </div>
          <button
            onClick={this.updateRegister}
            type="submit"
            className="btn btn-outline-success btn-block"
          >
            fazer meu cadastro
          </button>
        </form>
      </div>
    );
  }
}
