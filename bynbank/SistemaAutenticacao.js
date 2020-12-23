class SistemaAutenticacao {
  static login (autenticavel, senha) {
    if (this.ehAutenticavel(autenticavel)) { return autenticavel.autenticar(senha) }
    throw new Error('Classe não é autenticavel')
  }

  static ehAutenticavel (autenticavel) {
    return 'autenticar' in autenticavel
  }
}

export default SistemaAutenticacao
