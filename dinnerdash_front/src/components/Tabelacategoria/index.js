import React, { Component } from "react";
import "./style.css";

export default class Tabelacategoria extends Component {
  render() {
    return (
        <body>
        <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Número de refeições</th>
            <th scope="col">Cadastrada em</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <th scope="row">1</th>
            <td>20/10/2017</td>
            <td><div className ="editar">editar  </div>  <div className ="excluir"> excluir</div></td>
          </tr>
          <tr>
            <td>Jacob</td>
            <th scope="row">2</th>
            <td>20/10/2017</td>
            <td><div className ="editar">editar </div><div className ="excluir"> excluir</div></td>
          </tr>
          <tr>
            <td>Larry</td>
            <th scope="row">3</th>
            <td>20/10/2017</td>
            <td><div className ="editar">editar </div><div className ="excluir">  excluir</div></td>
          </tr>
          <tr>
            <td>Larry</td>
            <th scope="row">3</th>
            <td>20/10/2017</td>
            <td><div className ="editar">editar </div><div className ="excluir"> excluir</div></td>
          </tr>
          <tr>
            <td>Larry</td>
            <th scope="row">3</th>
            <td>20/10/2017</td>
            <td><div className ="editar">editar </div><div className ="excluir"> excluir</div></td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-success">nova categoria de refeição</button>
    </body>
    );
  }
}


