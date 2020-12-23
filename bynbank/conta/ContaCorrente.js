import Conta from "./Conta.js";

class ContaCorrente extends Conta{
    static quantidadeDeContas = 0;

    constructor(agencia,cliente){
        super(agencia,cliente);

        ContaCorrente.quantidadeDeContas++;
    }

    sacar(valor){
        const taxa = 1.05;
        super._sacar(valor,taxa);
    }
}

export default ContaCorrente;