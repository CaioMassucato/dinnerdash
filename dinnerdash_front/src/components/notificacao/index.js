import React, { Component } from "react";
import "./style.css";

export default class notificacao extends Component {
  render() {
    return (
      <div class="alert alert-success" role="alert">
        <strong>Pedido recebido!</strong> Aguarde na sua mesa.
      </div>
    );
  }
}
