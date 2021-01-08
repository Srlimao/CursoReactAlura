import { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias : []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }
    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
    }
    _handleEnter(e){
        if(e.key !== "Enter")
            return;
        this.props.categorias.adicionarCategoria(e.target.value);
        e.target.value = ""
    }
    render() { 
        return ( 
            <section className="lista-categorias">
                <ul>
                    {this.state.categorias.map((categoria,index) => {
                        return (
                            <li key={index}>
                                {categoria}
                            </li>
                        )
                    })}
                </ul>
                <input 
                    type="text"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handleEnter.bind(this)}
                />
            </section>
         );
    }
}
 
export default ListaCategorias;