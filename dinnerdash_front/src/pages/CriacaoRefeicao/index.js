import React, { Component } from "react";
import "./style.css";
import BannerBackoffice from "../../components/BannerBackoffice"
import CardRefeicoes from "../../components/Cardrefeicoes"

export default class Cardrefeicoes extends Component {
    render() {
      return (
          <div>
              <BannerBackoffice/>
              <Cardrefeicoes/>
          </div>
      );
    }
  }