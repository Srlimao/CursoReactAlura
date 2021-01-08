class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }
    inscrever(func){
        this._inscritos.push(func);
    }
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f=> f !== func);
    }
    _notificar(){
        this._inscritos.forEach(func => func(this.categorias));
    }
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this._notificar();
    }
}
 
export default Categorias;