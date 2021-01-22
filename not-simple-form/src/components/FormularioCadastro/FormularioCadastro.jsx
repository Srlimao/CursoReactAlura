import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

/*
ETAPAS:
0=usuario
1=pessoais
2=entrega
*/

const FormularioCadastro = ({functionLogForm,validacoes}) => {
    const[etapaAtual,setEtapaAtual] = useState(0);
    const[formInfo,setFormInfo] = useState({usuario:{},entrega:{},pessoais:{}});

    useEffect(() => {
        if(etapaAtual === forms.length - 1)
            functionLogForm(formInfo);
    });
    const proximo = () => {
        setEtapaAtual(etapaAtual+1);       
    }

    const coletarDados = (dados) => {
        let newObj;

        if(etapaAtual === 0)
            newObj = {...formInfo,usuario:dados};
        else if(etapaAtual === 1)
            newObj = {...formInfo,pessoais:dados};
        else if(etapaAtual === 2)
            newObj = {...formInfo,entrega:dados};

        setFormInfo(newObj);
    }

    const forms = [
        <DadosUsuario validacoes={validacoes} proximo={proximo} coletarDados={coletarDados} />,
        <DadosPessoais validacoes={validacoes} proximo={proximo} coletarDados={coletarDados}></DadosPessoais>,
        <DadosEntrega validacoes={validacoes} proximo={proximo} coletarDados={coletarDados} />,
        <Typography variant="h5">Obrigado por se Cadastrar!</Typography>
        ] 

    const formularioAtual = (etapaAtual) => {
        return forms[etapaAtual];
    }

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularioAtual(etapaAtual)}
        </>
    );
}




//

export default FormularioCadastro;
