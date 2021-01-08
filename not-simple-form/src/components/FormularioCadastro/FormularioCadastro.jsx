import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormularioCadastro = ({functionLogForm,funcValidaCpf}) => {
    const[etapaAtual,setEtapaAtual] = useState(0);
    const[formInfo,setFormInfo] = useState({usuario:{},entrega:{},pessoais:{}});
    const aoEnviar = (data) => {
        console.log(data);
        setFormInfo({...formInfo,data})
        console.log(formInfo);
        setEtapaAtual(etapaAtual+1);
    }

    const forms = [<DadosUsuario aoEnviar={aoEnviar}/>,
        <DadosPessoais funcValidaCpf={funcValidaCpf} aoEnviar={aoEnviar}></DadosPessoais>,
        <DadosEntrega aoEnviar={() => functionLogForm(formInfo)}/>]    

    const formularioAtual = (etapaAtual) => {
        return forms[etapaAtual];
    }

    return (
        <>
        {formularioAtual(etapaAtual)}
        </>
    );
}




//

export default FormularioCadastro;
