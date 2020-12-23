import Cliente from './Cliente.js'
import Gerente from './funcionarios/Gerente.js'
import Diretor from './funcionarios/Diretor.js'
import SistemaAutenticacao from './SistemaAutenticacao.js'

const diretor = new Diretor('Rodrigo', 10000, 12345678913)
diretor.cadastrarSenha('159489789')

const gerente = new Gerente('Ricardo', 5000, 12345678999)
gerente.cadastrarSenha('987654')

const cliente = new Cliente('Lais', '123', '321')

const isLogged = SistemaAutenticacao.login(cliente, '321')

console.log(isLogged)
