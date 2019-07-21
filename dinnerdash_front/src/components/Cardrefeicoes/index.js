import React, { Component } from "react";
import "./style.css";

export default class Cardrefeicoes extends Component {
  render() {
    return (
        <div class="container">
        <form>
          <div className="form-group">
            <h2>Nova refeição</h2>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputEmail4">Nome</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Coca-cola"
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputPassword4">Categoria</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Refrigerante"
              />
            </div>
          </div>
          <div className="row">
            <div className="campo-descricao">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Descrição</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputCity">Preço</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-5">
              <label for="inputState">Foto</label>
              <select id="inputState" class="form-control">
                <option selected>Escolher arquivo...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="botao">
            <button type="button" class="btn btn-success">
              Criar refeição
            </button>
            <button type="button" class="btn btn-secondary">
              Voltar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

