const pegaURL = new URL(window.location);

const formCadastro = document.querySelector('[data-form]');

const id = pegaURL.searchParams.get('id');

const msgSucesso = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <div class="alert alert-success" row="alert"> 
        ${mensagem}
    </div>
    `
    linha.innerHTML = conteudoLinha;
    return linha;
}

const msgErro = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <div class="alert alert-danger" row="alert"> 
        ${mensagem}
    </div>
    `
    linha.innerHTML = conteudoLinha;
    return linha;
}

const clienteNome = document.querySelector('[data-nome]');
const clienteCPF = document.querySelector('[data-cpf]');


detalhaCliente(id).then((json) => {
    json.forEach(el => {
        clienteNome.value = el.nome;
        clienteCPF.value = el.cpf;
    })
})

formCadastro.addEventListener('submit',(event) => {
    event.preventDefault();

    if(!cpfValido(clienteCPF.value))
        return alert('CPF INVÁLIDO!');
    
    
    editaCliente(id,clienteNome.value,clienteCPF.value)
        .then((resp) => {
            if(resp.status == 200)
                formCadastro.appendChild(msgSucesso('Alterado com sucesso'));
            else
                formCadastro.appendChild(msgErro('Erro executado com sucesso'));
        });
    
})

