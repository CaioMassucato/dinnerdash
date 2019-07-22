import React, {Component} from 'react';

import "./style.css";

export default class FormEdicaoPerfil extends Component {
   state = {

   }
   
   render(){


      return (
      <>                
         <link href="https://fonts.googleapis.com/css?family=Hind+Siliguri&display=swap" rel="stylesheet"></link>
         
         <div className="main-block">
            <form>
               <div className="form-group row">
                  <div className="col-md-6">
                     <label>Nome</label>
                     <input type="text" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                     <label>Email</label>
                     <input type="text" className="form-control" />
                  </div>
               </div>

               <br/>

               <div className="form-group row">
                  <div className="col-md-6">
                     <label>Nova senha (deixe em branco caso não queira alterar)</label>
                     <input type="text" className="form-control"/>
                  </div>
                  <div className="col-md-6">
                     <label>Senha atual, por questão de segurança</label>
                     <input type="text" className="form-control"/>
                  </div>
               </div>
            </form>
            
            <br/>

            <button type="submit" className="btn btn-success">atualizar meu perfil</button>
         </div>
      </>
      )
   }
}