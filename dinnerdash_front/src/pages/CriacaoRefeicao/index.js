import React, { Component } from "react";
import "./style.css";
import BannerBackoffice from "../../components/BannerBackoffice"
import Cardrefeicoes from "../../components/Cardrefeicoes"

export default class CriacaoRefeicao extends Component {
    render() {
      return (
          <div>
              <BannerBackoffice/>
              <Cardrefeicoes/>
          </div>
      );
    }
  } 