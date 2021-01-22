import { TextField, Button } from '@material-ui/core';
import React, {useState} from 'react';

const DadosUsuario = ({validacoes,proximo,coletarDados}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha:{valido:true,texto:""}})
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            coletarDados({email:email, senha:senha});
            proximo();
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
                    setErros({senha:{valido:true}})
                }}
                onBlur={(e) => {
                    setErros({senha:validacoes.senha(senha)})
                }}
                value={senha}
                error={!erros.senha.valido}
                helperText={erros.senha.valido ? "" : erros.senha.texto} 
            />

            <Button type="submit" color="primary" variant="contained">Próximo</Button>

        </form>
    );
}

export default DadosUsuario;
