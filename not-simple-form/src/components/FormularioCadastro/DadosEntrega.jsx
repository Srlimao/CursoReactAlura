import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const DadosEntrega = ({aoEnviar}) => {
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            aoEnviar({entrega:{cep:cep,numero:numero,endereco:endereco,estado:estado,cidade:cidade}});
        }}>
            <TextField id="cep" label="cep" type="number" variant="outlined" margin="dense" required
                onChange={(e) => { setCep(e.target.value);}}
                value={cep}
            />
            <TextField id="numero" label="numero" type="number" variant="outlined" margin="dense" required
                onChange={(e) => { setNumero(e.target.value);}}
                value={numero}
            />
            <TextField id="endereco" label="endereco" variant="outlined" fullWidth margin="dense"
                onChange={(e) => { setEndereco(e.target.value);}}
                value={endereco}
            />
            <TextField id="estado" label="estado" variant="outlined" margin="dense"
                onChange={(e) => { setEstado(e.target.value);}}
                value={estado}
            />
            <TextField id="cidade" label="cidade" variant="outlined" margin="dense"
                onChange={(e) => { setCidade(e.target.value);}}
                value={cidade}
            />
            

            <Button type="submit" color="primary" variant="contained" fullWidth>Finalizar</Button>
        </form>
    );
}

export default DadosEntrega;
