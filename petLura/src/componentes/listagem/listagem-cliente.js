import { deletaCliente, listarClientes} from '../../api/cliente.js'

const removeCliente = (id) => {
    if(confirm('Deseja deletar o cliente?')){
        deletaCliente(id);
    }
}

const corpoTabela = document.querySelector('[data-conteudo-tabela]')

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudoLinha = 
        `<td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})"> Deletar</button>
        <a href="../componentes/edita/edita-cliente.html?id=${id}">
        <button type="button" class="btn btn-info">Editar</button>
        </a>
        
        `
    linha.innerHTML = conteudoLinha

    return linha
}

listarClientes().then((json) => {
    json.forEach(el => {
        corpoTabela.appendChild(exibeCliente(el.cpf,el.nome, el.id));
    })
}) 