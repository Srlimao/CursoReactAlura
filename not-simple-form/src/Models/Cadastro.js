const _validaCpf = (cpf) => {
    if(cpf.length !== 11)
      return {valido:false, texto:"CPF deve ter 11 dígitos"}
    return {valido:true}
  }

  const _validaSenha = (senha) => {
    if(senha.length < 8 || senha.length > 72)
      return {valido:false, texto:"Senha deve ter entre 8 e 72 dígitos"}
    return {valido:true}
  }

export {_validaCpf as ValidaCpf, _validaSenha as ValidaSenha}