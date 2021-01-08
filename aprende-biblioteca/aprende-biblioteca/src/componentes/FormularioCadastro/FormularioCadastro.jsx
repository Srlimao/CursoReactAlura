import { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this);
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

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(ev){
        ev.stopPropagation();
        this.texto = ev.target.value;
    }

    _criarNota(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.props.notas.adicionarNota(this.titulo,this.texto,this.categoria);
    }

    _handleMudancaCategoria(ev){
        ev.preventDefault();
        ev.stopPropagation();
        this.categoria = ev.target.value;
    }

    render(){
        return(
            <section onSubmit = {this._criarNota.bind(this)}>
                <form className="form-cadastro">
                    <select name="categoria" id="category-form" onChange={this._handleMudancaCategoria.bind(this)}>
                        <option value="Sem categoria">Sem categoria</option>
                        {this.state.categorias.map((categoria,index) => {
                            return (
                                <option key={index} value={categoria}>
                                    {categoria}
                                </option>
                            )
                        })} 
                    </select>
                    <input 
                        type="text" 
                        placeholder="Titulo" 
                        className="form-cadastro_input"
                        onChange={this._handleMudancaTitulo.bind(this)}
                    />
                    <textarea 
                        rows={15} 
                        placeholder="Escreva sua nota..." 
                        className="form-cadastro_input"
                        onChange={this._handleMudancaTexto.bind(this)}
                        ></textarea>
                    <button className="form-cadastro_input form-cadastro_button">Criar Nota</button>
                </form>
            </section>
        )
    }
}

export default FormularioCadastro