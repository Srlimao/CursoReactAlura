class Notas {
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo,texto,categoria)
        this.notas.push(novaNota);
        this._notificar();
    }

    apagarNota(indice){
        console.log(indice);
        console.log(this.notas);
        this.notas.splice(indice);
        this._notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }
    _notificar(){
        this._inscritos.forEach(func => func(this.notas));
    }
}
 
export default Notas;

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}