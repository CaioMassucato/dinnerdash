import React, { Component } from "react";
import { update } from "../../api";
import { Redirect } from "react-router-dom";
import "./style.css";

export default class FormEditUser extends Component {
  state = {
    name: "",
    email: "",
    profile: "",
    admin: false,
    done: false
  };

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updateAdmin() {
    if (this.state.profile === "Administrador") {
      this.setState({ admin: true });
    }
  }
  updateProfile = event => {
    this.setState({ profile: event.target.value });
  };

  updateDone = event => {
    this.setState({ done: true });
  };

  send = event => {
    event.preventDefault();

    update(this.state.name, this.state.email, this.state.admin)
      .then(response => {
        alert(`Usuário atualizado ${response.data}`);
      })
      .catch(err => {
        alert(
          "Não foi possível atualizar. Verifique os dados e tente novamente."
        );
      });
  };

  render() {
    if (this.state.done) {
      return <Redirect to="/" />;
    }

    return (
      <div className="edit-user">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
          rel="stylesheet"
        />
        <span>Editar usuário</span>
        <hr />
        <div className="form-container">
          <form onSubmit={this.send}>
            <div className="form-group">
              <label for="Input1">Nome</label>
              <input
                onChange={this.updateName}
                value={this.state.name}
                type="name"
                className="form-control"
                id="Input1"
              />
            </div>

            <div className="form-group">
              <label for="Select1">Perfil</label>
              <select
                onSelect={this.updateProfile}
                value={this.state.profile}
                className="form-control"
                id="Select1"
              >
                <option>Administrador</option>
                <option>Cliente</option>
              </select>
            </div>

            <div className="form-group">
              <label for="Input2">Email</label>
              <input
                onChange={this.updateEmail}
                value={this.state.email}
                type="email"
                className="form-control"
                id="Input2"
              />
            </div>

            <div class="form-group-static">
              <label for="staticDate" class="col-lg-2 col-form-label">
                Cadastro
              </label>
              <div className="form-static-show">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticDate"
                  value="30/06/2019"
                />
              </div>
            </div>
          </form>
        </div>

        <button className="btn-success" type="submit" class="btn btn-success">
          atualizar usuário
        </button>

        <button
          onClick={this.updateDone}
          className="btn-secondary"
          type="button"
          class="btn btn-secondary"
        >
          voltar
        </button>
      </div>
    );
  }
}
