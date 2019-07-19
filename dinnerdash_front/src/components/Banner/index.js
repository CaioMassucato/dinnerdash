import React, { Component } from "react";
import "./style.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="header-descricao">
        <div className="header" />

        <div className="produto">
          <span>dinnerdash</span>
        </div>

        <div className="cadastro">
          <span>cadastro</span>
        </div>

        <div className="entrar">
          <span>entrar</span>
        </div>

        <div id="descricao">
          <span>Monte o seu prato</span>
          <h2>
            Escolha sua salada, molho, prato principal, guarnição e bebida
          </h2>
        </div>
      </div>
    );
  }
}
