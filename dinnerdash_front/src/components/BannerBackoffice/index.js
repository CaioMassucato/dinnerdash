import React, { Component } from "react";
import "./style.css";


export default class BannerBackoffice extends Component {
  render() {
    return (
      <div class="header-descricao">
        <div class="header">
        </div>
        
        <div class="produto">
              <span>dinnerdash</span>
        </div>
  
        <div class="sair">
              <span>sair</span>         
        </div>
  
        <div class="perfil">
              <span>perfil</span>
        </div>

        <div class="backoffice">
            <span>backoffice</span>
      </div>
        
        <div id="descricao">
           <span>Backoffice</span>
           <h2>Gerencie pedidos, refeições e mais.</h2>
        </div>
     </div>
    
    );
  }
}
