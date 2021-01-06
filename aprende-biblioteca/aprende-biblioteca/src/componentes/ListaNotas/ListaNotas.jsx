import { Component } from "react";
import CardNota from '../CardNota';
import "./estilo.css";

class ListaNotas extends Component{
    constructor(){
        super();
        this.state = {notas : []}
    }
    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }
    _novasNotas(notas){
        console.log(notas);
        this.setState({...this.state,notas})
    }
    render(){
        return (
            <ul className="lista-notas">
                    {this.state.notas.map((nota,index) => {
                        return (
                            <li key={index} className="lista-notas_li">
                                <CardNota 
                                    titulo={nota.titulo} 
                                    texto={nota.texto} 
                                    categoria={nota.categoria}
                                    deletarNota = {() => this.props.notas.apagarNota(index)}
                                />
                            </li>
                        )
                    })}
                </ul>
        );
    }
}

export default ListaNotas;
