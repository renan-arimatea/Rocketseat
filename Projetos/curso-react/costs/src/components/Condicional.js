import { useState } from "react"

function Condicional()  {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail (e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail () {
        setUserEmail("")

    }

    return (
        <div>
            <h3>Cadastre o seu email:</h3>

            <form action="">
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>

                <button type="submit" onClick={enviarEmail}>Enviar email</button>

                {userEmail && (
                    <div>
                        <p>o email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
                
            </form> 
        </div>
    )
}

export default Condicional
