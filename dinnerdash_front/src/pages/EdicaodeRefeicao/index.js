import React, { Component } from "react";
import "./style.css";
import BannerBackoffice from "../../components/BannerBackoffice";
import NavBar from "../../components/NavBar";

export default class EdicaodeRefeicao extends Component {
    render() {
      return (
        <div >
            <BannerBackoffice />
            <NavBar />
        </div>
      );
    }
  }