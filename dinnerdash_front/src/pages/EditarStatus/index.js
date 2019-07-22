import React, { Component } from "react";
import "./style.css";
import BannerBackoffice from "../../components/BannerBackoffice";
import Navbar from "../../components/Navbar";
​
export default class EditarStatus extends Component {
  render() {
    return (
      <div >
	  	<BannerBackoffice />
		<Navbar />
		
      </div>
    );
  }
}