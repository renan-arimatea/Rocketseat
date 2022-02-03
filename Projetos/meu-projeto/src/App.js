import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Dayana"

  return (
    <div className='App'>
      <Frase />
      <SayMyName nome="Renan"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Renan"
      idade="26"
      profissao="Desenvolvedor"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
