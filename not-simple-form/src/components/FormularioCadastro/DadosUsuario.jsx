import { TextField, Button } from '@material-ui/core';
import React, {useState} from 'react';

const DadosUsuario = ({aoEnviar}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            aoEnviar({usuario:{email:email, senha:senha}});
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email"
                variant="outlined" 
                fullWidth 
                margin="dense"
                required
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
            />

            <TextField 
                id="senha" 
                label="senha" 
                type="password"            
                variant="outlined" 
                fullWidth 
                margin="dense"
                required
                onChange={(e) => {
                    setSenha(e.target.value);
                }}
                value={senha}
            />

            <Button type="submit" color="primary" variant="contained">Próximo</Button>

        </form>
    );
}

export default DadosUsuario;
