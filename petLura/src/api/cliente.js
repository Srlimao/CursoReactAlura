const listarClientes = () => {
    return fetch('http://localhost:4000/Clientes')
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        return json;
    })
}


const cadastraClientes = (nome,cpf) => {

    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/Clientes/cliente',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    }).then((resp) => {
        return resp.body;
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
    .then((response) => {
        return response.json();
    }).then((json) => {
        return json;
    })
}

const editaCliente = (id, nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf,
        id: id
    })
    return fetch(`http://localhost:4000/Clientes/cliente/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    }).then((resp) => {
        return resp;
    })
}

export {
    listarClientes,
    deletaCliente,
    detalhaCliente,
    editaCliente,
    cadastraClientes
}
