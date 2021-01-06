const formCadastro = document.querySelector('[data-form]');

formCadastro.addEventListener('submit',(event) => {
    event.preventDefault();

    const clienteNome = event.target.querySelector('[data-nome]').value;
    const clienteCPF = event.target.querySelector('[data-cpf]').value;

    if(cpfValido(clienteCPF)){
        cadastraClientes(clienteNome,clienteCPF);
    }else{
        alert('CPF INVÁLIDO!')
    }

})