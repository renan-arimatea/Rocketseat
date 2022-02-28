import {useState} from "react"

function Form () {

    function cadastrarUsuario (event) {
        event.preventDefault()
        console.log(`Usuário: ${name} foi caddastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(event) => setName(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password"> Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
