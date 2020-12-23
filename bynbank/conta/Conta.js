import Cliente from '../Cliente.js'

class Conta{
    static quantidadeDeContas = 0;

    constructor(agencia,cliente){
        if(this.constructor == Conta)
            throw(new Error('Classe Abstrata não pode ser instanciada!'));
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;

        Conta.quantidadeDeContas++;
    }

    get cliente(){
        return this._cliente;
    }  

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
            this._cliente = novoCliente;
    }    

    get saldo(){
        return this._saldo;
    }    

    _sacar(valor,taxa){
        if(this.saldo < valor) return;
        
        this._saldo -= valor * taxa;
        return valor;

    }
    sacar(valor){
        throw new Error("Metodo abstrado não implementado!");
    }

    depositar(valor){
        if(valor>0)
            this._saldo+=valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}

export default Conta