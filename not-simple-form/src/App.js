import './App.css';
import 'fontsource-roboto';
import FormularioCadastro from './components/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';

function App() {
  const _logForm = (formInfo) => {
    console.log(formInfo);
  }
  const _validaCpf = (cpf) => {
    if(cpf.length !== 11)
      return {valido:false, texto:"CPF deve ter 11 digitos"}
    return {valido:true}
  }
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" align="center">
        Formulario cadastro
      </Typography>
      <FormularioCadastro functionLogForm ={_logForm} funcValidaCpf = {_validaCpf}/>
    </Container>
  );
}


export default App;
