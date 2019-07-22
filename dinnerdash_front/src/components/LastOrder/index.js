import React, { Component } from "react";
import "./style.css";

export default class LastOrder extends Component {
  render() {
    return (
      <div className="cart">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <span>Seu último pedido:</span>
        <p>Aguarde o seu pedido ser entregue.</p>
      </div>
    );
  }
}
