import ListaNotas from './componentes/ListaNotas'
import FormularioCadastro from './componentes/FormularioCadastro'
import ListaCategorias from "./componentes/ListaCategorias";
import { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import Categorias from './Dados/Categorias';
import Notas from './Dados/Notas';

class App extends Component{
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }


  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias = {this.categorias}
          notas = {this.notas}
        />
        <main className="conteudoPrincipal">
          <ListaCategorias
            categorias = {this.categorias}
          />

          <ListaNotas 
            notas = {this.notas}
          />
        </main>
        
      </section>
    );
  }
}

export default App;
