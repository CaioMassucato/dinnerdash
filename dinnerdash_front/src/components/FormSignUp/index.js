import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./style.css";
import { signup } from "../../api";
import { WARNING } from "jest-validate/build/utils";

export default class FormSignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    redirect: false,
    login: false
  };

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  updateConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  updateLogin = event => {
    this.setState({ login: true });
  };

  send = event => {
    event.preventDefault();

    signup(this.state.name, this.state.email, this.state.password)
      .then(response => {
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/signin" />;
    }

    if (this.state.login) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="login-container">
        <div className="menu">
          <h1>dinnerdash</h1>
        </div>
        <br />

        <form className="sign-form" onSubmit={this.send}>
          <div className="form-group">
            <label htmlFor="InputName">Nome</label>
            <input
              onChange={this.updateName}
              value={this.state.name}
              type="name"
              className="form-control"
              id="InputName"
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="InputPasswordConfirmation">
              Confirme sua Senha
            </label>
            <input
              onChange={this.updateConfirmPassword}
              value={this.state.confirmPassword}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            fazer cadastro
          </button>

          <div className="linha">
            <hr />
          </div>

          <div className="form-group2">
            <span>Já possui conta?</span>
          </div>
          <button
            onClick={this.updateLogin}
            className="btn btn-outline-success btn-block"
          >
            fazer login
          </button>
        </form>
      </div>
    );
  }
}
