import React, { Component } from "react";
import "./style.css";
import PedidosAnteriores from "../../components";
export default class PedidosAnteriores extends Component {
  render() {
    return (
      <div>
        <PedidosAnteriores />
        <div class = "title">
        Pedidos anteriores
                </div>
                <div class="alert alert-info" role="alert">
                        Você ainda não fez nenhum pedido.
                      </div>
                      </div>
    );
  }
}