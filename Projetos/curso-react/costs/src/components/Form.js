function Form () {

    function cadastrarUsuario (event) {
        event.preventDefault()
        console.log("Usuário cadastrado com successo!")
    }
    return (
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
