import React, { Component } from "react";
import "./style.css";
import {login}from"../../api"

export default class Cardrefeicoes extends Component {
  state = {
    nome: "",
    categoria: "",
    descricao: "",
    preco: 0.0
  };

  updateNome = event => {
    this.setState({ nome: event.target.value });
  };

  updateDescricao = event => {
    this.setState({ descricao: event.target.value });
  };

  updateCategoria = event => {
    this.setState({ categoria: event.target.value });
  };

  updatePreco = event => {
    this.setState({ preco: event.target.value });
  };

  send = event => {
    event.preventDefault();

    login(this.state.nome, this.state.categoria, this.state.descricao, this.state.preco).catch(err => this.setState({ hasError: true }));
  };


  render() {
    console.log(this.state.nome);
    console.log(this.state.categoria);
    console.log(this.state.descricao);
    console.log(this.state.preco);

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
                value={this.state.nome}
                onChange={this.updateNome}
                class="form-control"
                id="inputEmail4"
                placeholder="Coca-cola"
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputPassword4">Categoria</label>
              <input
                value={this.state.categoria}
                onChange={this.updateCategoria}
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
                  value={this.state.descricao}
                  onChange={this.updateDescricao}
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
              <input 
              value={this.state.preco}
              onChange={this.updatePreco}
              type="text" 
              class="form-control" 
              id="inputCity" />
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
