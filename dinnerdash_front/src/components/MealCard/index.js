import React, { Component } from "react";
import "./style.css";

export default class MealCard extends Component {
  render() {
    return (
      <div className="cart-flex1">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
          rel="stylesheet"
        />
        <div className="cart-img" />

        <div className="cart-info">
          <p>{this.props.name}</p>
          <p>Quantidade: 2</p>
          <p>Preço unitário: R${this.props.price}</p>
          <p>Preço total: R$ 24,00</p>
        </div>
      </div>
    );
  }
}
