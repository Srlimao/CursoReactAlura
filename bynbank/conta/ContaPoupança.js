import Conta from "./Conta.js";

class ContaPoupança extends Conta{
    static quantidadeDeContas = 0;

    constructor(agencia,cliente,saldoInicial){
        super(agencia,cliente);
        this._saldo = saldoInicial;

        ContaPoupança.quantidadeDeContas++;
    }

    transferir(){
        throw new Error("Conta Poupança não pode transferir");
    }

    sacar(valor){
        const taxa = 1;
        super._sacar(valor,taxa);
    }


}

export default ContaPoupança