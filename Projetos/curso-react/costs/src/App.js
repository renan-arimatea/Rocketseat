import './App.css';
import logo192 from "./img/logo192.png"
import HelloWorld from './components/HelloWorld';

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
    </div>
  );
}

export default App;
