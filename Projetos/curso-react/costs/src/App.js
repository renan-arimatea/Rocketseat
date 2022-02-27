import './App.css';
import logo192 from "./img/logo192.png"
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from "./components/Frase"

function App() {

  const name = "Renan"

  const newName = name.toUpperCase()

  const soma = (a , b) => {
    return a + b
  }

  const url = "https://source.unsplash.com/150x150"

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <p>Hello React</p>

      <p>Olá, {newName}...</p>

      <p>Soma: {soma(1,2)}</p>

      <img src={logo192} alt="" />

      <br />

      <img src={url} alt="Minha Imagem" />

      <HelloWorld/>
      <SayMyName nome="Dayana"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={name}/>

      <Frase/>

      <Pessoa
      foto="https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60/"
      nome="Marcos"
      idade="28"
      profissao="Engenheiro de Software"
      />
    </div>
  );
}

export default App;
