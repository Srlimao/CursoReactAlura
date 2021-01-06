const cpfValido = (cpf) => {

    if(cpf.length != 11) return false;    
    if(cpf == '00000000000') return false;

    var digito10 = multiplicaSubstrig(cpf.substring(0,9));
    var digito11 = multiplicaSubstrig(cpf.substring(0,10));

    var cpfArr = [...cpf];

    return cpfArr[9] == digito10 && cpfArr[10] == digito11;
}

const multiplicaSubstrig = (cpfSubstring) => {
    let somatorio = 0;
    let multiplicador = cpfSubstring.length + 1;

    [...cpfSubstring].forEach((c,index) => {
        somatorio += multiplicador * c;
        multiplicador--;
    })

    let resto = somatorio % 11;

    let digito = 11 - resto;

    digito = digito >= 10 ? 0 : digito;

    return digito;
}