import './App.css';

function App() {

  const name = "Renan"

  const newName = name.toUpperCase()

  function soma(a, b) {
    return (a + b)
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className='App'>
      <h1>Olá React!</h1>
      <p>Meu Primeiro APP em React</p>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(3,5)}</p>
      <img src={url} alt='Minha Imagem'/>
    </div>
  );
}

export default App;
