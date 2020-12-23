const infoClientes =[
    {nome: "jairo" ,cpf: "12345678938"},
    {nome: "Elena" ,cpf: "98765432112"},
    {nome: "jairo" ,cpf: "77777777777"},
    {nome: "jairo" ,cpf: "77777777777"},
    {nome: "jairo" ,cpf: "77777777777"},
    {nome: "jairo" ,cpf: "77777777777"},
]



const corpoTabela = document.querySelector('[data-conteudo-tabela]')

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha = 
        `<td>${cpf}</td>
        <td>${nome}</td>`
    linha.innerHTML = conteudoLinha

    return linha
}

infoClientes.forEach(el => {
    console.log(el);
    corpoTabela.appendChild(exibeCliente(el.cpf,el.nome));
})