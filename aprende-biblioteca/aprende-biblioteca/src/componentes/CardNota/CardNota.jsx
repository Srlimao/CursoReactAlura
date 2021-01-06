import { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSvg} from '../../assets/imgs/delete.svg'

class CardNota extends Component {
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_header">
                    <h3 className="card-nota_h3">{this.props.titulo}</h3>
                    <DeleteSvg onClick = {this.props.deletarNota.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_p">{this.props.texto}</p>
            </section>
         );
    }
}
 
export default CardNota;