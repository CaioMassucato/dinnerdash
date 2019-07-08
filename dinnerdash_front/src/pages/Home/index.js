import React, { Component } from "react";
import "./style.css";
import Banner from "../../components/Banner";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="container">
          <h1 className="vermelho">Home</h1>
          <button className="btn btn-success">ola</button>
        </div>
      </div>
    );
  }
}
