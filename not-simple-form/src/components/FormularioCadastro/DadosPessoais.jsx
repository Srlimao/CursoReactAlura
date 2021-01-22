import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

const DadosPessoais = ({validacoes,proximo,coletarDados}) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState(0);
    const [promo, setPromo] = useState(true);
    const [news, setNews] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true,texto:""}})

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            coletarDados({nome:nome,sobrenome:sobrenome,cpf:cpf,promo:promo,news:news});
            proximo();
        }}>
            <TextField 
                id="name-input" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                required
                margin="dense"            
                onChange={(e) => {
                    let newNome = e.target.value.length >= 3 
                        ? e.target.value.substr(0,3) 
                        : e.target.value;
                    setNome(newNome);
                }}
                value={nome}
                
            />

            <TextField 
                id="sobrenome-input" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                required
                margin="dense"
                onChange={(e) => {
                    setSobrenome(e.target.value);
                }}
                value={sobrenome}
            />

            <TextField 
                id="cpf-input"
                label="CPF"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                onChange={(e) => {
                    setCpf(e.target.value);
                    setErros({cpf:{valido:true}})
                }}
                onBlur={(e) => {
                    setErros({cpf:validacoes.cpf(cpf)})
                }}
                value={cpf}
                type="number"
                error={!erros.cpf.valido}
                helperText={erros.cpf.valido ? "" : erros.cpf.texto} 
            />

            <FormControlLabel
                control={
                    <Switch
                        onChange={(e) => {
                            setPromo(e.target.checked);
                        }}
                        checked = {promo}                  
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        onChange={(e) => {
                            setNews(e.target.checked);
                        }}
                        checked = {news}
                    />
                }
                label="News"
            />

            

            <Button type="submit" color="primary" variant="contained">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;
