import './App.css';
import 'fontsource-roboto';
import FormularioCadastro from './components/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';

import {ValidaCpf,ValidaSenha} from './Models/Cadastro'

function App() {
  const _logForm = (formInfo) => {
    console.log(formInfo);
  }
  
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" align="center">
        Formulario cadastro
      </Typography>
      <FormularioCadastro functionLogForm ={_logForm} validacoes = {{cpf:ValidaCpf, senha:ValidaSenha}}/>
    </Container>
  );
}


export default App;
