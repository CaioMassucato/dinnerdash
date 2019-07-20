import React, { Component } from "react";
import "./style.css";

export default class CategoriaRefeicoes extends Component {
  render() {
    return (
        <form>
        <div className="form-group">
          <label for="formGroupExampleInput">Nova categoria de refeição</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="exemplo : salada"/>
        
        </div>
        
        <div classclassName="form-group">
          <label for="formGroupExampleInput2">Nome</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="exemplo : Gabriel"/>
          
        </div>
      <button type="button" class="btn btn-success">criar categoria de refeição</button>
<button type="button" class="btn btn-secondary">voltar</button>
</form>
    );
  }
}
